import axios from "axios";
import { React, useEffect, useState } from "react";

// tester:
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
      blogs.map((blog, index) => {
        return (
          <div>
            <p>{blog.name}</p>
            <p>{blog.blog}</p>
          </div>)
      }))
  }
  return (<div className="movies_listContainer">{Blist()}</div>);
}
export default BlogsList;