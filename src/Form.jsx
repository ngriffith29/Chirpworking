import React, { Component } from 'react';
import SendChirp from './SendChirp'



class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Chirp: '',
            chirpArray: []
        };
        this.handleChirp = this.handleChirp.bind(this);
        this.handleChirpPost = this.handleChirpPost.bind(this);
       
    }
 
    handleChirp(event) {
       this.setState({Chirp: event.target.value})
       
    }
    handleChirpPost(e){
        let newChirpsArray = this.state.chirpArray;
        let newMessage = {
            text: this.state.Chirp
        };
        newChirpsArray.unshift(newMessage);
        this.setState({
            chirpArray: newChirpsArray,
        })
    }

    
    render() {
        
        return (

            <div>
                
                <textarea
                    onChange={(event) => this.handleChirp(event)} value={this.state.Chirp}
                    value={this.state.name} className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Type your Chirp here"></textarea>
                    <button onClick={ (e) => {e.preventDefault(), this.handleChirpPost();} } >Submit Chirp</button>
                    {this.state.chirpArray.map((chirp, index) => {
                        return <SendChirp chirp={chirp}/>
                    })}
            </div>
        );
    }// render

    //custom functions

  
}


export default Form;