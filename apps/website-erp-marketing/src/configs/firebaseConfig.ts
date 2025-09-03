import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyCZdZmjV6lOALdD4ajQb2rmPS8kYpw2T4U',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'innovapaz-auth.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'innovapaz-auth',
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'innovapaz-auth.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '922230883439',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:922230883439:web:f46c1e884ecd3a9883b99a',
};

// Log config for debugging (only in development)
if (import.meta.env.DEV) {
  console.log('🔥 Firebase Config:', firebaseConfig);
}

let app;
let auth;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  console.log('✅ Firebase initialized successfully');
} catch (error) {
  console.error('❌ Firebase initialization failed:', error);
  throw new Error(
    'Failed to initialize Firebase: ' + (error instanceof Error ? error.message : String(error))
  );
}

export { auth };
