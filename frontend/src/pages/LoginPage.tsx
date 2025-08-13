import React from 'react';
import Input from '@/components/common/Input';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Button from '@/components/common/Button';
import illustrationPicture from '@/assets/icons/illustrationPicture.svg';
import logoInnovapaz from '@/assets/images/logoInnovaPaz.svg';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
  return (
    <div className={styles['login-bg']}>
      <div className={styles['login-illustration']}>
        <div className={styles['login-badge']}>
          <img src={logoInnovapaz} alt="INNOVAPAZ logo" className={styles['login-logo-img']} />
          <span className={styles['login-logo-text']}>INNOVAPAZ</span>
        </div>
        <img
          src={illustrationPicture}
          alt="Ilustración INNOVAPAZ"
          className={styles['login-illustration-img']}
        />
      </div>
      <div className={styles['login-box']}>
        <h1 className={styles['login-title']}>Iniciar Sesión</h1>
        <form className={styles['login-form']}>
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
          <div className={styles['login-forgot-password']}>
            <span className={styles['login-forgot-password']}>¿Olvidaste tu contraseña?</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Button
              type="submit"
              title="Iniciar Sesión"
              backgroundColor="var(--bg-100)"
              textColor="var(--pri-900)"
              hasBackground={true}
              borderColor="transparent"
              titleFontWeight="bold"
              size="large"
            />
          </div>
          <div className={styles['login-footer']}>
            <span className={styles['login-footer-text']}>¿No tienes cuenta?</span>
            <span className={styles['login-footer-link']}>Regístrate</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
