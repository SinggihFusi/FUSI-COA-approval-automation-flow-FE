import axios from 'axios';
import React, { Component } from 'react'
import styled from "styled-components";
import { baseUrl } from '../../environment/environment';

const WrapperLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: absolute;
`;

class login extends Component{

    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    login = () => {
       let obj = {}
       obj.username = this.state.username
       obj.password = this.state.password

       if(this.state.username == 0 || this.state.password == 0){
            alert("Pastikan semua data terisi")
            return false
       }
       axios.post(baseUrl+"/api/login", obj).then(res => {
            let data = res.data
            if(data.length > 0){
                localStorage.setItem("data", JSON.stringify(data))
                window.location.reload()
            }else{
                alert("Username atau password salah")
            }
       
       })
    }

    render(){
        return(
            <WrapperLogin>
                <div style={{marginBottom: "10px"}}>
                    <h1>Login</h1>
                </div>
                <div>
                    <input
                        onChange={(e) => this.setState({username: e.target.value})} 
                        type="text" 
                        placeholder="username" 
                        style={{width: "200px"}} 
                        className="input_1 main-font-size"/>
                    <br/>
                    <input 
                        onChange={(e) => this.setState({password: e.target.value})} 
                        type="password" 
                        placeholder="password" 
                        style={{width: "200px"}} 
                        className="input_1 main-font-size"/>
                </div>
                <div style={{marginTop: "10px"}}>
                    <button onClick={this.login} className="main-font-size btn-primary" style={{width: "80px"}}>
                        Login
                    </button>
                </div>
            </WrapperLogin>
        )
    }
}

export default login