import React, { useState } from 'react';
import '../Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // Simulated delay for premium feel
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
                console.log('Login realizado:', data);
            } else {
                setError(data.message || 'Falha no login');
            }
        } catch (err) {
            setError('Erro de conexão. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="glass-card">
                <div className="login-header">
                    <h2 className="login-title">Bem-vindo</h2>
                    <p className="login-subtitle">Acesso exclusivo à plataforma</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <label htmlFor="username">Usuário</label>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                id="username"
                                placeholder="Seu usuário"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="label-row">
                            <label htmlFor="password">Senha</label>
                            <a href="#" className="forgot-password">Esqueceu a senha?</a>
                        </div>
                        <div className="input-wrapper">
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {error && <div className="error-message">{error}</div>}
                    {success && <div className="success-message">Acesso concedido. Bem-vindo de volta!</div>}

                    <button type="submit" className="login-button" disabled={isLoading}>
                        {isLoading ? (
                            <span className="loader"></span>
                        ) : (
                            'Acessar Conta'
                        )}
                    </button>
                </form>

                <div className="divider">
                    <span>ou continue com</span>
                </div>

                <div className="social-login">
                    <button className="social-button google" type="button">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C9.03,19.27 6.48,16.68 6.48,13.5C6.48,10.31 9.03,7.74 12.19,7.74C13.9,7.74 15.6,8.36 16.67,9.33L18.66,7.34C17.16,5.91 14.87,5.01 12.19,5.01C7.51,5.01 3.71,8.8 3.71,13.5C3.71,18.2 7.51,21.99 12.19,21.99C16.88,21.99 21.61,18.64 21.61,13.5C21.61,12.63 21.48,11.76 21.35,11.1V11.1Z" />
                        </svg>
                    </button>
                    <button className="social-button github" type="button">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21.03C9.5,20.82 9.5,20.24 9.5,19.41C6.73,20.03 6.14,18.1 6.14,18.1C5.69,16.95 5.05,16.65 5.05,16.65C4.14,16.03 5.12,16.05 5.12,16.05C6.12,16.12 6.65,17.09 6.65,17.09C7.53,18.61 8.97,18.17 9.54,17.92C9.63,17.28 9.88,16.84 10.16,16.59C7.94,16.34 5.61,15.48 5.61,11.64C5.61,10.55 6,9.65 6.64,8.95C6.54,8.69 6.19,7.67 6.74,6.31C6.74,6.31 7.58,6.04 9.5,7.33C10.3,7.11 11.15,7 12,7C12.85,7 13.7,7.11 14.5,7.33C16.42,6.04 17.26,6.31 17.26,6.31C17.81,7.67 17.46,8.69 17.36,8.95C18,9.65 18.39,10.55 18.39,11.64C18.39,15.49 16.06,16.33 13.82,16.58C14.18,16.89 14.5,17.5 14.5,18.44C14.5,19.78 14.5,20.86 14.5,21.19C14.5,21.45 14.65,21.76 15.16,21.66C19.13,20.32 22,16.58 22,12A10,10 0 0,0 12,2Z" />
                        </svg>
                    </button>
                </div>

                <p className="register-text">
                    Não tem uma conta? <a href="#">Cadastre-se</a>
                </p>
            </div>
        </div>
    );
};


export default Login;
