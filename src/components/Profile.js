import ProfileImg from "./ProfileImg.jpg"
import { useState } from "react"

const Profile = () => {
    //show is true if we display profile (image and infos)
    const [show, setShow] =  useState(false)
    return (
        <div>
            <div className="profile-header">
                <h1>Profile App state</h1>
                <button 
                    onClick={()=> {setShow(!show)}}>
                        {show ? 'Hide profile': 'Show profile'}
                </button>
            </div>
            {/* If show is true */}
            { show && 
                 <div className="profile-container">
                    <div className="image">
                        <img src={ProfileImg} alt="profile" />
                    </div>
                    <div className="profile-info">
                        <h1>Ali Sara</h1>
                        <h4>web developer</h4>
                        <span>Hi I am a web developer</span>
                    </div>
                </div>
            }
        </div>
    )
}
export default Profile