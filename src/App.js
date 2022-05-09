import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
    <header className="header">
      <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324" />
    </header>
    <nav className="nav">
      <div>
        <a href="#">Profile</a>
      </div>
      <div>
        <a href="#">Messages</a>
      </div>
      <div>
        <a href="#">News</a>
      </div>
      <div>
        <a href="#">Music</a>
      </div>
      <div>
        <a href="#">Settings</a>
      </div>
    </nav>
    <div className="content">
      <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
      </div>
      <div>
      ava + desc
        {/* <img src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg" /> */}
      </div>
      <div>
        My posts

        <div>
          new post
        </div>
        <div>
          post 1
        </div>
        <div>
          post 2
        </div>
      </div>
    </div>
  </div>
  )
}

export default App;