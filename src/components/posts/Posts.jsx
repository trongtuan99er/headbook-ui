import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from "../../callAPI.js";
import { CircularProgress } from '@mui/material';

const Posts = () => {

  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => makeRequest.get("/posts").then(res => {
      return res.data
    })
  }
  )
  console.log(data);
  return <div className="posts">
    {
      error ? "Có lỗi, không thể tải!" : isLoading ? <CircularProgress sx={{margin: 'auto', padding: '50px'}} /> : data.map(post=>(
      <Post post={post} key={post.id}/>
    ))
    }
  </div>;
};

export default Posts;
