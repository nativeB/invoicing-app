import React from "react";
import { ReactComponent as Logo} from "../assets/logo.svg";
import  Avatar from "../assets/image-avatar.jpg";
import { ReactComponent as Moon} from "../assets/icon-moon.svg";
import { ReactComponent as Sun} from "../assets/icon-sun.svg";
type State = {
   mode: "dark" | "light";
}
type Prop =  {
  userInfo?: any;
}

class InvoiceSideHeader extends React.Component<Prop, State> {
    constructor(props: Prop) {
        super(props);
        this.state = {
              mode: "light"
            }
        this.toggleMode = this.toggleMode.bind(this);
    }

    async toggleMode(){
      await this.setState({
        mode: this.state.mode === "dark" ? "light" : "dark"
      })
      const app = document.querySelector('.App')
      if(app){
        if(this.state.mode === 'dark'){
          app.classList.add('dark');
        }else{
          app.classList.remove('dark');
        }
      }
    }

    render() {
      const { mode } = this.state;
      let icon = <Moon/>
      if(mode === "dark"){
        icon = <Sun/>;
      }

     return( 
      <div className="App-side-menu">
        <div className="App-side-header">
          <Logo/>
        </div>
        <div className="App-side-content">
          <div className="App-side-content-mode">
            <div onClick={this.toggleMode} > 
              {icon}
              </div>
          </div>
        </div>
        <div className="App-side-footer"> 
          <img src={Avatar} alt="Avatar" />
         </div>
      </div>
      );
    }
  }


export default InvoiceSideHeader