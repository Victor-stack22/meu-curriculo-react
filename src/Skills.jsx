function Skills() {
    const minhasSkills = ["HTML", "CSS", "Javascript", "React", "Git & Github"];
    return (
        <section>
            <h2>Habilidades Técnicas</h2>
            <ul>
                {minhasSkills.map((skill, index) => {
                    return <li key={index}>{skill}</li>
                })}
            </ul>
            <hr />
        </section>
  );
};

export default Skills;