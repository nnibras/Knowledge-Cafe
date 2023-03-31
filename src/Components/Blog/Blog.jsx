import React from "react";
import "./Blog.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faBookmark);

const Blog = (props) => {
  const { authorName, blogTitle, authorImg, blogImg, readTime, datePublished } =
    props.blog;

  const handleMarkAsRead = props.handleMarkAsRead;
  const handleBookmark = props.handleBookmark;

  return (
    <div className="blog-card">
      <div className="blog-card__image">
        <img src={blogImg} alt="Blog post" />
      </div>

      <div className="flex-box">
        <div className="author">
          <div className="blog-card__author-image">
            <img src={authorImg} alt="Author" />
          </div>

          <div>
            <h3 className="blog-card__author-name">{authorName}</h3>
            <p className="blog-card__date-published">{datePublished}</p>
          </div>
        </div>

        <div className="blog-card__mins-read">
          <p>{readTime} min(s) read</p>
          <button onClick={() => handleBookmark(props.blog)}>
            <FontAwesomeIcon icon="fa-bookmark" />
          </button>
        </div>
      </div>

      <h2 className="blog-card__title">{blogTitle}</h2>

      <a
        onClick={() => handleMarkAsRead(props.blog)}
        className="blog-card__mark-read"
      >
        Mark as Read
      </a>
    </div>
  );
};

export default Blog;
