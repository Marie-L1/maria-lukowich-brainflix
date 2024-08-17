import "./Header.scss";
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import profile from '../../assets/Images/Mohan-muruge.jpg';

function Header() {
    return(
    <header>
        <section className="header-logo">
          <img className="header-logo__img" src={logo} alt="BrainFlix play button"></img>
        </section>
        <section className="header-input">
          <div className="header-input__search-wrapper">
            <input className="header-input__search-box" name="search-input" placeholder="Search"></input>
          </div>
            <img className="header-input__profile-img--mobile" src={profile}></img>
        </section>
        <section className="upload">
          <button className="upload__btn">UPLOAD</button>
        </section>
        <section className="header-img">
          <img className="header-img__profile-img" src={profile}></img>
        </section>
      </header>
    )
}

export default Header;