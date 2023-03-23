import React from 'react'
import './profileDetail.scss'

const ProfileDetail = ({data}) => {

  return (
    <div className="detail-container">
      <div className="container">
        <div className="info" >
          <span className="infoTitle">
            Email:
          </span>
          <span className='infoDesc'>
            {data.email}
          </span>
          </div>
          <div className="info" >
          <span className="infoTitle">
            Sống tại:
          </span>
          <span className='infoDesc'>
            {data.city || "Chưa cập nhập"}
          </span>
          </div>
          <div className="info" >
          <span className="infoTitle">
            Số điện thoại:
          </span>
          <span className='infoDesc'>
            {data.phone || "Chưa cập nhập"}
          </span>
          </div>
          <div className="info" >
          <span className="infoTitle">
            Giới tính:
          </span>
          <span className='infoDesc'>
            {data.gender || "Chưa cập nhập"}
          </span>
          </div>
          <div className="info" >
          <span className="infoTitle">
            Tình trạng hôn nhân:
          </span>
          <span className='infoDesc'>
            {data.maritalStatus || "Chưa cập nhập"}
          </span>
          </div>
          <div className="info" >
          <span className="infoTitle">
            Sở thích:
          </span>
          <span className='infoDesc'>
            {data.interest || "Chưa cập nhập"}
          </span>
          </div>
          <div className="info" >
          <span className="infoTitle">
            Trang Web:
          </span>
          <span className='infoDesc'>
            {data.website || "Chưa cập nhập"}
          </span>
          </div>
      </div>
    </div>
  );
}

export default ProfileDetail