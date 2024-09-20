import React, { useState } from 'react';
import './dashboard.css'; // Importando o CSS

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  

  const chamados = [
    { id: '001', titulo: 'Erro no servidor', status: 'Aberto' },
    { id: '002', titulo: 'Atualização de software', status: 'Fechado' },
    { id: '003', titulo: 'Bug no login', status: 'Aberto' },
    { id: '004', titulo: 'Ajuste no layout', status: 'Fechado' },
    { id: '005', titulo: 'Falha na conexão', status: 'Aberto' },
  ];

  const handleCardClick = (type) => {
    setSelectedCard(type);
    //setSelectedCard(true); // Limpa qualquer listagem de card
    setIsFormOpen(null);   // Exibe o formulário
  };

  const handleNovoChamado = () => {
    setSelectedCard(null); // Limpa qualquer listagem de card
    setIsFormOpen(true);   // Exibe o formulário
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Chamado aberto com sucesso!');
    setIsFormOpen(false);
  };

  const filteredChamados = selectedCard
    ? chamados.filter((chamado) =>
        selectedCard === 'abertos'
          ? chamado.status === 'Aberto'
          : chamado.status === 'Fechado'
      )
    : [];

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li><a href="#" onClick={handleNovoChamado}>Novo Chamado</a></li>
          <li><a href="/meus-chamados">Meus Chamados</a></li>
          <li><a href="/banco-conhecimento">Banco de Conhecimento</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </aside>
      <main className="main-content">
        <h1>Bem Vindo, Leandro Nardiello!</h1>
        <div className="card-container">
          <div className="card" onClick={() => handleCardClick('abertos')}>
            <h3>Chamados Pendentes</h3>
            <p>5 Chamados</p>
          </div>
          <div className="card" onClick={() => handleCardClick('fechados')}>
            <h3>Chamados Finalizados</h3>
            <p>10 Chamados</p>
          </div>
          <div className="card" onClick={() => handleCardClick('todos')}>
            <h3>Todos os Chamados</h3>
            <p>15 Chamados</p>
          </div>
        </div>

        {/* Renderizando a lista de chamados */}
        {selectedCard && (
          <div className="chamado-list">
            <h2>{selectedCard === 'abertos' ? 'Chamados Abertos' : 'Chamados Fechados'}</h2>
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Título</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredChamados.map((chamado) => (
                  <tr key={chamado.id}>
                    <td>{chamado.id}</td>
                    <td>{chamado.titulo}</td>
                    <td>{chamado.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {isFormOpen && (
          <div className="novo-chamado-form">
            <h2>Abrir Novo Chamado</h2>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label>Título:</label>
                <input type="text" required />
              </div>
              <div>
                <label>Descrição:</label>
                <textarea required></textarea>
              </div>
              <div>
                <label>Prioridade:</label>
                <select>
                  <option>Baixa</option>
                  <option>Média</option>
                  <option>Alta</option>
                </select>
              </div>
              <label>Anexar Arquivo:</label>
                <input type="file" onChange={handleFileChange} />
              <button type="submit">Abrir Chamado</button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
