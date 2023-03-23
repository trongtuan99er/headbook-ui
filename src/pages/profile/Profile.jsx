import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useLocation, Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from "../../callAPI";
import ProfileDetail from "../profileDetai/ProfileDetail";

const Profile = () => {
  const [open, setOpen] = useState(false)
  const [showDetail, setShowDetail] = useState(false)
  const { currentUser } = useContext(AuthContext)
  const userId = parseInt(useLocation().pathname.split("/")[2])
  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => makeRequest.get("/users/find/"+ userId).then(res => {
      return res.data
    })
    }
  )
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
            {userId === currentUser.id ? <button>Cập nhập</button> : <button>Theo dỗi</button>}
            
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
          showDetail ? <ProfileDetail data={data}/> : <Posts/>
        }
      </div>
      </div>
    </div>
  );
};

export default Profile;
