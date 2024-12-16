import React from "react";
import './HeaderArea.css';
import{AiOutlinearSearch,AiFillHome}from 'react-icons/ai'
import {MdOndemandVideo} from 'react-icon/md'
import{FaRegFlag, FaUsers,FaplusCircle,FaFacebookMessenger,FaBell} from 'react-icons/fa';  
import MainArea from "../MainArea/MainArea";
function HeaderArea(){
    return(
        <div className="Homepage">
            <div className="header">
                <div className="first-header">
                    <div className="logo">

                    </div>
                    
                    <div className="search">
                        <AiOutlinearSearch style={height:"4rem"}/>
                        <input placeholder="SearchFacebook" type="search"/>
                    </div>
                </div>
                <div className="middle-header">
                    <div className="Icon">
                        <AiFillHome fontsize="2.3rem" color="#1877f2"/>
                    </div>
                    <div className="Icon">
                        <FaRegFlag fontsize="2.3rem" color="#1877f2"/>
                    </div>
                    <div className="Icon">
                        <MdOndemandVideo fontsize="2.3rem" color="#1877f2"/>
                    </div>
                    <div className="Icon">
                        <FaUsers fontsize="2.3rem" color="#1877f2"/>
                    </div>
                    <div className="Icon">
                        <Aioutlinewallet fontsize="2.3rem" color="#1877f2"/>
                    </div>
                </div>
                <div className="third-header">
                    <div className="plus">
                        <FaplusCircle fontsize="2rem"/>
                    </div>
                    <div className="plus">
                        <FaFacebookMessenger fontsize="2rem"/>
                    </div>
                    <div className="plus">
                        <FaBell fontsize="2rem"/>
                    </div>
                </div>
            </div>
            <MainArea/> 
        </div>
    )
}
export default HeaderArea