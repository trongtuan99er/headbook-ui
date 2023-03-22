import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from "../../callAPI.js";
import { CircularProgress } from '@mui/material';
import moment from "moment";
import { Link } from "react-router-dom";
import { useQueryClient, useMutation } from '@tanstack/react-query';

const Comments = ({postId}) => {
  const [comment, setComment] = useState("")

  const {currentUser} = useContext(AuthContext)
  const queryClient = useQueryClient()

  const { isLoading, error, data } = useQuery({
    queryKey: ["comments"],
    queryFn: () => makeRequest.get("/comments?postId="+ postId).then(res => {
      return res.data
    })
    }
  )
  const mutation = useMutation((newComment) => {
    return makeRequest.post("/comments", newComment)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"])
    }
  })

  const handleComment = (e) => {
    e.preventDefault()
    mutation.mutate({desc: comment, postId: postId})
    setComment("")
  }
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Viết bình luận ..." value={comment} onChange={e => setComment(e.target.value)}/>
        <button onClick={handleComment}>Bình Luận</button>
      </div>
      {error ? "không thể tải bình luận!":
      isLoading ? <CircularProgress sx={{margin: 'auto', padding: '50px', display: "flex"}}/> 
      : 
      (
        data?.length > 0 ? data.map((comment) => (
        <div className="comment" key={comment.id}>
          <Link className="link" to={`/profile/${comment.userId}`}>
            <img src={comment.profilePic} alt="avatar" />
            </Link>
          <div className="info">
            <Link className="link" to={`/profile/${comment.userId}`}>
              <span>{comment.name}</span>
            </Link>
            <p>{comment.desc}</p>
          </div>
          <span className="date">{comment.createdAt ? moment(comment.createdAt).fromNow() : "N/A"}</span>
        </div>
      )) : <span>Chưa có bình luận nào trên bài viết này!</span>
      )}
    </div>
  );
};

export default Comments;
