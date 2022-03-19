import { React, useState } from "react";
import axios from "axios";
import "./CreateBlog.css";

const CreateBlog = () => {
    const [value, setValue] = useState('');
    const [name, setName] = useState('')
    const onBlogClick =
        async () => {
            await axios.post('http://localhost:5000/blogs', { name: name, blog: value })
            console.log(value);
        }
    return (
        <div className="new_blogContainer">
            <form className= "form">
                <label>
                    Write ▶</label>
                <input className="newName" type="text" required placeholder="your blog title here" onChange={(e) => setName(e.target.value)} />
                <input className="newBlog" type="text" required placeholder="Get creative here" onChange={(e) => setValue(e.target.value)} />

                <button onClick={onBlogClick}> POST 🎬  </button>
            </form>
        </div>
    )
}

export default CreateBlog;
