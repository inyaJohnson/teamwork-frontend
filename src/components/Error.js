import React from 'react';
import { LoginError } from './style';

export const Error = (props) => {
    const error = props.errorMessage();
    return (
        <LoginError>
            {error}
        </LoginError>
    )
}