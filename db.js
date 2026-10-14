/* TechService — camada de persistência.
   Os dados ficam gravados no armazenamento local do navegador (localStorage),
   organizados em tabelas: usuarios, clientes, equipamentos e ordens. */
const DB_KEY = 'techservice_db';
const SESSAO_KEY = 'techservice_sessao';

function dadosIniciais() {
  return {
    usuarios: [
      { id: 1, nome: 'Ana Lima', email: 'atendente@techservice.com', senha: 'Teste@123', perfil: 'Atendente' },
      { id: 2, nome: 'Carlos Souza', email: 'tecnico@techservice.com', senha: 'Teste@123', perfil: 'Técnico' },
      { id: 3, nome: 'Administrador', email: 'admin@techservice.com', senha: 'Teste@123', perfil: 'Administrador' }
    ],
    clientes: [
      { id: 1, nome: 'Maria Oliveira', cpf: '123.456.789-09', telefone: '(11) 98888-7777', email: 'maria@email.com', criadoEm: new Date().toISOString() }
    ],
    equipamentos: [
      { id: 1, clienteId: 1, tipo: 'Notebook', marca: 'Dell', modelo: 'Inspiron 15', serie: 'ABC12345', criadoEm: new Date().toISOString() }
    ],
    ordens: [],
    seq: { cliente: 2, equipamento: 2, ordem: 1 }
  };
}

const DB = {
  carregar() {
    try {
      const bruto = localStorage.getItem(DB_KEY);
      if (bruto) return JSON.parse(bruto);
    } catch (e) { /* dados corrompidos: recria */ }
    const novo = dadosIniciais();
    this.gravar(novo);
    return novo;
  },
  gravar(dados) {
    localStorage.setItem(DB_KEY, JSON.stringify(dados));
  },
  restaurar() {
    const novo = dadosIniciais();
    this.gravar(novo);
    return novo;
  },
  sessao() {
    try { return JSON.parse(localStorage.getItem(SESSAO_KEY)); } catch (e) { return null; }
  },
  entrar(usuarioId) { localStorage.setItem(SESSAO_KEY, JSON.stringify({ usuarioId, desde: new Date().toISOString() })); },
  sair() { localStorage.removeItem(SESSAO_KEY); }
};
