import './App.css'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header />
        {/* this section will be created by JavaScript */}
        <section class="video-player">
          <video></video>
          <h1>The Future of Artifical Intelligence</h1>
          <p>By</p>
          <p>Timestamp</p>
          <p>Views</p>
          <p>likes</p>
        </section>
        <section class="video-description">
          <p></p>
        </section>
        <section class="comments">
          <h4>3 Comments</h4>
          <form class="comments__new-comment">
            <label>JOIN THE CONVERSATION</label>
            <input></input>
            <textarea></textarea>
            <img></img>
            <button>COMMENT</button>
          </form>
        </section>

          <ul class="comments-list">
            {/* created in JavaScript */}
            <li class="comments-list__item">
              <img class="comments-list__profile-img"></img>
              <h3 class="comments-list__name"></h3>
              <p class="comments-list__content"></p>
              <h3 class="comment-list__date"></h3>
            </li>
          </ul>

        <ul class="next-videos">
          <li class="next-videos__item">
            <img class="next-videos__img"></img>
            <h3 class="next-videos__title"></h3>
            <h3 class="next-videos__creator"></h3>
          </li>
        </ul>
      
    <footer>

    </footer>

    </>
  )
}

export default App
