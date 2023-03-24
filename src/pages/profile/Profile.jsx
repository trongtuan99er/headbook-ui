import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useLocation, Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from "../../callAPI";
import ProfileDetail from "../profileDetai/ProfileDetail";

const Profile = () => {
  const [open, setOpen] = useState(false)
  const [showDetail, setShowDetail] = useState(false)
  const { currentUser } = useContext(AuthContext)
  const queryClient = useQueryClient()
  const userId = parseInt(useLocation().pathname.split("/")[2])

  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => makeRequest.get("/users/find/"+ userId).then(res => {
      return res.data
    })
    }
  )
  const { loading: rlIsLoading, data: dataRelationship } = useQuery({
    queryKey: ["relationship"],
    queryFn: () => makeRequest.get("/relationships?followedUserId="+ userId).then(res => {
      return res.data
    })
    }
  )
  
  const mutation = useMutation((following) => {
    if (following) return makeRequest.delete("/relationships?userId="+ userId)
    return makeRequest.post("/relationships", {userId})
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['relationship'])
    }
  })

  const handleFollow = (e) => {
    e.preventDefault()
    mutation.mutate(dataRelationship?.includes(currentUser.id))
  }

  const handleOpen = () => {
    setOpen(!open)
  }
  const handleShowDetail  = () => {
    setShowDetail(true)
    setOpen(false)
  }
  return (
    <div className="profile">
      <div className="images">
        <img
          src={data?.coverPic}
          alt=""
          className="cover"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="shortInfo">
            <div className="avtBox">
              <img
                src={data?.profilePic}
                alt="avatar"
                className="profilePic"
              />
            <span>{data?.name}</span>
            </div>
            {rlIsLoading ? <button>Loading</button> : userId === currentUser.id ? <button>Cập nhập</button> : <button onClick={handleFollow}>{dataRelationship?.includes(currentUser.id) ? "Đang theo dõi" : "Theo dỗi"}</button>}
            
          </div>
          <div className="moreInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://instagram.com/">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://twitter.com/?lang=vi">
              <TwitterIcon fontSize="large" />
            </a>
          </div>
          <div className="right">
            <MoreVertIcon onClick={handleOpen}/>
            {open && (
            <div className="userItem">
              <span onClick={() => setShowDetail(false)}>Bài Viết</span>
              <span onClick={handleShowDetail}>Giới thiệu</span>
            </div>
          )}
          </div>
          </div>
        </div>
      <div>
        {
          showDetail ? <ProfileDetail data={data}/> : <Posts userId={userId}/>
        }
      </div>
      </div>
    </div>
  );
};

export default Profile;
