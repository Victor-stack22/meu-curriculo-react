import Header from "./Header";
import Skills from "./Skills";
import Experience from "./Experience";
import "./App.css";

// No React, funções que retornam visual são chamadas de Componentes.
// O nome do componente DEVE começar com letra maiúscula (App).
function App() {

  // O bloco 'return' é onde colocamos o JSX (o que vai virar HTML na tela)
  return (
    <div className="portfolio-container">
      <Header />
      <Skills />
      <Experience/>
    </div>
  );
}

// Essa linha diz ao JavaScript que este componente 'App' pode ser importado por outros arquivos (como o main.jsx faz).
export default App;
