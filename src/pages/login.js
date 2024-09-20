import React, { useState } from 'react';
import './login.css'; // Importando o CSS
import { useNavigate } from 'react-router-dom'; // Para redirecionar

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Redirecionando diretamente para o dashboard
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="/logo512.png" alt="Logo" className="logo" />
      </div>
      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Bem Vindo ao SmartFix</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>
          <button type="submit" className="login-btn">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
