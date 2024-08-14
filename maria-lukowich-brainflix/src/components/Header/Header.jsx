import "./Header.scss";
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import profile from '../../assets/Images/Mohan-muruge.jpg';

function Header() {
    return(
        <header>
            <section className="nav-logo">
              <img className="nav-logo__img" src={logo} alt="BrainFlix play button"></img>
            </section>
            <section className="nav-input">
              <div className="nav-input__search-bar">
                <img className="nav-input__search-img" src=""></img>
                <input className="nav-input__search-box" name="search-input" placeholder="Search"></input>
              </div>
              <img className="nav-input__profile-img" src={profile}></img>
            </section>
            <section className="upload">
              <button className="upload__btn">UPLOAD</button>
            </section>
      </header>
    )
}

export default Header;