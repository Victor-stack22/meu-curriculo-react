function Header() {
  return (
    <header className="text-center border-b border-slate-200 pb-8 mb-6">
      {/* Container da foto com borda e sombra sutil */}
      <div className="flex justify-center mb-4">
        <img 
          src="https://avatars.githubusercontent.com/u/73368078?v=4" 
          alt="Foto de Victor Pintassilgo" 
          className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
        Victor Rodrigues Lima Pintassilgo
      </h1>
      <p className="text-lg font-medium text-blue-600 mt-2">
        Estudante de Sistemas de Informação &amp; Desenvolvedor Front-end
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 mt-4">
        <span>📍 Itaboraí - RJ</span>
        <span className="text-slate-300">|</span>
        <a href="https://www.linkedin.com/in/victor-pintassilgo-2b94a27b/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-semibold">LinkedIn</a>
        <span className="text-slate-300">|</span>
        <a href="https://github.com/Victor-stack22" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-semibold">GitHub</a>
      </div>
      
      <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-base leading-relaxed">
        <strong>Atual:</strong> Motorista de Aplicativos | Em transição de carreira para tecnologia. 
        Foco em desenvolvimento de soluções web modernas, com resiliência.
      </p>
    </header>
  );
}

export default Header;
