import axios from "axios";
import { React, useEffect, useState } from "react";
import "./BlogsList.css";

const BlogsList = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await axios.get("http://localhost:5000/blogs");
      console.log(data.data);
      setBlogs(data.data);
    };
    fetchBlogs();
  }, [])

  const Blist = () => {
    return (
      blogs.map((blog) => {
        return (
          <div className="blog">
            <p>{blog.name}</p>
            <p>{blog.blog}</p>
          </div>)
      }))
  }
  return (<div className="blogs_listContainer"><div className="inner_blogs_listContainer">{Blist()}</div></div>);
}
export default BlogsList;
