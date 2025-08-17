import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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
