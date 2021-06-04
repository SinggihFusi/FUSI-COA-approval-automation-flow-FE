import React, { Component, createRef } from 'react'

class history extends Component{

    constructor(){
        super()
        this.base = createRef()
    }

    componentDidMount(){
        // alert("dandi rahmawan")
    }

    render(){
        return(
            <div onClick={this.props.cancel} className="bs-pop">
                <div ref={this.base} style={styles.base}>
                
                </div>
            </div>
        )
    }
}

const styles = {
    base: {
        width: "400px",
        minHeight: "100px", 
        background: "#FFF",
    }
}

export default history