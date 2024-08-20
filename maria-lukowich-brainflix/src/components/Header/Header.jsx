import "./Header.scss";
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import profile from '../../assets/Images/Mohan-muruge.jpg';
import {Link} from 'react-router-dom';

function Header() {
    return(
    <header>
        <section className="header-logo">
          <Link to="/" href="../../pages/Home/Home.jsx" className="header-logo__link">
            <img className="header-logo__img" src={logo} alt="BrainFlix play button"></img>
          </Link>
        </section>
        <section className="header-input">
          <div className="header-input__search-wrapper">
            <input className="header-input__search-box" name="search-input" placeholder="Search"></input>
          </div>
            <img className="header-input__profile-img--mobile" src={profile}></img>
        </section>
        <section className="upload">
          <Link to="/upload" className="upload__btn-link">
            <button className="upload__btn">UPLOAD</button>
          </Link>
        </section>
        <section className="header-img">
          <img className="header-img__profile-img" src={profile}></img>
        </section>
      </header>
    )
}

export default Header;