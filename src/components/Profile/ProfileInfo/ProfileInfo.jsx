import React from 'react';
import pro from "./ProfileInfo.module.css"

const ProfileInfo = () =>{
    return (
        <div>
            <div>
                <img className={pro.imgsee}  src = 'https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg' />
            </div>
            <div className = {pro.desc_block}>Ava + desc</div>
        </div>
    );
}

export default ProfileInfo;