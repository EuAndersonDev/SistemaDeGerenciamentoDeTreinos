### **Sistema De Gerenciamento De Treinos**

---

# **Gerenciamento de Treinos**

Este projeto é uma aplicação FullStack para gerenciar treinos físicos. Ele permite aos usuários cadastrar, editar e acompanhar seus treinos e progresso. A aplicação inclui uma API robusta no backend e uma interface amigável no frontend.

---

## **Arquitetura do Projeto**

A arquitetura segue o padrão **MVC (Model-View-Controller)** para o backend e uma estrutura modular no frontend. 

### **Estrutura Geral**
```
gerenciamento-de-treinos/
  ├── backend/
  │   ├── server.js
  │   ├── routes/
  │   ├── controllers/
  │   ├── models/
  │   ├── middlewares/
  │   ├── config/
  │   └── .env
  ├── frontend/
  │   ├── public/
  │   └── src/
  │       ├── components/
  │       ├── pages/
  │       ├── services/
  │       ├── App.jsx
  │       ├── index.js
  │       └── styles/
  └── README.md
```

### **Backend: Detalhes**
- **`server.js`**: Configuração principal do servidor Express, middlewares globais, e inicialização.
- **Rotas (`routes/`)**: Define os endpoints da API para usuários, treinos, exercícios e progresso.
- **Controladores (`controllers/`)**: Contêm a lógica de negócios, como validações e chamadas ao banco de dados.
- **Modelos (`models/`)**: Representam as tabelas no banco de dados MySQL e gerenciam as operações CRUD.
- **Middlewares (`middlewares/`)**: Funções intermediárias, como autenticação, log de requisições e validação.
- **Configuração (`config/`)**: Configuração de conexão ao banco de dados e variáveis globais.

### **Frontend: Detalhes**
- **Componentes (`components/`)**: Partes reutilizáveis da interface, como formulários, tabelas e gráficos.
- **Páginas (`pages/`)**: Páginas completas, como login, dashboard e gerenciamento de exercícios.
- **Serviços (`services/`)**: Módulos de comunicação com a API usando `axios`.
- **Estilos (`styles/`)**: Arquivos CSS para estilização global e específica.

---

## **Funcionalidades**
### **Backend**
- Gerenciamento de usuários: Cadastro, login e autenticação JWT.
- Cadastro de exercícios: Criar, listar, editar e excluir exercícios.
- Gestão de treinos: Adicionar, visualizar, editar e remover treinos.
- Registro de sessões: Registrar detalhes de treinos como séries, repetições e carga.
- Consulta de progresso: Gráficos e métricas sobre a evolução dos treinos.

### **Frontend**
- Login e Cadastro de Usuários.
- Painel de Controle: Resumo de treinos e métricas gerais.
- Gerenciamento de Exercícios.
- Registro de Treinos.
- Visualização de Progresso com gráficos interativos.

---

## **Instalação**

### **Clonar o Repositório**
```bash
git clone https://github.com/AndersonReis04/gerenciamento-de-treinos.git
cd gerenciamento-de-treinos
```

### **Configuração do Backend**
1. Navegue para a pasta do backend:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie o arquivo `.env` com as variáveis de ambiente:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=gerenciamento_treinos
   JWT_SECRET=sua_chave_secreta
   ```
4. Inicie o servidor:
   ```bash
   npm run dev
   ```

### **Configuração do Frontend**
1. Navegue para a pasta do frontend:
   ```bash
   cd ../frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

---

## **Rotas da API**
**Autenticação**
- `POST /login`: Login do usuário.
- `POST /users`: Cadastro de novos usuários.

**Exercícios**
- `GET /exercises`: Lista todos os exercícios.
- `POST /exercises`: Adiciona um novo exercício.
- `PUT /exercises/:id`: Atualiza um exercício.
- `DELETE /exercises/:id`: Remove um exercício.

**Treinos**
- `GET /workouts`: Lista os treinos do usuário.
- `POST /workouts`: Adiciona um novo treino.
- `PUT /workouts/:id`: Atualiza um treino.
- `DELETE /workouts/:id`: Remove um treino.

**Sessões**
- `GET /sessions`: Lista sessões registradas.
- `POST /sessions`: Registra uma nova sessão.
- `PUT /sessions/:id`: Atualiza uma sessão.
- `DELETE /sessions/:id`: Remove uma sessão.

**Progresso**
- `GET /progress`: Consulta o progresso do usuário.

---

## **Tecnologias Utilizadas**
### **Backend**
- Node.js
- Express
- MySQL
- JWT para autenticação
- Bcrypt para hash de senhas

### **Frontend**
- React
- Material-UI
- Axios para consumo de APIs
- Chart.js para gráficos interativos

---

## **Contribuição**
Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do projeto.
2. Crie uma branch para a feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas alterações e envie um pull request.

---

## **Autor**
Desenvolvido por [Anderson Reis](https://www.linkedin.com/in/anderson-reis-5407311b3/). 🚀
