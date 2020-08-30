import React,{useEffect,useState} from 'react';
import FormData from "form-data";
import './profile.css';
import Axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import {update} from "../../_actions/userAction";
import {Modal} from "react-bootstrap";
function ProfileScreen(props) {
    const userSignin = useSelector( state => state.userSignin);
    const {userInfo} = userSignin;
    const userUpdate = useSelector( state => state.userUpdate);
    const {loading,error,updateMessage} = userUpdate;
    const[showModal,setShowModal]=useState(false);
    const[id,setId]=useState('');
    const[name,setName]=useState('');
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[picture,setPicture]=useState('');
    const[message,setMessage]=useState('');
    const[imgurl,setImgUrl]=useState('');
    const[filename,setFilename]=useState('');
    const[errorUpload,setError] = useState('');
    const[file,setFile]=useState('');
    const dispatch = useDispatch();
    const getResponse = (res) =>{
        setMessage(res.data.message);
        setImgUrl(res.data.profile_url);
        setPicture(res.data.profile_url);
        setFilename(res.data.filename);
    }
    const catchError = (error) =>{
        setError(error)
    }
    const handleClose = () =>{
        setShowModal(false);
        setTimeout(()=>{
            window.location.reload();
        },[100])
        props.history.push('/');
    }
    const onUploading = () =>{
        const formData = new FormData();
        formData.append('profile',file,file.name);
        Axios.post('http://localhost:4000/api/v1/profile',formData,{
           headers:{
               'Content-Type':'multipart/form-data'
           } 
        })
        .then( res => getResponse(res))
        .then( error => catchError(error));
    }
    const saveUpload = (e) =>{
        e.preventDefault();
        const data = {
            id:id || userInfo.id,
            name:name || userInfo.name,
            username:username || userInfo.username,
            email:email || userInfo.email,
            picture:imgurl || userInfo.imgurl
        }
        dispatch(update(id,data))
        setShowModal(true);
    }
    useEffect( () =>{
    if(userInfo){
        setId(userInfo.id);
        setName(userInfo.name);
        setUsername(userInfo.username);
        setEmail(userInfo.email);
        setPicture(userInfo.picture);
    }else if(!userInfo){
        props.history.push('/')
    }
    },[userInfo,updateMessage])
    return (
        <div className="profile-container">
            <div className="profile-info">
                <div className="form">
                    <form>
                        <ul className="form-container">
                            <li><h2>Profile</h2></li>
                            <li>{loading ? <p>Loading...</p>: error ? <p>{error}</p> : <p style={{textAlign:'center',display:'none'}}>{updateMessage}</p>}</li>
                            <li>
                                <label htmlFor="name">Name</label>
                                <input type="text" value={name} name="name" onChange={ (e) => setName(e.target.value)}/>
                            </li>
                            <li>
                                <label htmlFor="username">Username</label>
                                <input type="text" value={username}  name="username" onChange={ (e) => setUsername(e.target.value)}/>
                            </li>
                            <li>
                                <label htmlFor="email">email</label>
                                <input type="email" value={email}  name="email" onChange={ (e) => setEmail(e.target.value)}/>
                            </li>
                            <li>
                                <label htmlFor="password">Password</label>
                                <input type="password"  name="password"/>
                            </li>
                            <li>
                                <button type="submit" className="primary" onClick={saveUpload}>Save</button>
                                {showModal ? <Message show={showModal} onHide={() => setShowModal(false)} close={handleClose}/>: null }
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="profile-action">
                <div>
                    <img src={picture}></img>
                    <div>
                        <label>{message ? <span>{message}</span>: "Change Your Picture"}</label>
                        <input type="file" name="profile" onChange={(e) => setFile(e.target.files[0])}></input>
                        <button type="submit" className="primary" onClick={ onUploading}>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileScreen

function Message(props){
    return(
      <Modal {...props} show={props.show} onHide={props.onHide} size="md">
          <button className='hover' style={{position:'relative',left:'0',top:'0',textAlign:'left',color:'ff0000',background:'#1BC47D',border:'none',outline:'none'}} onClick={props.close}>
              X
          </button>
          <Modal.Body>
            <p style={{textAlign:'center'}}>
              Your Profile Has Been Changed Successfully
            </p>
          </Modal.Body>
      </Modal>
    )
  }
