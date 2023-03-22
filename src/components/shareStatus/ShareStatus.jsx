import './shareStatus.scss'
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { makeRequest } from '../../callAPI';
import storage from '../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const ShareStatus = () => {
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const [fileUrl, setFileUrl] = useState(null)
  const [progresspercent, setProgresspercent] = useState(0);
  const {currentUser} = useContext(AuthContext)
  const queryClient = useQueryClient()
  
  const mutation = useMutation((newpost) => {
    return makeRequest.post("/posts", newpost)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"])
    }
  })

  const handleShareStatus = (e) => {
    e.preventDefault()
    mutation.mutate({desc, img: fileUrl})
    setDesc("")
    setFile(null)
    setFileUrl(null)
    setProgresspercent(0)
  }
  
  const handleUpload = (e) => {
    e.preventDefault();

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setFileUrl(url)
        });
      }
    );
  };
  const handleRemoveImg = () => {
    setFile(null)
  }
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <textarea rows={2} type="text" value={desc} onChange={(e) => setDesc(e.target.value)}  placeholder={`Bạn đang nghĩ gì ${currentUser.name}?`} />
            </div>
            <div className="right">
              {file && <div style={{position: "relative"}}>
                <img className='fileImg' alt='img' src={URL.createObjectURL(file)} />
                <button className='removeImg' onClick={handleRemoveImg}>x</button>
              </div>}
            </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} 
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Thêm ảnh</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Thêm vị trí</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Gắn thẻ Bạn</span>
            </div>
          </div>
          <div className="right">
            {file && fileUrl === null ? (
              <button className={progresspercent !== 0 ? "disabled" : ""} onClick={handleUpload}>
                Tải hình
              </button>
            ) : (
              <button onClick={handleShareStatus}>
                Đăng
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareStatus;