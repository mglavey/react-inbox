import React, {Component} from 'react';


class Message extends Component {
   
    render() {
        const messageId = this.props.match.params.messageId
        const message = this.props.messages.find((message)=> parseInt(messageId) === (message.id))
        if (message === undefined ) {
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