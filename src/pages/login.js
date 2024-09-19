// src/pages/Login.js
import React from 'react';
import './login.css'; // Importando o CSS

function Login() {
  return (
    <div className="login-container">
      <div className="login-left">
        {/* Logotipo */}
        <img src="/logo512.png" alt="Logo" className="logo" />
      </div>
      <div className="login-right">
        {/* Formulário de Login */}
        <form className="login-form">
          <h2>Bem-vindo de volta!</h2>
          <p>Entre com suas credenciais para acessar sua conta</p>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Digite seu email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha" />
          </div>
          <button type="submit" className="login-btn">Entrar</button>
          <p className="forgot-password">Esqueceu sua senha?</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
