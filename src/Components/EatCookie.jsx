import { useState } from "react";

function EatCookie() {

    if(document.cookie.length !=0) {
        var cookiec = document.cookie.split("=");
        var cookiec = cookiec[1];
        var cookiec = parseInt(cookiec) + 1;
        console.log("You have eaten cookies")
        console.log(cookiec);
    } else if(document.cookie.length == 0) {
        var cookiec = 0;
    }
    const [cookie, setCookie] = useState(cookiec);

    function eatCookie() {
        setCookie(cookie + 1);
        console.log(cookie);
        if (cookie) {
            document.cookie = "cookieeaten=" + cookie + ";expires=Fri 16 Oct 2026 01:00:00 UTC;";
        }
        console.log(document.cookie);
    }

    function howManydidyouEat() {
        if(cookie == 1) {
            return (<span>You ate {cookie} cookie.</span>)
        }
        else if(cookie) {
            return (<span>You ate {cookie} cookies.</span>)
        }
        else if(!cookie) {
            return (<span>You havent tasted the cookies</span>)
        }
    }

    return(
        <div>
            <button id="cookie_btn" onClick={()=>{eatCookie()}}>Eat cookie</button> {howManydidyouEat()}
        </div>
    );
}

export default EatCookie;