import React, {Component} from 'react';
import axios from 'axios';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }

    }
   
    async componentDidMount() {
        const message = (await axios.get(`https://morning-falls-3769.herokuapp.com/api/messages`)).data
        this.setState({
            message,
        });
    }

    render() {
        const {message} = this.state;
        if (message === null ) {
            console.log('hello')
            return (<div><p>Loading Message</p></div>)}
        else {
            return (
            <div className ='row'>
                <div>
                    <p>{message.id}</p><p>Hello</p>
                    <p>{message.body}</p>
                </div>
            </div>
        );}
    }
}

export default Message;