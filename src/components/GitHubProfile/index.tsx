import React from 'react';
import './styles.css';

import world from '../../assets/images/world.png';
import twitter from '../../assets/images/twitter.png';
import worldwide from '../../assets/images/worldwide.png';
import company from '../../assets/images/company.png';

export interface Profile {
  name: string;
  login: string;
  bio: string;
  company: string;
  twitter_username: string;
  blog: string;
  location: string;
  public_repos: number;
  followers: number;
  url: string;
  avatar_url: string;
  html_url: string;
}

interface ProfileProps {
  profile: Profile;
}

const GitHubProfile: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <div className="profile">

      <div className="profile-header">
        <img src={profile.avatar_url} alt="profile avatar" />
        <div className="profile-header-info">
          <h2>{profile.name ? profile.name : "No name"}</h2>
          <h3>@{profile.login}</h3>
          <p>{profile.bio ? profile.bio : "No description"}</p>
        </div>
      </div>

      <div className="profile-footer">
        <div className="profile-info-block">
          <div className="profile-info profile-info-background">
            <p>{profile.public_repos} repositories</p>
          </div>
          <div className="profile-info profile-info-background">
            <p>{profile.followers} followers</p>
          </div>
        </div>
        <div className="profile-info-block">
          <div className="profile-info">
            <img src={company} alt="blog"/>
            <p>{profile.company ? profile.company : "Not found"}</p>
          </div>
          <div className="profile-info">
            <img src={twitter} alt="blog"/>
            <p>{profile.twitter_username ? profile.twitter_username : "Not found"}</p>
          </div>
        </div>
        <div className="profile-info-block">
          <div className="profile-info">
            <img src={world} alt="blog"/>
            <p>{profile.location ? profile.location : "Not found"}</p>
          </div>
          <div className="profile-info">
            <img src={worldwide} alt="blog"/>
            <a href={profile.url}>
              <p>{profile.blog ? "Personal blog" : "Not found"}</p>
            </a>
          </div>
        </div>
      </div>

      <div className="profile-button">
        <a href={profile.html_url}>Go to GitHub</a>
      </div>

    </div>
  );
}

export default GitHubProfile;