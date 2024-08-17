
import React, { useState } from 'react';
import './HomePage.css';
const profileData = [
  {
    id: 1,
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'John Doe',
    language: 'English',
    education: 'B.Tech',
    specialization: 'Data Science',
  },
  {
    id: 2,
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg',
    name: 'Jane Smith',
    language: 'French',
    education: 'M.Tech',
    specialization: 'Machine Learning',
  },
  {
    id: 3,
    profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'Robert Brown',
    language: 'English',
    education: 'B.Tech',
    specialization: 'PHP Development',
  },
  {
    id: 4,
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Emily White',
    language: 'Spanish',
    education: 'M.Sc',
    specialization: 'Data Science',
  },
  {
    id: 5,
    profilePic: 'https://randomuser.me/api/portraits/men/3.jpg',
    name: 'Michael Johnson',
    language: 'German',
    education: 'PhD',
    specialization: 'Artificial Intelligence',
  },
  {
    id: 6,
    profilePic: 'https://randomuser.me/api/portraits/women/3.jpg',
    name: 'Linda Taylor',
    language: 'English',
    education: 'MBA',
    specialization: 'Business Analytics',
  },
  {
    id: 7,
    profilePic: 'https://randomuser.me/api/portraits/men/4.jpg',
    name: 'James Wilson',
    language: 'Italian',
    education: 'B.Sc',
    specialization: 'Cybersecurity',
  },
  {
    id: 8,
    profilePic: 'https://randomuser.me/api/portraits/women/4.jpg',
    name: 'Patricia Moore',
    language: 'English',
    education: 'M.Tech',
    specialization: 'Software Engineering',
  },
  {
    id: 9,
    profilePic: 'https://randomuser.me/api/portraits/men/5.jpg',
    name: 'David Anderson',
    language: 'English',
    education: 'BCA',
    specialization: 'Web Development',
  },
  {
    id: 10,
    profilePic: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: 'Sarah Thomas',
    language: 'Portuguese',
    education: 'MCA',
    specialization: 'Mobile App Development',
  },
  {
    id: 11,
    profilePic: 'https://randomuser.me/api/portraits/men/6.jpg',
    name: 'Richard Jackson',
    language: 'French',
    education: 'M.Sc',
    specialization: 'Cloud Computing',
  },
  {
    id: 12,
    profilePic: 'https://randomuser.me/api/portraits/women/6.jpg',
    name: 'Barbara Harris',
    language: 'Spanish',
    education: 'B.Tech',
    specialization: 'Data Engineering',
  },
  {
    id: 13,
    profilePic: 'https://randomuser.me/api/portraits/men/7.jpg',
    name: 'Charles Martin',
    language: 'English',
    education: 'M.Sc',
    specialization: 'Network Engineering',
  },
  {
    id: 14,
    profilePic: 'https://randomuser.me/api/portraits/women/7.jpg',
    name: 'Susan Clark',
    language: 'German',
    education: 'MBA',
    specialization: 'IT Management',
  },
  {
    id: 15,
    profilePic: 'https://randomuser.me/api/portraits/men/8.jpg',
    name: 'Joseph Lewis',
    language: 'Italian',
    education: 'B.Tech',
    specialization: 'Blockchain Development',
  },
  {
    id: 16,
    profilePic: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: 'Karen Walker',
    language: 'English',
    education: 'M.Sc',
    specialization: 'Artificial Intelligence',
  },
  {
    id: 17,
    profilePic: 'https://randomuser.me/api/portraits/men/9.jpg',
    name: 'Daniel Hall',
    language: 'Spanish',
    education: 'M.Tech',
    specialization: 'Data Analytics',
  },
  {
    id: 18,
    profilePic: 'https://randomuser.me/api/portraits/women/9.jpg',
    name: 'Nancy Young',
    language: 'English',
    education: 'B.Sc',
    specialization: 'UI/UX Design',
  },
  {
    id: 19,
    profilePic: 'https://randomuser.me/api/portraits/men/10.jpg',
    name: 'Matthew King',
    language: 'French',
    education: 'PhD',
    specialization: 'Natural Language Processing',
  },
  {
    id: 20,
    profilePic: 'https://randomuser.me/api/portraits/women/10.jpg',
    name: 'Donna Wright',
    language: 'Portuguese',
    education: 'MBA',
    specialization: 'Project Management',
  },
];

const uniqueValues = (array, key) => {
  return [...new Set(array.map(item => item[key]))];
};


const Homepage = () => {
  const [data, setData] = useState(profileData);
  const [searchLanguage, setSearchLanguage] = useState('');
  const [searchEducation, setSearchEducation] = useState('');
  const [searchSpecialization, setSearchSpecialization] = useState('');

  const handleSearch = () => {
    const filteredData = profileData.filter((profile) => {
      return (
        (searchLanguage === '' || profile.language.toLowerCase().includes(searchLanguage.toLowerCase())) &&
        (searchEducation === '' || profile.education.toLowerCase().includes(searchEducation.toLowerCase())) &&
        (searchSpecialization === '' || profile.specialization.toLowerCase().includes(searchSpecialization.toLowerCase()))
      );
    });
    setData(filteredData);
  };
  
  const languages = uniqueValues(profileData, 'language');
  const educations = uniqueValues(profileData, 'education');
  const specializations = uniqueValues(profileData, 'specialization');
  return (
    <div className="homepage">
      <div className="search-container">
        <select className="language-select"value={searchLanguage} onChange={(e) => setSearchLanguage(e.target.value)}>
          <option value="">Select Language</option>
          {languages.map((language, index) => (
            <option key={index} value={language}>{language}</option>
          ))}
        </select>

        <select className="Education-select"value={searchEducation} onChange={(e) => setSearchEducation(e.target.value)}>
          <option value="">Select Education</option>
          {educations.map((education, index) => (
            <option key={index} value={education}>{education}</option>
          ))}
        </select>

        <select className="Specialization-select"value={searchSpecialization} onChange={(e) => setSearchSpecialization(e.target.value)}>
          <option value="">Select Specialization</option>
          {specializations.map((specialization, index) => (
            <option key={index} value={specialization}>{specialization}</option>
          ))}
        </select>

        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="cards-container">
        {data.map((profile) => (
          <div key={profile.id} className="card">
            <img src={profile.profilePic} alt={profile.name} />
            <h2>{profile.name}</h2>
            <p>Language: {profile.language}</p>
            <p>Education: {profile.education}</p>
            <p>Specialization: {profile.specialization}</p>
          </div>
             ))}
             </div>
           </div>
  );
};

export default Homepage;



