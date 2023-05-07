import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { users, User } from '../static/users';

interface AuthContextType {
  isAuthenticated: boolean;
  username: string;
  password: string;
  role: string;
  login: (username: string, password: string) => void;
  logout: () => void;
  setRememberMe: Dispatch<SetStateAction<boolean>>;
  rememberMe: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  username: '',
  password: '',
  role: '',
  login: () => {},
  logout: () => {},
  setRememberMe: () => {},
  rememberMe: false,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

const toastConfig = { position: 'bottom-center' };

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [rememberMe, setRememberMe] = React.useState<boolean>(false);

  const checkLogin = (username: string, password: string) => {
    return users.find((user) => user.username === username && user.password === password);
  };

  const login = (username: string, password: string) => {
    const user = checkLogin(username, password);
    if (user) {
      setUsername(user.username);
      setPassword(user.password);
      setRole(user.role);
      setIsAuthenticated(true);
      toast.success('Log in user success', { position: 'bottom-center' });
    } else {
      toast.error('Invalid username or password', {
        position: 'bottom-center',
      });
    }
  };

  const logout = () => {
    setUsername('');
    setPassword('');
    setRole('');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        username,
        password,
        role,
        setRememberMe,
        rememberMe,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
