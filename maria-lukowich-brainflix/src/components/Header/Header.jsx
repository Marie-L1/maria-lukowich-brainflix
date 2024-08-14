import "./Header.scss";

function Header() {
    return(
        <header>
            <section className="nav-logo">
              <img className="nav-logo__img" src="../../assets/Logo/BrainFlix-logo.svg" alt="BrainFlix play button"></img>
              <h2 className="nav-logo__title">BrainFlix</h2>
            </section>
            <section className="nav-input">
              <div className="nav-input__search-bar">
                <img className="nav-input__search-img" src=""></img>
                <input className="nav-input__search-box" name="search-input" place-holder="Search"></input>
              </div>
              <img className="nav-input__profile-img" src="../../assets/Images/Mohan-muruge.jpg"></img>
            </section>
            <section className="upload">
              <button className="upload__btn">UPLOAD</button>
            </section>
      </header>
    )
}

export default Header;