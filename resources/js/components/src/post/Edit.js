import React,{useState,useEffect} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import AppContainer from '../AppContainer';
import Api from '../Api';

const Edit = () => {
    const {id} = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        Api.editPost(id).then(res => {
            setTitle(res.data.data.title);
            setDescription(res.data.data.description);
        })
    }, []);

    const editHandler = async () => {
        setLoading(true);
        try {
            await Api.updatePost(id, {title,description});
            history.push('/');
        } catch (error) {
            alert("Failed to add a post!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <AppContainer title="Edit Post">
            <form>
                <div className="form-group">
                    <label >Edit Title</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}  
                    />
                </div>
                <div className="form-group">
                    <label >Edit Description</label>
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
                    onClick={editHandler}
                >
                    {loading ? "processing..." : " Update "}
                </button>
            </form>     
        </AppContainer>                
    );
}

export default Edit;
