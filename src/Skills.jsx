function Skills() {
    const minhasSkills = ["HTML", "CSS", "Javascript", "React", "Git & Github"];
    return (
        <section className="skills-section">
            <h2 className="section-title">Habilidades Técnicas</h2>
            <ul className="skills-list">
                {minhasSkills.map((skill, index) => {
                    return <li key={index} className="skill-item">{skill}</li>
                })}
            </ul>
            <hr />
        </section>
  );
};

export default Skills;