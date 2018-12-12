import React from 'react';
 
const Searchbar = props => {
  return(
    <div>
      <input className="searchbar" type="text" placeholder="search user" onChange={e => props.searchbarOnChange(e)}/>
    </div>
  )
}
 
export default Searchbar;