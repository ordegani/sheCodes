import axios from "axios";
import { React, useEffect } from "react";

// tester:
const BlogsList = () => {
  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await axios.get("http://localhost:5000/");
  console.log(data);
  return (<div>{data}</div>)
    };
    fetchBlogs();
  }, [])


return (<div className="movies_listContainer">{BlogsList}TO BE CONTINUED</div>);
};
export default BlogsList;