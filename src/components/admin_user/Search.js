import React, { Component }from 'react';
import { SearchInput } from '../style';

class Search extends Component{
    render(){
        return(
            <SearchInput size="50" placeholder="Search" />
        )
    }
}

export default Search;