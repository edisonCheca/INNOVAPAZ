import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import type { ConfirmationResult } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCZdZmjV6lOALdD4ajQb2rmPS8kYpw2T4U',
  authDomain: 'innovapaz-auth.firebaseapp.com',
  projectId: 'innovapaz-auth',
  storageBucket: 'innovapaz-auth.firebasestorage.app',
  messagingSenderId: '922230883439',
  appId: '1:922230883439:web:f46c1e884ecd3a9883b99a',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return { user: result.user, error: null };
  } catch (error) {
    return { user: null, error: error };
  }
};

export const setupRecaptcha = (containerId: string) => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
      size: 'invisible',
    });
  }
};

export const sendPhoneNumberVerificationCode = async (phoneNumber: string) => {
  try {
    const appVerifier = window.recaptchaVerifier;
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    return { confirmationResult, error: null };
  } catch (error) {
    return { confirmationResult: null, error: error };
  }
};

export const confirmVerificationCode = async (
  confirmationResult: ConfirmationResult,
  code: string
) => {
  try {
    const result = await confirmationResult.confirm(code);
    return { user: result.user, error: null };
  } catch (error) {
    return { user: null, error: error };
  }
};

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
  }
}
