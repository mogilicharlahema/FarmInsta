// import React, { createContext, useState } from 'react';


// export const ProfileContext = createContext();

// export const ProfileProvider = ({ children }) => {
//   const [profile, setProfile] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     description: 'Experienced Content Creator specializing in short-form video content.',
//     languages: 'English, Hindi',
//     education: "Bachelor's in Media Studies",
//     specialization: 'Video Editing, Social Media Marketing',

//   });

//   const updateProfile = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   return (
//     <ProfileContext.Provider value={{ profile, updateProfile }}>
//       {children}
//     </ProfileContext.Provider>
//   );
// };


import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    description: 'Experienced Content Creator specializing in short-form video content.',
    languages: 'English, Hindi',
    education: "Bachelor's in Media Studies",
    specialization: 'Video Editing, Social Media Marketing',
    bannerImage: null, // New state to store the profile image
  });

  const updateProfile = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const updateProfileImage = (imageFile) => {
    const imageUrl = URL.createObjectURL(imageFile); // Create a URL for the uploaded image
    setProfile((prevProfile) => ({ ...prevProfile, bannerImage: imageUrl }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile, updateProfileImage }}>
      {children}
    </ProfileContext.Provider>
  );
};
