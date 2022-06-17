import data from "../../Data/User.json"

const projects = data.projects;

function Projects() {

    var projects_tem = projects.map((project, key) => {
        return(
            <a href={project.code} target="_blank">
                    <section>
                        <div className="section_title">{project.title}</div>
                        <div className="about_section_OS">
                            <span style={{display:"block"}}>• {project.desc1}</span>
                            <br/>
                            <span style={{display:"block"}}>• {project.desc2}</span>
                        </div>
                        <div className="bottom_section">
                            <span href={project.code}><i className="fas fa-solid fa-code"></i>&nbsp; github</span>
                            <span href={project.live}><i className="fas fa-solid fa-link"></i>&nbsp; live link</span>
                        </div>
                    </section>
                </a>
        )
    });

    return(
        <div id="work">
        <h2>projects</h2>
        <div className="projects" id="work_section">
            {projects_tem}

        </div>
    </div>
    );
};

export default Projects;