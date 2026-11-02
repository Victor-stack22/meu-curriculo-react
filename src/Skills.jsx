function Skills() {
    const minhasSkills = ["HTML", "CSS", "Javascript", "React", "Git & Github"];
    return (
        <section className="container mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4 pb-2 justify-center flex">Habilidades Técnicas</h2>
            <ul className="justify-center flex mb-2 pb-3 flex-wrap gap-2.5">
                {minhasSkills.map((skill, index) => {
                    return <li key={index} className="skill-item">{skill}</li>
                })}
            </ul>
            <hr />
        </section>
  );
};

export default Skills;