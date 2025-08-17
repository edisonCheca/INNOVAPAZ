import React from 'react';
import Input from '../components/common/Input.tsx';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Button from '../components/common/Button.tsx';
import illustrationPicture from '@/assets/icons/illustrationPicture.svg';
import Logo from '../components/ui/Logo';
import './RegisterPage.css';

const RegisterPage: React.FC = () => {
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
        <h1 className="register-title">Registrarse</h1>
        <form className="register-form">
          <Input
            label="Nombre"
            placeholder="Tu nombre"
            name="firstName"
            type="text"
            containerWidth="full"
            size="small"
          />
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
          <Input
            label="Confirma tu contraseña"
            placeholder="Confirma tu contraseña"
            name="confirmPassword"
            type="password"
            showTogglePassword
            showPasswordIcon={FaEye}
            hidePasswordIcon={FaEyeSlash}
            containerWidth="full"
            size="small"
          />
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Button
              title="Registrarse"
              backgroundColor="var(--bg-100)"
              textColor="var(--pri-900)"
              hasBackground={true}
              borderColor="transparent"
              titleFontWeight="normal"
              containerWidth="full"
              height="large"
            />
          </div>
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
