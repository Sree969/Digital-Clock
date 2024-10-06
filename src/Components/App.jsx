import React,{Component} from "react";
export default class Digital extends Component{
    constructor(props){
        super(props)
        this.state={
            ttime: new Date().toLocaleTimeString(),
            tdate: new Date().toLocaleDateString()
        };
        this.intervalId = setInterval(() => {
            this.setState({
                ttime: new Date().toLocaleTimeString(),
                tdate: new Date().toLocaleDateString()
            });
          }, 1000);
    }
    render(){
        return(
            <div className="clk">
                <button className="btn">{this.state.tdate} <br /> {this.state.ttime}</button>
            </div>
        )
    }
}