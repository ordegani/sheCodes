import { React, useState } from "react";
import axios from "axios";
import "./CreateBlog.css";
//add fs

const CreateBlog = () => {
    const [value, setValue] = useState('');
    const [name, setName] = useState('')
    const onBlogClick =
        async () => {
            await axios.post('http://localhost:5000/blogs', { name: name, blog: value });
        }

    return (
        <div className="new_blogContainer">
            <form className="form">
                <input className="newName" type="text" required placeholder="Add a Nice Title" onChange={(e) => setName(e.target.value)} />
                <input className="newBlog" size="50px" required placeholder="Start writing your post here" onChange={(el) => setValue(el.target.value)} />
                </form>
                <button type="submit" onClick={onBlogClick}> POST 🎬  </button>
           
       </div>
    )
}

export default CreateBlog;
