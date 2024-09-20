import React from 'react';
import './dashboard.css'; // Importando o CSS

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <ul>Menu</ul>
        <ul>
          <li><a href="/meus-chamados">Meus Chamados</a></li>
          <li><a href="/banco-conhecimento">Banco de Conhecimento</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </aside>
      <main className="main-content">
        <h1>Bem-vindo ao Dashboard</h1>
        {/* Conteúdo do dashboard */}
      </main>
    </div>
  );
};

export default Dashboard;
