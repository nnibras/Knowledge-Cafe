import React, { Children, useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import SideBar from "../SideBar/SideBar";
import "./Blogs.css";
import Swal from "sweetalert2";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [sideBar, setSideBar] = useState([]);
  const [bookmark, setBookmark] = useState([]);

  // fetching from my API on Github
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleMarkAsRead = (blog) => {
    const newElements = [...sideBar, blog];
    setSideBar(newElements);
  };

  const handleBookmark = (blog) => {
    const newBookmark = [...bookmark];
    const existingBookmark = newBookmark.find((b) => b.id === blog.id);

    if (existingBookmark) {
      Swal.fire({
        icon: "error",
        title: "Warning!",
        text: "You have already bookmarked this blog.",
      });
      return;
    }

    newBookmark.push(blog);
    setBookmark(newBookmark);
  };

  return (
    <div>
      <div className="blogs-container">
        <div className="blog-container">
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              handleMarkAsRead={handleMarkAsRead}
              handleBookmark={handleBookmark}
            ></Blog>
          ))}
        </div>
        <div className="info-container">
          <SideBar
            sideBar={sideBar}
            handleBookmark={handleBookmark}
            bookmark={bookmark}
          ></SideBar>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
