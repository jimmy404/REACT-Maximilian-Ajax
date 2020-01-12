import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
                axios.get('https://jsonplaceholder.typicode.com/posts/1' + this.props.id)
                .then(response => {
                    //console.log(response);
                    this.setState({loadedPost: response.data});
                });
            }
        }
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
<<<<<<< HEAD
        if (this.props.id){
            post = <p style={{textAlign: 'center'}}>Loading</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}}</h1>
                    <p>{this.state.loadedPost.body}}</p>
=======
        if (this.props.id) {
            post = (
                <div className="FullPost">
                    <h1>Title</h1>
                    <p>Content</p>
>>>>>>> refs/remotes/origin/master
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;