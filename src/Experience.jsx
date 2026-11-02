function Experience() {
  const experiencias = [
    {
      cargo: "Motorista de aplicativos",
      empresa: "Autônomo (Uber / 99)",
      periodo: "2021 - Presente",
      descricao: "Condução de passageiros, atendimento ao cliente e gestão de rotas em tempo real"
    },
    {
      cargo: "Motorista de coletivo",
      empresa: "Viação Mauá",
      periodo: "2016 - 2021",
      descricao: "Condução de passageiros, cumprimento de horários, direção defensiva e atendimento ao público com cordialidade."
    },
    {
      cargo: "Motorista e eletricista",
      empresa: "Rodo Passos",
      periodo: "2014 - 2015",
      descricao: "Auxílio e Instalação de Medidores elétricos e condução de veículos operacionais."
    },
    {
      cargo: "Analista Back Office",
      empresa: "Contax",
      periodo: "2011 - 2014",
      descricao: "Atendimento e resolução de demandas internas, análise e tratamento das ocorrências em faturamento. Suporte à equipe de SAC garantindo os prazos e qualidade."
    },
    {
      cargo: "Atendimento Telemarketing",
      empresa: "Contax",
      periodo: "2008 - 2011",
      descricao: "Atendimento ao cliente e novos cadastros."
    }
  ];

  return (
    <section>
      <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4 border-b p-3 justify-center flex">Experiência e Histórico</h2>
      <div className="space-y-6">
        {experiencias.map((exp, index) => {
          return (
            <div key={index} className="border-l-4 border-blue-500 pl-4 py-2 bg-slate-50 rounded-r-lg pr-4 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="text-lg font-bold text-slate-800">{exp.cargo}</h3>
                <span className="text-xs font-semibold text-slate-600 bg-slate-200 px-2.5 py-0.5 rounded-full md:mt-0 mt-1 self-start md:self-center">
                  {exp.periodo}
                </span>
              </div>
              <p className="text-sm font-semibold text-blue-600 mb-2">{exp.empresa}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{exp.descricao}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
