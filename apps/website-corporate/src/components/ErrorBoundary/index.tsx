import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '../UI/Button';
import styles from './ErrorBoundary.module.css';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error);
      console.error('Error info:', errorInfo);
    }

    // Here you could also log to an error reporting service
    // logErrorToService(error, errorInfo);
  }

  handleResetError = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const { fallback: Fallback } = this.props;

      if (Fallback) {
        return <Fallback error={this.state.error} resetError={this.handleResetError} />;
      }

      return (
        <div className={styles.errorBoundary}>
          <AlertTriangle className={styles.icon} />
          <h1 className={styles.title}>¡Ups! Algo salió mal</h1>
          <p className={styles.message}>
            Ha ocurrido un error inesperado. Por favor, intenta recargar la página o volver al
            inicio. Si el problema persiste, contacta a nuestro equipo de soporte.
          </p>

          <div className={styles.actions}>
            <Button
              variant='primary'
              onClick={this.handleResetError}
              icon={<RefreshCw size={18} />}
            >
              Intentar de nuevo
            </Button>

            <Button variant='secondary' onClick={this.handleReload} icon={<RefreshCw size={18} />}>
              Recargar página
            </Button>

            <Button as='link' to='/' variant='outline' icon={<Home size={18} />}>
              Ir al inicio
            </Button>
          </div>

          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className={styles.details}>
              <summary>Detalles del error (Solo en desarrollo)</summary>
              <pre>
                {this.state.error.toString()}
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook para components funcionales
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
) => {
  const WrappedComponent: React.FC<P> = (props) => (
    <ErrorBoundary fallback={fallback}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;

  return WrappedComponent;
};
