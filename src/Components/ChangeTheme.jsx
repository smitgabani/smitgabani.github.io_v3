import React from "react";

export default class ChangeTheme extends React.Component{
    constructor(props){
        super(props);
        this.state = {stylePath: 'custApp.css'};
    }

    handleButtonClick(){
        this.setState({stylePath: 'style2.css'});
        console.log("changed");
    }

    render(){
        return (
            <div>
                <link rel="stylesheet" type="text/css" href={this.state.stylePath} />
                <button type="button" id="cookie_btn" onClick={this.handleButtonClick.bind(this)}>Change Theme</button>
            </div>
        )
    }
};