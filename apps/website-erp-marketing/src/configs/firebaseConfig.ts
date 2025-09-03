import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Debug function
const debugConfig = () => {
  if (import.meta.env.DEV) {
    console.log('🔥 Firebase Environment Variables:');
    console.log('API Key:', import.meta.env.VITE_FIREBASE_API_KEY ? 'Present' : 'Missing');
    console.log('Auth Domain:', import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? 'Present' : 'Missing');
    console.log('Project ID:', import.meta.env.VITE_FIREBASE_PROJECT_ID ? 'Present' : 'Missing');
  }
};

debugConfig();

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyCZdZmjV6lOALdD4ajQb2rmPS8kYpw2T4U',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'innovapaz-auth.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'innovapaz-auth',
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'innovapaz-auth.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '922230883439',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:922230883439:web:f46c1e884ecd3a9883b99a',
};

// Validate required fields
const requiredFields = ['apiKey', 'authDomain', 'projectId', 'appId'];
const missingFields = requiredFields.filter(
  (field) => !firebaseConfig[field as keyof typeof firebaseConfig]
);

if (missingFields.length > 0) {
  console.error('🚨 Firebase config missing required fields:', missingFields);
  throw new Error(`Firebase configuration incomplete. Missing: ${missingFields.join(', ')}`);
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
