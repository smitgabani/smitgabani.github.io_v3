import user from "../Data/User.json";
import Documents from "./Content/Documents";
import Gtihub from "./Content/Gtihub";
import Projects from "./Content/Projects";
import Footer from "./Footer";

function Content() {
    return (
        <div id='content'>
            {/*<h2>Hi there👋!</h2>*/}
            {/*<hr className="horizontal"/>*/}
            <Documents/>
            <Projects/>
            <Gtihub/>
            <Footer/>

        </div>
    );
}

export default Content;