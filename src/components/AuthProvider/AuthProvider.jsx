import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useState, useEffect } from 'react';
import AuthContext from '../AuthContext/AuthContext';
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
