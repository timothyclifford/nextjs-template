import { auth, db } from 'config/firebase';
import nookies from 'nookies';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

const AuthContext = createContext<{
  user: firebase.User | null;
  signUp: unknown;
  signIn: unknown;
  signOut: unknown;
  sendPasswordResetEmail: unknown;
}>({
  user: null,
  signUp: null,
  signIn: null,
  signOut: null,
  sendPasswordResetEmail: null,
});

export function AuthProvider(props: { children: ReactNode }): JSX.Element {
  const auth = useAuthProvider();
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider hook that creates an auth object and handles it's state
const useAuthProvider = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const handleAuthStateChanged = (user: firebase.User) => {
    setUser(user);
    if (user) {
      getUserAdditionalData(user);
    }
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(handleAuthStateChanged);
    return () => unsub();
  }, []);

  useEffect(() => {
    if (user?.uid) {
      // Subscribe to user document on mount
      const unsubscribe = db
        .collection('users')
        .doc(user.uid)
        .onSnapshot((doc) => setUser(doc.data()));
      return () => unsubscribe();
    }
  }, []);

  const createUser = async (user) => {
    try {
      await db.collection('users').doc(user.uid).set(user);
      setUser(user);
      return user;
    } catch (error) {
      return { error };
    }
  };

  const getUserAdditionalData = async (user: firebase.User) => {
    const userData = await db.collection('users').doc(user.uid).get();
    if (userData.data()) {
      setUser(userData.data());
    }
  };

  const signUp = async ({ name, email, password }) => {
    try {
      const createUserResponse = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      auth.currentUser.sendEmailVerification();
      return await createUser({
        uid: createUserResponse.user.uid,
        email,
        name,
      });
    } catch (error) {
      return { error };
    }
  };

  const signIn = async ({ email, password }) => {
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      const token = await user.getIdToken();
      setUser(response.user);
      getUserAdditionalData(user);
      nookies.destroy(null, 'token');
      nookies.set(null, 'token', token, {});
      return response.user;
    } catch (error) {
      return { error };
    }
  };

  const signOut = async () => {
    await auth.signOut();
    return setUser(false);
  };

  const sendPasswordResetEmail = async (email: string) => {
    const response = await auth.sendPasswordResetEmail(email);
    return response;
  };

  return {
    user,
    signUp,
    signIn,
    signOut,
    sendPasswordResetEmail,
  };
};
