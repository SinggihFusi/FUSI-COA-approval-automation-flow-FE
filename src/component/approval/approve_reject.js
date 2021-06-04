import axios from 'axios'
import React, { Component, createRef } from 'react'

class approve_reject extends Component{

    constructor(){
        super()
        this.state = {
            note: ""
        }
        this.base = createRef()
    }

    ok = () => {
        let str = localStorage.getItem("data")
        str = JSON.parse(str)
        let userId = str[0].user_id
        let id = this.props.id

        let obj = {}
        obj.user_id = userId
        obj.id_coa_approval = id
        obj.pic_approval_status = (this.props.title == "Approvement") ? "Approve" : "rejected"
        obj.pic1_note = this.state.note

        axios.post("/api/approval/Atasan", obj).then(res => {
            this.props.cancel()
        })
    }

    render(){
        return(
            <div className="bs-pop">
                <div ref={this.base} style={styles.base}>
                    <div style={{padding: "10px", fontWeight: "bold"}}>
                        {this.props.title}
                    </div>
                    <div style={{padding: "0px 10px"}}>
                        <textarea 
                            onChange={(e) => this.setState({note: e.target.value})}
                            placeholder="notes" 
                            style={styles.tarea} 
                            value={this.state.note}></textarea>
                    </div>
                    <div className="border-top" style={{textAlign: "right", padding: "10px", marginTop: "10px"}}>
                        <button onClick={this.ok} className="btn-primary" style={{padding: "5px 10px"}}>Ok</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={this.props.cancel}>cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    base: {
        width: "300px",
        minHeight: "100px", 
        background: "#FFF",
        textAlign: "left"
    },
    tarea:{ 
        border: "1px solid rgb(160, 160, 160)", 
        borderRadius: "3px",
        width: "100%",
        boxSizing: "border-box",
        padding: "5px"
    }
}

export default approve_reject