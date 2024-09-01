import '../Styles/CommentedPost.css';

interface CommentedPostProps {
  authorName: string;
  postContent: string;
  totalComments: number;
  editedAgo: number;
  emoticon: string;
}

const CommentedPost = ({
  authorName,
  postContent,
  totalComments,
  editedAgo,
  emoticon,
}: CommentedPostProps) => {
  return (
    <div className="commented-post">
      <div className="commented-post-header">
        <div>
          <h4 className="commented-post-author">{authorName}</h4>
          <p className="commented-post-edited">Edited {editedAgo} mins ago</p>
        </div>
        <div className="commented-post-dots">...</div>
      </div>
      <div className="commented-post-content">
        <div className="commented-post-content-inner">
          <div className="commented-post-emoticon">{emoticon}</div>
          <span className="commented-post-text">{postContent}</span>
        </div>
      </div>
      <p className="commented-post-comments">{`${totalComments} comments`}</p>
    </div>
  );
};

export default CommentedPost;
