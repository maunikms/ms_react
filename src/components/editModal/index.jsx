import React, { useEffect, useState } from 'react';
import CloseIcon from "../../assets/images/close.png";
import "./index.css";

const EditModal = ({ open, toggleModal, editData, handleSaveEditData }) => {

    const [data, setData] = useState({})
    useEffect(() => {
        setData(editData)
    }, [editData])


    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={open ? 'modal' : 'modal close'}>
            <div className='modal_content'>
                <div className='modal_header'>
                    <h1>Basic Modal</h1>
                    <img src={CloseIcon} alt="close" onClick={toggleModal} />
                </div>
                <div className='modal_body'>
                    <div className='form_group'>
                        <label>Name :</label>
                        <input type="text" name="name" className={data.name === "" && 'input_error'} value={data?.name} onChange={handleChange} />
                        {
                            data.name === "" && <div className='error'>This field is required</div>
                        }
                    </div>
                    <div className='form_group'>
                        <label>Email :</label>
                        <input type="email" name="email" className={data.email === "" && 'input_error'} value={data?.email} onChange={handleChange} />
                        {
                            data.email === "" && <div className='error'>This field is required</div>
                        }
                    </div>
                    <div className='form_group'>
                        <label>Phone :</label>
                        <input type="text" name="phone" className={data.phone === "" && 'input_error'} value={data?.phone} onChange={handleChange} />
                        {
                            data.phone === "" && <div className='error'>This field is required</div>
                        }
                    </div>
                    <div className='form_group'>
                        <label>Website :</label>
                        <input type="text" name="website" className={data.website === "" && 'input_error'} value={data?.website} onChange={handleChange} />
                        {
                            data.website === "" && <div className='error'>This field is required</div>
                        }
                    </div>
                </div>
                <div className='modal_footer'>
                    <button className='btn_cancel' onClick={toggleModal}>Cancel</button>
                    <button className='btn_ok' onClick={() => handleSaveEditData(data)}>Ok</button>
                </div>
            </div>
        </div>
    )
}

export default EditModal;