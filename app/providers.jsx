"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, createContext, useContext, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Create Auth Context
const AuthContext = createContext();

// Sample user data for development
const sampleUser = {
  id: 1,
  name: "Maulana",
  email: "maaulln@gmail.com",
  avatar: "/placeholder.svg?height=40&width=40",
  bio: "Saya adalah seorang pelajar yang bersemangat untuk belajar hal-hal baru.",
  phone: "081234567890",
  address: "Jakarta, Indonesia",
};

// Auth Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate authentication check
  useEffect(() => {
    // In a real app, this would check for a token in localStorage or cookies
    // and validate it with the backend
    const checkAuth = () => {
      // For demo purposes, we'll just set the sample user
      setUser(sampleUser);
      setLoading(false);
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email, password) => {
    setUser(sampleUser);
    return true;
  };

  // Logout function
  const logout = () => {
    // In a real app, this would clear tokens from localStorage or cookies
    setUser(null);
  };

  // Register function
  const register = async (name, email, password) => {
    // In a real app, this would make an API call to register
    // For demo purposes, we'll just set the sample user
    const newUser = { ...sampleUser, name, email };
    setUser(newUser);
    return true;
  };

  // Update user function
  const updateUser = (userData) => {
    setUser({ ...user, ...userData });
  };

  // Context value
  const value = {
    user,
    loading,
    login,
    logout,
    register,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Main Providers wrapper
export function Providers({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            staleTime: 5 * 60 * 1000, // 5 minutes
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </AuthProvider>
    </QueryClientProvider>
  );
}
