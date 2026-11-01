import Header from "./Header";
import Skills from "./Skills";
import Experience from "./Experience";

// No React, funções que retornam visual são chamadas de Componentes.
// O nome do componente DEVE começar com letra maiúscula (App).
function App() {

  // O bloco 'return' é onde colocamos o JSX (o que vai virar HTML na tela)
  return (
    <div>
      <Header />
      <Skills />
      <Experience/>

      <main>
        <h2>Sobre Mim</h2>
        <p>Estou em busca da minha primeira oportunidade na área de desenvolvimento Front-end</p>
      </main>
    </div>
  );
}

// Essa linha diz ao JavaScript que este componente 'App' pode ser importado por outros arquivos (como o main.jsx faz).
export default App;
