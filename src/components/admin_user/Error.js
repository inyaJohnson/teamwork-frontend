import React from 'react';
import { LoginError, ErrorStyle } from '../style';


export const Error = (props) => {
    const error = props.errorMessage();
    return (
        <LoginError>
            {error}
        </LoginError>
    )
}

export const PathError = ({location}) => {
    return(
    <ErrorStyle> Page @ { location.pathname } not found </ErrorStyle>
    )
}