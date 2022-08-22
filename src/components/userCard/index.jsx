import React from 'react';
import UserImg from "../../assets/images/user.jpg";
import EmailImg from "../../assets/images/email.png";
import PhoneImg from "../../assets/images/phone.png";
import EditImg from "../../assets/images/edit.png";
import FillHeartImg from "../../assets/images/fill-heart.png";
import HeartImg from "../../assets/images/heart.png";
import WebImg from "../../assets/images/web.png";
import DeleteImg from "../../assets/images/delete.png";
import "./index.css";

const UserCard = ({ userData, deleteRecord, likeDisLike, handleEdit }) => {
    return (
        <div className='card'>
            <div className='user_img_div'>
                <img src={`https://avatars.dicebear.com/v2/avataaars/${userData.username}.svg`} alt="user icon" />
            </div>
            <div className='card_body'>
                <h1>{userData?.name}</h1>
                <div className='info_div'>
                    <img src={EmailImg} alt="email icon" />
                    <span>{userData?.email}</span>
                </div>
                <div className='info_div'>
                    <img src={PhoneImg} alt="phone icon" />
                    <span>{userData?.phone}</span>
                </div>
                <div className='info_div'>
                    <img src={WebImg} alt="web icon" />
                    <span>{userData?.website}</span>
                </div>
            </div>
            <ul className='card_footer'>
                <li>
                    {
                        userData?.isLike ?
                            <img src={FillHeartImg} alt="heart" onClick={() => likeDisLike(userData?.id, false)} />
                            :
                            <img src={HeartImg} alt="heart" onClick={() => likeDisLike(userData?.id, true)} />
                    }
                </li>
                <li>
                    <img src={EditImg} alt="edit icon" onClick={() => handleEdit(userData)} />
                </li>
                <li>
                    <img src={DeleteImg} alt="delete icon" onClick={() => deleteRecord(userData?.id)} />
                </li>
            </ul>
        </div>
    )
}

export default UserCard;