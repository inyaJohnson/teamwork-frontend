import React, { Component } from 'react';
import Layout from './Layout';
import { connect } from 'react-redux';
import { getAllFeed } from '../actions/admin';
import { AddUserForm, H4 } from '../style';
import Gif from '../Gif';


class Feed extends Component{
    
    componentDidMount = () =>{
        const token = localStorage.getItem('adminToken');
        this.props.feedDispatch(token);
    }


    render(){
        return(
            <Layout>
                <AddUserForm>
                    {
                        !this.props.loading ? <div> Loading... </div> : 
                        this.props.feed.results.map((index, key) => {
                            return(
                                <div key={key}>
                                    <H4>{index.title}</H4> 
                                    <Gif imageUrl={index.article_url} />
                                    <h5>{index.createdon}</h5>
                                </div>
                            )
                        })
                        
                    }
                </AddUserForm>
            </Layout>
        );
        
    }
    
}

const mapStateToProps = state =>{
    return {
        feed : state.feedList.feed.data,
        loading : state.feedList.fetched
    }
}

const mapDispatchToProps = dispatch => {
    return{
        feedDispatch : (token) => dispatch(getAllFeed(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);