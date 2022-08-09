import '../style/login.scss';
import '../style/profile.scss';
import coverImage from '../assets/coverImage.png';
import avatar from '../assets/avatar.png';

function History() {
  return (
    <div className="container grid">
      <div className="header">
        <p className="logo-name">TBayEAT</p>
      </div>
      <div className="image-profile">
        <img className="cover-image" src={coverImage} alt="cover image" />
        <img className="avatar-image" src={avatar} alt="avatar" />
      </div>
      <div className="tab">
        <button className="tab-profile">Profile</button>
        <button className="tab-history active">Odder History</button>
      </div>
      <div className="content">
        <p className="title-personal">Order History</p>
      </div>
    </div>
  );
}

export default History;
