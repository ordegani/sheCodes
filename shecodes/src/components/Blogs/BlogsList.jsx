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
      blogs.slice(0, blogs.length / 2).map((blog) => {
        return (
          <div className="blog">
            <h2>{blog.name}</h2>
            <p>{blog.blog}</p>
          </div>)
      })
    )
  }
  const Blist2 = () => {
    return (
      blogs.slice(blogs.length / 2, blogs.length).map((blog) => {
        return (
          <div className="blog">
            <h2>{blog.name}</h2>
            <p>{blog.blog}</p>
          </div>)
      })
    )
  }
  return (<div className="blogs_listContainer"><div className="inner_blogs_listContainer">{Blist()}</div><div className="inner_blogs_listContainer">{Blist2()}</div></div>);
}
export default BlogsList;
