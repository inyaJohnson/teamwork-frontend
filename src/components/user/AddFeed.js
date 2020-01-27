import React, { Component } from 'react';
import { TextArea, LeftDiv, FeedSize } from '../style';
// import '../style2.css'

class AddFeed extends Component{
    render(){
        return (
            <FeedSize>
                <form className = "test">
                    <LeftDiv>Create Post</LeftDiv>
                    <hr />
                    <TextArea />
                    <hr />
                    <LeftDiv>Photo</LeftDiv>
                </form>
            </FeedSize>
        )
    }
}


export default AddFeed;