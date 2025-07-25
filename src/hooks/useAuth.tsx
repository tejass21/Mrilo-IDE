import { useState, useEffect, createContext, useContext } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  console.log('AuthProvider rendering...');
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('AuthProvider useEffect starting...');
    try {
      // Set up auth state listener FIRST
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (event, session) => {
          console.log('Auth state change:', event, !!session);
          setSession(session);
          setUser(session?.user ?? null);
          setLoading(false);
          
          // Create profile if user signs up and doesn't have one
          if (event === 'SIGNED_IN' && session?.user) {
            setTimeout(() => {
              createProfileIfNeeded(session.user);
            }, 0);
          }
        }
      );

      // THEN check for existing session
      supabase.auth.getSession().then(({ data: { session } }) => {
        console.log('Initial session check:', !!session);
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }).catch((error) => {
        console.error('Error getting session:', error);
        setLoading(false);
      });

      return () => subscription.unsubscribe();
    } catch (error) {
      console.error('Error in AuthProvider useEffect:', error);
      setLoading(false);
    }
  }, []);

  const createProfileIfNeeded = async (user: User) => {
    try {
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('id')
        .eq('user_id', user.id)
        .single();

      if (!existingProfile) {
        await supabase
          .from('profiles')
          .insert([
            {
              user_id: user.id,
              display_name: user.email?.split('@')[0] || 'User',
            }
          ]);
      }
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut({ scope: 'global' });
      setUser(null);
      setSession(null);
      window.location.href = '/auth';
    } catch (error) {
      console.error('Error signing out:', error);
      // Force sign out locally even if server call fails
      setUser(null);
      setSession(null);
      window.location.href = '/auth';
    }
  };

  console.log('AuthProvider state:', { user: !!user, session: !!session, loading });

  // Show loading state or children
  if (loading) {
    console.log('AuthProvider showing loading...');
    return (
      <AuthContext.Provider value={{ user, session, loading, signOut }}>
        {children}
      </AuthContext.Provider>
    );
  }

  console.log('AuthProvider showing children...');
  return (
    <AuthContext.Provider value={{ user, session, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};