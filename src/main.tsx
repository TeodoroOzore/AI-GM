import React, { Component, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary atrapó un error:', error, errorInfo);
  }

  handleReset = () => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0d0b09',
          color: '#f3e5ab',
          fontFamily: 'serif',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2rem', color: '#c9a227', marginBottom: '16px' }}>
            ⚔️ Ocurrió un error inesperado
          </h2>
          <p style={{ maxWidth: '500px', color: '#d4c5a9', marginBottom: '24px', lineHeight: 1.6 }}>
            Se ha producido un inconveniente al cargar los datos de la aventura. Puedes restablecer el estado para continuar.
          </p>
          <button
            onClick={this.handleReset}
            style={{
              padding: '12px 28px',
              fontSize: '1.1rem',
              color: '#1d1712',
              background: '#c9a227',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(201,162,39,0.4)'
            }}
          >
            🔄 Restablecer Aventura y Reiniciar
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}

