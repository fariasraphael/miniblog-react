import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthantication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //cleanup
  //deal with memorylek
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) return;
  }

  // Register
  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMEssage;

      if (error.message.includes("Password")) {
        systemErrorMEssage = "A senha precisa conter pelo menso 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        systemErrorMEssage = "E-mail já cadastrado.";
      } else {
        systemErrorMEssage = "E-mail já cadastrado.";
      }

      setError(systemErrorMEssage);
    }
  };

  //Logout | sign out
  const logout = () => {
    checkIfIsCancelled();

    signOut(auth);
  };

  // login- sign in
  const login = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(false);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
      let systemErrorMEssage;

      if (error.message.includes("auth/invalid-credential")) {
        systemErrorMEssage = "Usuário ou senha incorreto.";
      } else if (error.message.includes("auth/invalid-email")) {
        systemErrorMEssage = "Digite um e-mail cadastrado.";
      } else if (error.message.includes("auth/missing-password")) {
        systemErrorMEssage = "Digite sua senha.";
      } else {
        systemErrorMEssage = "ocorreu um erro, por favor tente mais tarde.";
      }
      setError(systemErrorMEssage);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};
