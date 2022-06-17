import data from "../../Data/User.json"

var resume_link = data.resume_link;
var coverletter_link = data.coverletter_link;

function Documents() {

    return(
        <div id="forks" style={{display:"block"}}>
				<h2>documents.</h2>
				<div class="projects">
					<a href={resume_link} target="_blank">
						<section>
							<div class="section_title">📄 Resume</div>
							<div class="about_section_OS">
								<span style={{display:"block"}}>My professional resume.</span>
							</div>
							<div class="bottom_section">
								<span><i class="far fa-file-pdf"></i>&nbsp;</span>
							</div>
						</section>
					</a>
					<a href={coverletter_link} target="_blank">
						<section>
							<div class="section_title">📝 Cover Letter</div>
							<div class="about_section_OS">
								<span style={{display:"block"}}>Letter of interest.</span>
							</div>
							<div class="bottom_section">
								<span><i class="far fa-file-pdf"></i>&nbsp;</span>
							</div>
						</section>
					</a>

				</div>
			</div>
    );
};

export default Documents;