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
                {/* <label>
                   WRITE ▶</label> */}
                <input className="newName" type="text" required placeholder="title" onChange={(e) => setName(e.target.value)} />
                <input className="newBlog" required placeholder="Get creative here" onChange={(el) => setValue(el.target.value)} />
                <button type="submit" onClick={onBlogClick}> POST 🎬  </button>
            </form>
        </div>
    )
}

export default CreateBlog;
