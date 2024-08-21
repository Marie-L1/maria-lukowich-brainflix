import "./CommentsList.scss";
import avatar from "../../assets/Images/grey-background.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";

const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    }).format(date);
  };


  function CommentsList({ comments = [] }) {  // default is an empty array
    return (
        <ul className="comments-list">
            <li>Comments list component is rendering</li>
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <li key={comment.id} className="comments-list__item">
                        <img src={avatar} className="comments-list__profile-img" alt="profile" />
                        <div className="comments-list__text-wrapper">
                            <h3 className="comments-list__name">{comment.name}</h3>
                            <p className="comments-list__content">{comment.comment}</p>
                        </div>
                        <h3 className="comments-list__date">{formatTimestamp(comment.timestamp)}</h3>
                    </li>
                ))
            ) : (
                <li>No comments available</li>
            )}
        </ul>
    );
}
export default CommentsList;