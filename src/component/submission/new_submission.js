import { faArrowLeft, faFile, faInfoCircle, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { Component, createRef } from 'react'
import styled from 'styled-components'

const BaseInput = styled.div`
    position: fixed;
    width: 400px;
    height: 100%;
    background: #FFF;
    right: -400px;
    border-left: 1px solid #CCC;
`

const HeaderNew = styled.div`
    padding: 20px;
    text-align: left;
    font-weight: bold;
    z-index: 2;
`

class new_submission extends Component{

    constructor(){
        super()
        this.state = {
            fileName: "",
            notes: "",
            userId: "",
            document: ""
        }
        this.inputFile = createRef()
    }

    componentDidMount(){
        this.animation()
        this.setHeight()

        let data = localStorage.getItem("data")
        let obj = JSON.parse(data)
        let userId = obj[0].user_id
        
        this.setState({
            userId: userId
        })
    }

    setHeight = () => {
        let hd = document.getElementById("hd-ns-bs")
        let mn = document.getElementById("mn-ns-bs")
        let ft = document.getElementById("ft-ns-bs")
        
        let h1 = hd.offsetHeight
        let h2 = ft.offsetHeight
        let mnh = window.innerHeight - h1 - h2 - 20
        mn.style.height = mnh+"px"
    }

    animation = () => {
        let bs = document.getElementById("bs-n-s")
        console.log(bs)
        let i = 0
        let sr = -400
        let itv = setInterval(() => {
            i = parseInt(i) + 8
            let r = parseInt(sr) + i
            bs.style.right = r+"px"
            if(r >= 0){
                clearInterval(itv)
                bs.style.right = "0px"
            }
        }, 1)
    }

    changeFile = (e) => {
        let file = e.target.files[0]
        let fileName = file.name
        let fileSize = file.size
        
        this.setState({
            fileName: fileName
        })
    }

    save = () => {
        let userId = this.state.userId
        let notes = this.state.notes
        let docName = this.state.document

        let obj = {}
        obj.surveyor_id = userId
        obj.note = notes
        obj.coa_file = docName

        axios.post("/api/approval/ADD", obj).then(res => {
            console.log(res)
        })
    }

    render(){
        return(
            <BaseInput id="bs-n-s">
                <HeaderNew id="hd-ns-bs" className="border-bottom">
                    <a onClick={this.props.cancel}>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    New Submission
                </HeaderNew>
                <div style={{textAlign: "left", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <div id="mn-ns-bs">
                        <textarea placeholder="submission notes" onChange={(e) => this.setState({notes: e.target.value})} className="border" style={{width: "100%", boxSizing: "border-box"}}></textarea>
                        <input type="text" placeholder="document name" onChange={(e) => this.setState({document: e.target.value})} className="border input_1" style={{width: "100%", boxSizing: "border-box"}}/>
                        <div style={{marginTop: "10px", height: "100%"}}>
                            <div style={{display: "flex"}}>
                                <button className="btn-primary" onClick={() => {this.inputFile.current.click()}}><FontAwesomeIcon icon={faPaperclip}/> Attachment</button>
                                {
                                    (this.state.fileName == "")
                                    ?
                                        <div className="border-left" style={{marginLeft: "10px", padding: "0px 10px"}}>
                                            <FontAwesomeIcon icon={faInfoCircle}/> Select submission file please
                                        </div>
                                    :
                                        <div className="border-left" style={{padding: "5px", width: "200px", display: "flex", alignItems: "center", marginLeft: "10px"}}>
                                            <FontAwesomeIcon icon={faFile} size={50}/>
                                            <div style={{marginLeft: "10px"}}>{this.state.fileName}</div>
                                        </div>
                                }
                            </div>
                            <input ref={this.inputFile} onChange={(e) => this.changeFile(e)} type="file" style={{display: "none"}}/>
                        </div>
                    </div>
                    <div id="ft-ns-bs" className="border-top" style={{padding: "10px 0px", textAlign: "right"}}>
                        <button onClick={this.save} className="btn-primary">Save</button>
                        &nbsp;&nbsp;&nbsp;
                        <button>Cancel</button>
                    </div>
                </div>
            </BaseInput>
        )
    }
}

export default new_submission