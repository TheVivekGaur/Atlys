import React from 'react';
import CommentedPost from './CommentedPost';
import './Styles/BlogPost.css';

const BlogPost = () => {
  return (
    <div>
      <h2 className="blog-post-title">Hello Jane</h2>
      <h6 className="blog-post-subtitle">
        How are you doing today? Would you like to share something with the
        community 🤗
      </h6>
      <div className="create-post-container">
        <h4 className="create-post-title">Create Post</h4>
        <div className="create-post-content">
          <div className="create-post-header">
            <div className="create-post-avatar">💬</div>
            <span className="create-post-text">How are you feeling today?</span>
          </div>
        </div>
        <div className="create-post-footer">
          <button className="create-post-button">Post</button>
        </div>
      </div>
      <CommentedPost
        authorName="Theresa Webb"
        postContent="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        totalComments={24}
        editedAgo={5}
        emoticon="👋"
      />
      <CommentedPost
        authorName="Marvin Mckinney"
        postContent="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        totalComments={34}
        editedAgo={8}
        emoticon="😞"
      />
    </div>
  );
};

export default BlogPost;
