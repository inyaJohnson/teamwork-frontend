import React, { Component } from 'react';
import Layout from './Layout';
import { connect } from 'react-redux';
import { getAllFeed } from '../actions/admin';
import { H4, FeedSize, UserFeed, Toolbar } from '../style';
import Gif from '../admin_user/Gif';
import { time } from '../functions/time';
import Delete from '../svg/delete.svg';



class Feed extends Component{
    componentDidMount = () =>{
        const token = localStorage.getItem('adminToken');
        this.props.feedDispatch(token);
    }

    onClickHandler = (id) => {
        console.log (id);
    }

    render(){
        const title = "Teamwork Feed";
        return(
            <Layout title={title}>
                <UserFeed> 
                    {
                    !this.props.loading ? <div>...Loading</div> :
                        this.props.feed.results.map((item, index) => {
                            return(
                                <FeedSize key={index}>
                                    <H4>{item.title}</H4>
                                    <Gif imageUrl={item.article_url} />
                                    <h5>{time(item.createdon)}</h5>
                                    <Toolbar>
                                        <img src={Delete} alt='Delete' onClick={() => this.onClickHandler(item.id)} />
                                    </Toolbar>
                                </FeedSize>
                            
                            )
                        })   
                    }
                </UserFeed>
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