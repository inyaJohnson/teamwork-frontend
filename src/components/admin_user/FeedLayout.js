import React from 'react';
import Search from './Search';
import SearchImage from '../svg/search.svg';
import { SearchStyle, Dashboard, Spacer, StyledH4, SearchImageStyle, RowDiv } from '../style';

const FeedLayout = ({title, children}) => {
    return(
        <Dashboard>
            <SearchStyle>
                <StyledH4>{title}</StyledH4>
                <Spacer />
                <Search />
                <SearchImageStyle src={SearchImage} alt="search" />
            </SearchStyle>
            <RowDiv>
                {children}
            </RowDiv>
        </Dashboard>
    )
}


export default FeedLayout;