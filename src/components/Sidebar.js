import React, { Component } from 'react';
import Searchbar from './Searchbar'

class Sidebar extends Component{
    render (){
        return(
            <div>
                <p>Sidebar</p>
                < Searchbar searchbarOnChange={this.props.searchbarOnChange}/>
            </div>
        );
    }

}
export default Sidebar;