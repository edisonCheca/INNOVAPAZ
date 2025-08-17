import React, { useState } from 'react';
import Input from '../components/common/Input.tsx';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Button from '../components/common/Button.tsx';
import illustrationPicture from '@/assets/icons/illustrationPicture.svg';
import Logo from '../components/ui/Logo';
import GoogleButton from '../components/common/GoogleButton';
import './RegisterPage.css';
import { signInWithGoogle } from '../services/auth/firebaseAuthService';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleRegister = async () => {
    setLoading(true);
    setError(null);
    try {
      const { user, error } = await signInWithGoogle();
      if (user) {
        console.log('¡Éxito en registro con Google!', user);
        navigate('/');
      } else {
        setError('Error al registrar con Google. Inténtalo de nuevo.');
        console.error(error);
      }
    } catch (err) {
      setError('Error inesperado. Inténtalo más tarde.');
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="register-bg">
      <div className="register-illustration">
        <div className="register-badge">
          <Logo text="INNOVAPAZ" size="medium" variant="white" />
        </div>
        <img
          src={illustrationPicture}
          alt="Ilustración INNOVAPAZ"
          className="register-illustration-img"
        />
      </div>
      <div className="register-box">
        <h1 className="register-title">Crear una cuenta</h1>
        <form className="register-form">
          <Input
            id="registerFirstName"
            name="firstName"
            label="Nombre"
            placeholder="Tu nombre"
            type="text"
            containerWidth="full"
            size="small"
          />

          <Input
            id="registerEmail"
            name="email"
            label="Correo electrónico"
            placeholder="ejemplo@email.com"
            type="email"
            containerWidth="full"
            size="small"
          />

          <Input
            id="registerPassword"
            name="password"
            label="Contraseña"
            placeholder="Contraseña"
            type="password"
            showTogglePassword
            showPasswordIcon={FaEye}
            hidePasswordIcon={FaEyeSlash}
            containerWidth="full"
            size="small"
          />

          <Input
            id="registerConfirmPassword"
            name="confirmPassword"
            label="Confirma tu contraseña"
            placeholder="Confirma tu contraseña"
            type="password"
            showTogglePassword
            showPasswordIcon={FaEye}
            hidePasswordIcon={FaEyeSlash}
            containerWidth="full"
            size="small"
          />

          <div>
            <Button
              title="Registrate"
              backgroundColor="var(--bg-100)"
              textColor="var(--pri-900)"
              hasBackground={true}
              borderColor="transparent"
              titleFontWeight="normal"
              containerWidth="full"
              height="large"
            />
          </div>

          <div>
            <GoogleButton
              label="Registrarte con Google"
              onClick={handleGoogleRegister}
              disabled={loading}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="register-footer">
            <span className="register-footer-text">¿Ya tienes cuenta?</span>
            <span className="register-footer-link">Inicia Sesión</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
