import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../configs/firebaseConfig';

interface User {
  displayName: string;
  photoURL: string;
  email?: string;
}

interface UserContextProps {
  user: User | null;
  logout: () => Promise<void>;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  logout: async () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const userData = {
          displayName: firebaseUser.displayName || 'Usuario Anónimo',
          photoURL: firebaseUser.photoURL || '/default-avatar.png',
          email: firebaseUser.email || '',
        };
        setUser(userData);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
  if (loading) {
    return <div>Cargando aplicación...</div>;
  }
  return <UserContext.Provider value={{ user, logout }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
