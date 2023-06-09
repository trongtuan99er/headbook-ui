import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from "../../callAPI.js";
import { CircularProgress } from '@mui/material';

const Posts = ({userId}) => {

  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => makeRequest.get("/posts?userId="+ userId).then(res => {
      return res.data
    })
  }
  )

  return <div className="posts">
    {
      error ? "Có lỗi, không thể tải!" : isLoading ? <CircularProgress sx={{margin: 'auto', padding: '50px'}} /> : data.map((post, index)=>(
      <Post post={post} key={index}/>
    ))
    }
  </div>;
};

export default Posts;
