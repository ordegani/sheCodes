import { React, useState } from "react";
import axios from "axios";
import "./CreateBlog.css";

const CreateBlog = () => {
    const [value, setValue] = useState('');
    const onBlogClick =
        //  const blog = box input
        async () => {
            await axios.post('http://localhost:5000/', { value })
            console.log(value);
        }
    return (
        <div className="newBlogContainer">
            <form>
                <label>
                    Write ▶</label>
                    <input className="newBlog" type="text" required value={value} onChange={(e) => setValue(e.target.value)} />
               
                <button onClick={onBlogClick}> POST 🎬  </button>
            </form>
        </div>
    )
}

export default CreateBlog;
