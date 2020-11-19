import React, { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import GitHubProfile, { Profile } from '../../components/GitHubProfile';

import api from '../../services/api';
import './styles.css';

import logo from '../../assets/images/github.png';
import brazilFlag from '../../assets/images/brazil-flag.png';
import usaFlag from '../../assets/images/usa-flag.png';

import { MdSend } from 'react-icons/md';

const Landing = () => {

  const [searched, setSearched] = useState(false);
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState<Profile>({
    name: '',  
    avatar_url: '',
    twitter_username: '',
    bio: '',
    company: '',
    login: '',
    blog: '',
    followers: 0,
    public_repos: 0,
    location: '',
    url: '',
    html_url: '',
  });

  async function handleSubmit(e: FormEvent) {

    e.preventDefault();

    const request = await api.get(`/${username}`);
    if (request.status === 404) {

      toast.error("User not found")

    }else {

      const profileFromRequest: Profile = request.data;
      setProfile(profileFromRequest);

      setSearched(true);

    }

  }

  

  return (
    <div className="container">
      <header id="header">
        <h1 className="logo">
          <img src={logo} alt="GitHubUserChecker" className="logo-image"/>
        </h1>
        <div className="flags">
          <img src={brazilFlag} alt="" className="flag"/>
          <img src={usaFlag} alt="" className="flag"/>
        </div>
      </header>
      <main id="content">
        <div className="profile-zone">
        {searched ? (
          <GitHubProfile profile={profile} />
        ) : searched}
        </div>
        <div className="search-zone">
          <form className={`${searched ? "searched" : null}`}>
            <input onChange={e => setUsername(e.target.value)} placeholder="WHO'S THE ONE NOW BRO?" type="text"/>
            <button onClick={handleSubmit} type="submit">
              <MdSend />
            </button>
          </form>
        </div>
      </main>
      <footer id="footer">
        &copy; 2020 João Guilherme da Silva Cansi. All rights reserved.
      </footer>
    </div>
  )

}

export default Landing;