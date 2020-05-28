import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import AppContainer from './AppContainer';
import Api from './Api';

const Home = () => {

    const [posts,setPosts] = useState();

    const fetchPost = () => {
        Api.getPost().then(res => {
            setPosts(res.data.data);
        })
    };

    useEffect(() => {
        fetchPost();
    },[]);

    const renderPost = () => {
        if (!posts) {
            return (
                <tr>
                    <td colSpan="4">Please wait, loading ...</td>
                </tr>
            )
        }
        if (posts.length == 0) {
            return (
                <tr>
                    <td colSpan="4">No Posts Found</td>
                </tr>
            )
        }
        return posts.map((post) => (
            <tr key={post.id}>
                <th scope="row">{post.id}</th>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>
                    <Link to={`/edit/${post.id}`} className="btn btn-primary mr-3">Edit</Link>
                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        onClick={() => {
                            Api.deletePost(post.id).then(fetchPost).catch(err => {
                                alert("Failed to delete this post");
                            })
                        }}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ))
    }

    return (
                <AppContainer title="Laravel & React - CRUD">
                    <Link to="/add" className="btn btn-primary">Add New Post</Link>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderPost()}
                        </tbody>
                    </table>
                </AppContainer>                
    );
}

export default Home;
