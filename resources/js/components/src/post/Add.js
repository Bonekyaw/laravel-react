import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import AppContainer from '../AppContainer';
import Api from '../Api';

const Add = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submitHandler = async () => {
        setLoading(true);
        try {
            await Api.addPost({title,description});
            history.push('/');
        } catch (error) {
            alert("Failed to add a post!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <AppContainer title="Add New Post">
            <form>
                <div className="form-group">
                    <label >Title</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}  
                    />
                </div>
                <div className="form-group">
                    <label >Description</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                </div>
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    disabled={loading}
                    onClick={submitHandler}
                >
                    {loading ? "processing..." : " + Add "}
                </button>
            </form>     
        </AppContainer>                
    );
}

export default Add;
