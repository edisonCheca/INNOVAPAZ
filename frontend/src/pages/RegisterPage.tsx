import React from 'react';
import Input from '@/components/common/Input';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Button from '@/components/common/Button';
import illustrationPicture from '@/assets/icons/illustrationPicture.svg';
import logoInnovapaz from '@/assets/images/logoInnovaPaz.svg';
import './RegisterPage.css';

const RegisterPage: React.FC = () => {
  return (
    <div className="register-bg">
      <div className="register-illustration">
        <div className="register-badge">
          <img src={logoInnovapaz} alt="INNOVAPAZ logo" className="register-logo-img" />
          <span className="register-logo-text">INNOVAPAZ</span>
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
          <Input label="Nombre" placeholder="Tu nombre" name="firstName" type="text" />
          <Input
            label="Correo electrónico"
            placeholder="ejemplo@email.com"
            name="email"
            type="email"
          />
          <Input
            label="Contraseña"
            placeholder="Contraseña"
            name="password"
            type="password"
            showTogglePassword
            showPasswordIcon={FaEye}
            hidePasswordIcon={FaEyeSlash}
          />
          <Input
            label="Confirmar Contraseña"
            placeholder="Repite tu contraseña"
            name="confirmPassword"
            type="password"
            showTogglePassword
            showPasswordIcon={FaEye}
            hidePasswordIcon={FaEyeSlash}
          />
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Button
              type="submit"
              title="Registrarse"
              backgroundColor="var(--bg-100)"
              textColor="var(--pri-900)"
              hasBackground={true}
              borderColor="transparent"
              titleFontWeight="bold"
              size="large"
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
