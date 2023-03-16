import "./navBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Headbook</span>
        </Link>
        <HomeOutlinedIcon />
        <WbSunnyOutlinedIcon/>
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNAUvIj8tIlcc6MemlkLaXGlOLNplzf-3euA&usqp=CAU"
            alt="avatar"
          />
          <span>TrongTuan</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;