import { faBowlingBall } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./SideBar.css";
const SideBar = (props) => {
  const { sideBar } = props;
  const { bookmark } = props;

  let totalTime = 0;

  for (const blog of sideBar) {
    totalTime = totalTime + blog.readTime;
  }

  return (
    <div className="sideBar-container">
      <div className="spentTime">
        <p>Spent time on reading: {totalTime} min(s) </p>
      </div>
      <div className="bookmarks">
        <h2>Bookmarked Blogs: {bookmark.length}</h2>

        {bookmark.map((blog) => (
          <div key={blog.id} className="bookmark-box">
            <p>{blog.blogTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
