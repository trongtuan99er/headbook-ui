import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Comments from "../comment/Comments";
import moment from "moment/moment.js";
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { makeRequest } from "../../callAPI";
import { AuthContext } from "../../context/authContext";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const { currentUser } = useContext(AuthContext)
  const queryClient = useQueryClient()

  const { isLoading, error, data } = useQuery({
    queryKey: ["likes", post.id],
    queryFn: () => makeRequest.get("/likes?postId="+ post.id).then(res => {
      return res.data
    }),
    }
  )

  const mutation = useMutation((liked) => {
    if (liked) return makeRequest.delete("/likes?postId="+ post.id)
    return makeRequest.post("/likes", {postId: post.id})
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['likes'])
    }
  })

  const handleLike = (e) => {
    e.preventDefault()
    mutation.mutate(data?.includes(currentUser.id))
  }

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{post.createdAt ? moment(post.createdAt).fromNow() : "N/A"}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {data?.includes(currentUser.id) ? <FavoriteOutlinedIcon className="liked" onClick={handleLike}/> : <FavoriteBorderOutlinedIcon onClick={handleLike}/>}
            {data?.length == 0 ? "" : data?.length } Thích
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
              Bình luận
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Chia sẻ
          </div>
        </div>
        {commentOpen && <Comments postId={post.id}/>}
      </div>
    </div>
  );
};

export default Post;
