// import React, { useState, useContext } from 'react';
// import { ProfileContext } from './ProfileContext';
// import './ProfileEdit.css';
// import { useNavigate } from 'react-router-dom';

// const ProfileEdit = () => {
//     const { profile, updateProfile } = useContext(ProfileContext);
//     const [formData, setFormData] = useState({
//         ...profile,
//         socialMedia: {
//             twitter: '',
//             linkedin: '',
//             github: ''
//         }
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//         updateProfile(e); 
//     };

//     // const handleFileChange = (e) => {
//     //     setFormData({
//     //         ...formData,
//     //         bannerImage: e.target.files[0] 
//     //     });
//     // };
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setFormData({ ...formData, bannerImage: file });
//             updateProfileImage(file); // Update the profile image in context
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form Data Submitted:', formData);
//         navigate('/profile');
//     };

//     return (
//         <div className="profile-edit-container">
//             <h2>Edit Your Profile Here</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Enter your name"
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter your email"
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="languages">Languages (comma-separated):</label>
//                     <input
//                         type="text"
//                         id="languages"
//                         name="languages"
//                         value={formData.languages}
//                         onChange={handleChange}
//                         placeholder="Enter languages"
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="education">Education:</label>
//                     <input
//                         type="text"
//                         id="education"
//                         name="education"
//                         value={formData.education}
//                         onChange={handleChange}
//                         placeholder="Enter your education"
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="specialization">Specialization:</label>
//                     <input
//                         type="text"
//                         id="specialization"
//                         name="specialization"
//                         value={formData.specialization}
//                         onChange={handleChange}
//                         placeholder="Enter your specialization"
//                     />
//                 </div>
                
//                 <div>
//                     <label htmlFor="description">Description:</label>
//                     <textarea
//                         id="description"
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         placeholder="Enter a brief description about yourself"
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="bannerImage">Profile Image:</label>
//                     <input
//                         type="file"
//                         id="bannerImage"
//                         name="bannerImage"
//                         onChange={handleFileChange}
//                     />
//                          {profile.bannerImage && (
//                         <img 
//                             src={profile.bannerImage} 
//                             alt="Profile Preview" 
//                             style={{ width: '100px', height: '100px', marginTop: '10px' }} 
//                         />
//                     )}
//                 </div>

//                 <button type="submit">Save</button>
//             </form>
//         </div>
//     );
// };

// export default ProfileEdit;


import React, { useState, useContext } from 'react';
import { ProfileContext } from './ProfileContext';
import './ProfileEdit.css';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
    const { profile, updateProfile, updateProfileImage } = useContext(ProfileContext); // Get updateProfileImage
    const [formData, setFormData] = useState({
        ...profile,
        socialMedia: {
            twitter: '',
            linkedin: '',
            github: ''
        }
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        updateProfile(e);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, bannerImage: file });
            updateProfileImage(file); // Update the profile image in context
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        navigate('/profile');
    };

    return (
        <div className="profile-edit-container">
            <h2>Edit Your Profile Here</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </div>

                <div>
                    <label htmlFor="languages">Languages (comma-separated):</label>
                    <input
                        type="text"
                        id="languages"
                        name="languages"
                        value={formData.languages}
                        onChange={handleChange}
                        placeholder="Enter languages"
                    />
                </div>

                <div>
                    <label htmlFor="education">Education:</label>
                    <input
                        type="text"
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        placeholder="Enter your education"
                    />
                </div>

                <div>
                    <label htmlFor="specialization">Specialization:</label>
                    <input
                        type="text"
                        id="specialization"
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        placeholder="Enter your specialization"
                    />
                </div>
                
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter a brief description about yourself"
                    />
                </div>

                <div>
                    <label htmlFor="bannerImage">Profile Image:</label>
                    <input
                        type="file"
                        id="bannerImage"
                        name="bannerImage"
                        onChange={handleFileChange}
                    />
                    {profile.bannerImage && (
                        <img 
                            src={profile.bannerImage} 
                            alt="Profile Preview" 
                            style={{ width: '100px', height: '100px', marginTop: '10px' }} 
                        />
                    )}
                </div>

                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default ProfileEdit;
