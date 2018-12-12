import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MessageList extends Component {
    
    render() {

            return (
                <div className='container'>
                <div className='row'>
                {this.props.messages === null && <p>Loading messages</p>}
                {
                    this.props.messages && this.props.messages.map(message => (
                        <div key={message.id}>
                            <div className="message-button">
                                {/* <button onClick={()=>(this.assignMessage(message))}> */}
                                   
                                {/* </button> */}
                                <Link to={`/message/${message.id}`}>
                                <h1>From: {message.from}</h1>
                                <h3>Subject: {message.subject}</h3>
                                </Link>
                            </div>
                        </div>
                    ))
                }
                </div>
                </div>
            )

        } 
}

export default MessageList;