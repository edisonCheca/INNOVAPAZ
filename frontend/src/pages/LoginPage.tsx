import React from 'react';
import Input from '../components/common/Input';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Button from '../components/common/Button';
import illustrationPicture from '@/assets/icons/illustrationPicture.svg';
import Logo from '../components/ui/Logo';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  return (
    <div className="login-bg">
      <div className="login-illustration">
        <div className="login-badge">
          <Logo text="INNOVAPAZ" size="medium" variant="white" />
        </div>
        <img
          src={illustrationPicture}
          alt="Ilustración INNOVAPAZ"
          className="login-illustration-img"
        />
      </div>

      <div className="login-box">
        <h1 className="login-title">Iniciar Sesión</h1>
        <form className="login-form">
          <Input
            label="Correo electrónico"
            placeholder="ejemplo@email.com"
            name="email"
            type="email"
            containerWidth="full"
            size="small"
          />
          <Input
            label="Contraseña"
            placeholder="Contraseña"
            name="password"
            type="password"
            showTogglePassword
            showPasswordIcon={FaEye}
            hidePasswordIcon={FaEyeSlash}
            containerWidth="full"
            size="small"
          />

          <div className="login-forgot">
            <span className="login-forgot-text">¿Olvidaste tu contraseña?</span>
          </div>

          <div>
            <Button
              title="Iniciar Sesión"
              backgroundColor="var(--bg-100)"
              textColor="var(--pri-900)"
              hasBackground={true}
              borderColor="transparent"
              titleFontWeight="normal"
              containerWidth="full"
              height="small"
            />
          </div>

          <div className="login-footer">
            <span className="login-footer-text">¿No tienes cuenta?</span>
            <span className="login-footer-link">Regístrate</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
