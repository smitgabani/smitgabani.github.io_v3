import { useState, useEffect } from "react";


export default function Gtihub() {
  const [data, setData] = useState([]);
  const URL = "https://api.github.com/users/smitgabani/repos";

  const getData = async () => {
    const response = await fetch(URL);
    var resData = await response.json();
    setData(data => resData);
    console.log(data);
  }
  useEffect(()=> {
    getData();
  }, [])

  var repo_elements = data.map((repo, key) => {
    return( repo.description &&
        <a href={repo.html_url} target="_blank">
                <section>
                    <div className="section_title">{repo.name}</div>
                    <div className="about_section_OS">
                        <span style={{display:"block"}}>• {repo.description}</span>
                    </div>
                    <div className="bottom_section">
                      <span>{repo.language}</span>
                      <br/>
                      <span>Skills: {repo.topics.map((topic) => topic+ ", ")}</span>
                    </div>
                </section>
            </a>
      )
    });

  return (
    <div id="work">
        <h2>github repos</h2>
        <div className="projects" id="work_section">
          {repo_elements}
        </div>
    </div>
  )
  }



