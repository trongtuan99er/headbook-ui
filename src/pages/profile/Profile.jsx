import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://i.pinimg.com/736x/44/29/f0/4429f02128255f000ff0f11e03fc2cb2.jpg"
          alt=""
          className="cover"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="shortInfo">
            <div className="avtBox">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNAUvIj8tIlcc6MemlkLaXGlOLNplzf-3euA&usqp=CAU"
                alt="avatar"
                className="profilePic"
              />
              <span>Trọng Tuấn</span>
            </div>
              <button>Theo dỗi</button>
          </div>
          <div className="moreInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
