import { faListAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import Sidebar from '../sidebar'
import NewSubmission from './new_submission'
import axios from 'axios'
import { baseUrl } from '../../environment/environment'
import History from '../history/history'

class submission extends Component{

    constructor(){
        super()
        this.state = {
            newSubmission: "",
            popup: "",
            data: []
        }
    }

    componentDidMount(){
        axios.get(baseUrl+"/api/approval").then(res => {
            let data = res.data
            // console.log(data)
            this.setState({
                data: data
            })
        })
    }

    newSubmision = () => {
        this.setState({
            newSubmission: <NewSubmission cancel={() => this.setState({newSubmission: ""})}/>
        })
    }

    history = () => {
        this.setState({
            popup: <History cancel={() => this.setState({popup: ""})}/>
        })
    }

    render(){

        const dataSubmission = this.state.data.map((dt, index) => {
            // console.log(dt)
            return <tr>
                        {/* <td>dandirahmawan</td>
                        <td>dandirahmawan95@gmail.com</td>
                        <td>12/12/2021</td> */}
                        <td>{dt.coa_file}</td>
                        <td>{dt.note}</td>
                        <td>
                            <a onClick={this.history} style={{fontWeight: "bold", color: "blue"}}>
                                {dt.status}
                            </a>
                        </td>
                    </tr>
        })

        return(
            <Fragment>
                <Sidebar/>
                {this.state.newSubmission}
                {this.state.popup}

                <div className="content-bar">
                    <div className="shadow" style={{padding: "20px 40px", display: "flex", justifyContent: "space-between"}}>
                        <h1><FontAwesomeIcon icon={faListAlt}/> Submission</h1>
                        
                        <button onClick={this.newSubmision} className="border main-font-size" style={{padding: "5px", fontSize: "11px"}}>
                            <FontAwesomeIcon icon={faPlus}/> New Submission
                        </button>
                    </div>
                    <div style={{padding: "0px 40px", marginTop: "10px"}}>
                        <table style={{width: "80%", textAlign: "left"}}>
                            <thead>
                                {/* <th>Surveyor Name</th>
                                <th>Surveyor Email</th>
                                <th>Date</th> */}
                                <th>Coa File</th>
                                <th>Notes</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                               {dataSubmission}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default submission