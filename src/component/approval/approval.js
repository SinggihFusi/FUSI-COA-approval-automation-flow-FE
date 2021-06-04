import { faListAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import Sidebar from '../sidebar'
import ApproveReject from './approve_reject'

class approval extends Component{

    constructor(){
        super()
        this.state = {
            approve_reject : "",
            data: []
        }
    }

    approve_reject = (type, id) => {
        let title = (type == "approve") ? "Approvement" : "Rejection"
        this.setState({
            approve_reject: <ApproveReject 
                                    id={id}
                                    title={title} 
                                    cancel={() => this.setState({approve_reject: ""})}/>
        })
    }

    componentDidMount(){
        let str = localStorage.getItem("data")
        str = JSON.parse(str)
        let userId = str[0].user_id

        axios("/api/approvalbyPICID/"+userId).then(res => {
            this.setState({
                data: res.data
            })
        })
    }

    render(){

        const dataApproval = this.state.data.map((dt, index) => {
            return <tr>
                        {/* <td>dandirahmawan</td>
                        <td>dandirahmawan95@gmail.com</td>*/}
                        <td>{dt.coa_file}</td>
                        <td>{dt.date}</td>
                        <td>{dt.note}</td>
                        <td>
                            <button onClick={() => this.approve_reject("approve", dt.id)} className="btn-primary" 
                                style={{padding: "5px", fontSize: "10px", border: "none", width: "100%"}}>
                                Approve
                            </button>
                            <button onClick={() => this.approve_reject("reject")} className="btn-primary" 
                                style={{padding: "5px", fontSize: "10px", background: "red", border: "none", width: "100%", marginTop: "5px"}}>
                                Reject
                            </button>
                        </td>
                    </tr>
        })

        return(
            <Fragment>
                <Sidebar/>
                {this.state.approve_reject}

                <div className="content-bar">
                    <div className="border-bottom" style={{padding: "20px 40px", display: "flex", justifyContent: "space-between"}}>
                        <h1><FontAwesomeIcon icon={faListAlt}/> Approval</h1>
                        {/* <button className="border main-font-size" style={{padding: "5px", fontSize: "11px"}}>
                            <FontAwesomeIcon icon={faPlus}/> New Submission
                        </button> */}
                    </div>
                    <div style={{padding: "0px 40px", marginTop: "10px"}}>
                        <table style={{width: "80%", textAlign: "left"}}>
                            <thead>
                                {/* <th>Surveyor Name</th>
                                <th>Surveyor Email</th> */}
                                <th>Coa File</th>
                                <th>Date</th>
                                <th>Notes</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                                {dataApproval}
                                {/* <tr>
                                    <td>dandirahmawan</td>
                                    <td>dandirahmawan95@gmail.com</td>
                                    <td>12/12/2021</td>
                                    <td>document.docx</td>
                                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</td>
                                    <td>
                                        <button onClick={() => this.approve_reject("approve")} className="btn-primary" 
                                            style={{padding: "5px", fontSize: "10px", border: "none", width: "100%"}}>
                                            Approve
                                        </button>
                                        <button onClick={() => this.approve_reject("reject")} className="btn-primary" 
                                            style={{padding: "5px", fontSize: "10px", background: "red", border: "none", width: "100%", marginTop: "5px"}}>
                                            Reject
                                        </button>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default approval