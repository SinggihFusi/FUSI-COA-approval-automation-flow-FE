import React, { Component } from 'react'
import styled from 'styled-components'
// import Paper from '../images/paper.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDoorOpen, faListAlt} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const Sidebar = styled.div`
    height: 100%;
    width: 250px;
    position: fixed;
`

class sidebar extends Component{

    logout = () => {
        localStorage.removeItem("data")
        window.location.reload()
    }

    render(){
        return(
            <Sidebar className="theme-color">
                <h1 style={{color: "#FFF", padding: "10px"}}>Coa approval</h1>
                <ul style={{listStyle: "none", textAlign: "left"}}>
                    <li>
                        <Link to={"/submission"}>
                            <div className="mn-sidebar">
                                <FontAwesomeIcon icon={faListAlt}/>&nbsp;&nbsp;Submission
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/approval"}>
                            <div className="mn-sidebar">
                                <FontAwesomeIcon icon={faListAlt}/>&nbsp;&nbsp;Approval
                            </div>
                        </Link>
                    </li>
                    <li>
                        <a onClick={this.logout}>
                            <div className="mn-sidebar">
                                <FontAwesomeIcon icon={faDoorOpen}/>&nbsp;&nbsp;logout
                            </div>
                        </a>
                    </li>
                </ul>
            </Sidebar>
        )
    }
}

// const paper = <svg id="Icons" height="512" viewBox="0 0 74 74" color="#FFF" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m63 72h-52a1 1 0 0 1 -1-1v-68a1 1 0 0 1 1-1h38a1 1 0 0 1 .707.293l14 14a1 1 0 0 1 .293.707v54a1 1 0 0 1 -1 1zm-51-2h50v-52.586l-13.414-13.414h-36.586z"/><path d="m19.95 29a1 1 0 0 1 -.707-.293l-2.45-2.451a1 1 0 0 1 1.414-1.414l1.743 1.744 5.85-5.853a1 1 0 1 1 1.414 1.414l-6.557 6.553a1 1 0 0 1 -.707.3z"/><path d="m19.95 40.86a1 1 0 0 1 -.707-.293l-2.45-2.451a1 1 0 0 1 1.414-1.416l1.743 1.744 5.85-5.844a1 1 0 0 1 1.414 1.414l-6.555 6.555a1 1 0 0 1 -.709.291z"/><path d="m19.95 52.724a1 1 0 0 1 -.707-.293l-2.45-2.45a1 1 0 0 1 1.414-1.414l1.743 1.743 5.85-5.848a1 1 0 1 1 1.414 1.414l-6.555 6.555a1 1 0 0 1 -.709.293z"/><path d="m19.95 64.588a.993.993 0 0 1 -.707-.293l-2.45-2.45a1 1 0 0 1 1.414-1.414l1.743 1.743 5.85-5.847a1 1 0 0 1 1.414 1.414l-6.557 6.559a.993.993 0 0 1 -.707.288z"/><path d="m56.5 26.029h-24.33a1 1 0 0 1 0-2h24.33a1 1 0 0 1 0 2z"/><path d="m56.5 37.976h-24.33a1 1 0 0 1 0-2h24.33a1 1 0 0 1 0 2z"/><path d="m56.5 49.923h-24.33a1 1 0 0 1 0-2h24.33a1 1 0 0 1 0 2z"/><path d="m56.5 61h-24.33a1 1 0 0 1 0-2h24.33a1 1 0 0 1 0 2z"/><path d="m63 18h-14a1 1 0 0 1 -1-1v-14a1 1 0 0 1 2 0v13h13a1 1 0 0 1 0 2z"/></svg>
export default sidebar