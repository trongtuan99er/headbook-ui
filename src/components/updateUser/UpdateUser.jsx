import './updateUser.scss'
import { useState  } from 'react';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { makeRequest } from '../../callAPI';
import { uploadImage } from '../../uploadImgFile.js'

const UpdateUser = ({user, close}) => {
  const [coverPic, setCoverPic] = useState(user.coverPic);
  const [profilePic, setProfilePic] = useState(user.profilePic);
  const [infoData, setInfoData] = useState({
    email: user.email,
    name: user.name,
    city: user.city,
    website: user.website,
    phone: user.phone,
    maritalStatus: user.maritalStatus,
    interest: user.interest,
    gender: user.gender
  });
  const queryClient = useQueryClient()  
  
  const handleChange = (e) => {
    setInfoData((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const mutation = useMutation((infoData) => {
    return makeRequest.put("/users", infoData)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(["user"])
    }
  })

  const handleUpdateUser = (e) => {
    e.preventDefault()
    mutation.mutate({...infoData, coverPic, profilePic})
    close();
  }


  return (
    <div className="update">
    <div className="wrapper">
      <form>
        <div className="files">
          <label htmlFor="cover">
            <span>Ảnh bìa</span>
            <div className="imgContainer">
              <img
                src={coverPic || user.coverPic}
                alt="cover"
              />
              <CloudUploadIcon className="icon" />
            </div>
          </label>
          <input type="file"   id="cover"
            style={{ display: "none" }} onChange={async (e) => {
                const imgURl = await uploadImage(e.target.files[0]);
                setCoverPic(imgURl)
                
            }}/>
          <label htmlFor="profile">
            <span>Ảnh đại diện</span>
            <div className="imgContainer">
              <img
                src={profilePic || user.profilePic}
                alt="avatar"
              />
              <CloudUploadIcon className="icon" />
            </div>
          </label>
          <input type="file"  id="profile"  style={{ display: "none" }} onChange={async (e) => {
                const imgURl = await uploadImage(e.target.files[0]);
                setProfilePic(imgURl)
            }}/>
        </div>
        <div className='inputFiled'>
          <label>Email</label>
          <input
            type="email"
            value={infoData.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className='inputFiled'>
          <label>SDT</label>
          <input
            type="number"
            value={infoData.phone}
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div className="inputFiled">
          <label>Tên</label>
          <input
            type="text"
            value={infoData.name}
            name="name"
            onChange={handleChange}
          />
          </div>
        <div className="inputFiled">
          <label>Địa chỉ</label>
          <input
            type="text"
            name="city"
            value={infoData.city}
            onChange={handleChange}
          />
          </div>
        <div className="inputFiled">
          <label>Trang web</label>
          <input
            type="url"
            name="website"
            value={infoData.website}
            onChange={handleChange}
          />
        </div>
        <div className="inputFiled">
          <label>Giới tính</label>
          <select name="gender" id="select" onChange={handleChange} value={infoData.gender}>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Giới tính thứ 3">Giới tính thứ 3</option>
          </select>
        </div>
        <div className="inputFiled">
          <label>Tình trạng hôn nhân</label>
          <select name="maritalStatus" id="select" onChange={handleChange} value={infoData.maritalStatus}>
            <option value="Độc thân">Độc thân</option>
            <option value="Hẹn hò">Hẹn hò</option>
            <option value="Đã lập gia đình">Đã lập gia đình</option>
            <option value="Góa">Góa</option>
            <option value="Không xác định">Không xác định</option>
          </select>
        </div>
        <div className="inputFiled">
          <label>Sở thích</label>
          <input
            type="text"
            name="interest"
            value={infoData.interest}
            onChange={handleChange}
          />
        </div>
      </form>
      <div style={{width: "100%", display: "flex", justifyContent: "flex-end", marginTop: 15}}>
          <button onClick={handleUpdateUser}>Cập nhập</button>
      </div>
    </div>
  </div>
  )
}

export default UpdateUser