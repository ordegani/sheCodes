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
        <div className="newBlogContainer">
            <form>
                <label>
                    Write ▶</label>
                <input className="newName" type="text" required  onChange={(e) => setName(e.target.value)} />
                <input className="newBlog" type="text" required  onChange={(e) => setValue(e.target.value)} />

                <button onClick={onBlogClick}> POST 🎬  </button>
            </form>
        </div>
    )
}

export default CreateBlog;
