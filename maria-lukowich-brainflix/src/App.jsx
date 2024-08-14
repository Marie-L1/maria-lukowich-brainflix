import './App.css'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header />
        {/* this section will be created by JavaScript */}
        <section className="video-player">
          <video></video>
          <h1>The Future of Artifical Intelligence</h1>
          <p>By</p>
          <p>Timestamp</p>
          <p>Views</p>
          <p>likes</p>
        </section>
        <section className="video-description">
          <p></p>
        </section>
        <section className="comments">
          <h4>3 Comments</h4>
          <form className="comments__new-comment">
            <label>JOIN THE CONVERSATION</label>
            <input></input>
            <textarea></textarea>
            <img></img>
            <button>COMMENT</button>
          </form>
        </section>

          <ul className="comments-list">
            {/* created in JavaScript */}
            <li className="comments-list__item">
              <img className="comments-list__profile-img"></img>
              <h3 className="comments-list__name"></h3>
              <p className="comments-list__content"></p>
              <h3 className="comment-list__date"></h3>
            </li>
          </ul>

        <ul className="next-videos">
          <li className="next-videos__item">
            <img className="next-videos__img"></img>
            <h3 className="next-videos__title"></h3>
            <h3 className="next-videos__creator"></h3>
          </li>
        </ul>
      
    <footer>

    </footer>

    </>
  )
}

export default App
