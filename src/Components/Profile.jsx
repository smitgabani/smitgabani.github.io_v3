import EatCookie from "./EatCookie";
import ChangeTheme from "./ChangeTheme";
function Profile() {
    return (
        <div id="profile">
			<div id="img-container">
				<img src="smitgabani.jpg" alt="" className="profile-pic"/>
			</div>
			<div id="user">
				<span style={{display:"block"}}><b>Hey there</b> 👋🏽</span>
			</div>
			<div id="about">
				<p>
					I am <span style={{fontWeight: 1000}}>Smit Gabani</span>. I am a computer programmer and tech enthusiast.
				</p>
				<p>
					I am interested in web-development and building application. I am always looking for using my new learned skills to use. I am open to work on project inspired by an idea. If you would like to collaborate contact me.
				</p>
				<p>
					I follow everything in technology, football, finance, and space exploration.
				</p>
				<p style={{fontWeight:"bolder"}}>
					#js, #py, #cpp
				</p>
			</div>
			<div id="socials">
				<div className="socials">
					<span style={{display:"block"}}><a href="https://linkedin.com/in/smit-gabani/" target="_blank"
						className="socials"><i className="fab fa-linkedin-in"></i></a></span>
					<span style={{display:"block"}}><a href="https://github.com/smitgabani/" target="_blank" className="socials"><i
						className="fab fa-github"></i></a></span>
					<span style={{display:"block"}}><a href="https://twitter.com/SmitGabani7/" target="_blank"
						className="socials"><i className="fab fa-twitter"></i></a></span>
					<span style={{display:"block"}}><a href="mailto: gabanismit11@gmail.com" target="_blank"
						className="socials"><i className="fas fa-envelope"></i></a></span>
				</div>
				<div className="sidebar__inner "></div>
			</div>
			<div id="end">
				<EatCookie/>

			</div>
			<div className="sidebar__inner "></div>
		</div>
    );
  }

  export default Profile;