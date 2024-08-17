// import React, { useContext } from 'react';
// import { ProfileContext } from './ProfileContext'
// import back from "../images/BACK.webp";
// import profilePic from '../images/profilepic.jpeg';
// import '../components/ProfileView.css';
// import { Link } from 'react-router-dom';
// import { FaUserEdit } from "react-icons/fa";

// const ProfileView = () => {
//     const { profile } = useContext(ProfileContext);

//     return (
//         <div className="profile-container">
//             {/* Background Image and Profile Information */}
//             <div className="profile-header">
//                 <img src={back} alt="Background" className="background-img" />
//                 <div className="profile-info">
//                     <img src={profilePic} alt="Profile" className="profile-img" />
//                     <Link to="/profile/edit" className='icon'>
//                     <FaUserEdit />
//                     {profile.bannerImage && (
//                 <img 
//                     src={profile.bannerImage} 
//                     alt="Profile" 
//                     style={{ width: '150px', height: '150px' }} 
//                 />
//             )}
//     </Link>
//                     <div className="profile-details">
//                         <h2>{profile.name}</h2>
//                     </div>
//                 </div>
//             </div>
//             <p><strong>Name:</strong> {profile.name}</p>
//             <p><strong>Email:</strong> {profile.email}</p>
//             <p><strong>Languages:</strong> {profile.languages}</p>
//             <p><strong>Education:</strong> {profile.education}</p>
//             <p><strong>Specialization:</strong> {profile.specialization}</p>

//             {/* Social Media Links */}
//             <div className="social-media">
//                 <a href="https://twitter.com/kevin_smith55" target="_blank" rel="noopener noreferrer">
//                     <i className="fab fa-twitter"></i>
//                 </a>
//                 <a href="https://linkedin.com/in/kevin_smith" target="_blank" rel="noopener noreferrer">
//                     <i className="fab fa-linkedin-in"></i>
//                 </a>
//                 <a href="https://instagram.com/in/kevin_smith" target="_blank" rel="noopener noreferrer">
//                     <i className="fab fa-instagram"></i>
//                 </a>
//                 <a href="https://github.com/in/kevin_smith" target="_blank" rel="noopener noreferrer">
//                     <i className="fab fa-github"></i>
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default ProfileView;



import React, { useContext } from 'react';
import { ProfileContext } from './ProfileContext';
import back from "../images/BACK.webp";
import defaultProfilePic from '../images/profilepic.jpeg'; // Renamed to indicate default profile picture
import '../components/ProfileView.css';
import { Link } from 'react-router-dom';
import { FaUserEdit } from "react-icons/fa";

const ProfileView = () => {
    const { profile } = useContext(ProfileContext);

    return (
        <div className="profile-container">
            {/* Background Image and Profile Information */}
            <div className="profile-header">
                <img src={back} alt="Background" className="background-img" />
                <div className="profile-info">
                    <img 
                        src={profile.bannerImage || defaultProfilePic} 
                        alt="Profile" 
                        className="profile-img" 
                        // style={{ width: '150px', height: '150px' }} 
                    />
                    <Link to="/profile/edit" className='icon'>
                        <FaUserEdit />
                    </Link>
                    <div className="profile-details">
                        <h2>{profile.name}</h2>
                    </div>
                </div>
            </div>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Languages:</strong> {profile.languages}</p>
            <p><strong>Education:</strong> {profile.education}</p>
            <p><strong>Specialization:</strong> {profile.specialization}</p>

            {/* Social Media Links */}
            <div className="social-media">
                <a href="https://twitter.com/kevin_smith55" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com/in/kevin_smith" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://instagram.com/in/kevin_smith" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://github.com/in/kevin_smith" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    );
};

export default ProfileView;

