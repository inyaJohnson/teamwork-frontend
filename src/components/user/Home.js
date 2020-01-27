import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllFeed } from '../actions/admin';
import { H4, Toolbar, FeedSize, UserFeed} from '../style';
import Gif from '../admin_user/Gif';
import { time } from '../functions/time';
import Layout from './Layout';
import AddFeed from './AddFeed';
import Like from '../svg/like.svg';
import Dislike from '../svg/dislike.svg';
import Comment from '../svg/comment.svg';

class Home extends Component{

    // onClickHandler = (id) => {
        
    // }

    render(){
        const title = "Teamwork Feed";
        return(
            <Layout title={title}>
                <UserFeed>
                    <AddFeed />   
                    {
                    !this.props.loading ? <div>...Loading</div> :
                        this.props.feed.results.map((item, index) => {
                            return(
                                <FeedSize key={index}>
                                    <H4>{item.title}</H4>
                                    <Gif imageUrl={item.article_url} />
                                    <h5>{time(item.createdon)}</h5>
                                    <Toolbar>
                                        <img src={Like} alt='like' />
                                        <img src={Dislike} alt='dislike' />
                                        <img src={Comment} alt='comment' />
                                    </Toolbar>
                                </FeedSize>
                            
                            )
                        })   
                    }
                </UserFeed>
            </Layout>
        )
    }

    componentDidMount = () => {
        const token = localStorage.getItem('userToken');
        this.props.feedDispatch(token);
    }

}

const mapStateToProps = state => {
    return {
        feed : state.feedList.feed.data,
        loading : state.feedList.fetched
    }
}

const mapDispatchToProps = dispatch => {
    return{
        feedDispatch : token => dispatch(getAllFeed(token))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);