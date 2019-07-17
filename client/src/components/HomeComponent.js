import React,{ Component } from "react";
import logo from '../RubyXReact.png';
class HomeComponent extends Component {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         lists: []
    //     }
    //     this.addNewPost = this.addNewPost.bind(this)
    // }


    render() {
        return (
           <div className="main-container">

                <img className="image" src={logo} alt="Logo" />
                <div className="logohome">
                ruby<span>x</span>react
                </div>
                <p> Bienvenue sur le blog ou vous trouverez toute l'actualités liée aux nouvelles technologies.</p>
           </div>
            
        )
    }
}

export default HomeComponent;