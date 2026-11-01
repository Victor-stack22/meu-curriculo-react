function Experience() {
    const experiencias = [
        {
            cargo: "Atendimento Telemarketing",
            empresa: "Contax",
            pediodo: "Período: 2008 - 2011",
            descricao: "Atendimento ao cliente e novos cadastros"
        },
        {
            cargo: "Analista Back Office",
            empresa: "Contax",
            pediodo: "Período: 2011 - 2014",
            descricao: "Atendimento e resolução de demandas internas - Análise e tratamento das ocorrências em faturamento - Suporte à equipe de SAC garantindo os prazos e qualidade."
        },
        {
            cargo: "Motorista e eletricista",
            empresa: "Rodo Passos",
            pediodo: "Período: 2014 - 2015",
            descricao: "Auxílio e Instalação de Medidores"
        },
        {
            cargo: "Motorista de coletivo",
            empresa: "Mauá",
            pediodo: "Período: 2016 - 2021",
            descricao: "Condução de passageiros"
        },
        {
            cargo: "Motorista de aplicativos",
            empresa: "Autônomo (Uber / 99)",
            pediodo: "Período: 2021 - Presente",
            descricao: "Condução de passageiros"
        }
    ];

    return (
        <section>
            <h2>Experiência e Histórico</h2>
            {experiencias.map((exp, index) => {
                return (
                    <div key={index} style={{marginBottom: "20px"}}>
                        <h3>{exp.cargo} - <span>{exp.empresa}</span></h3>
                        <p><small>{exp.pediodo}</small></p>
                        <p>{exp.descricao}</p>
                    </div>
                );
            })}
            <hr />
        </section>
    );
}

export default Experience;