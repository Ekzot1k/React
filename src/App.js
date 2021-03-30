import './App.css';

function App() {
  return (
    <div className="app-Wrapper">
      <header className="header">
        <img src='https://w7.pngwing.com/pngs/747/118/png-transparent-lion-logo-roar-lions-lion-y-white-mammal-face.png'></img>
      </header>
      <nav className='nav'>
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Message</a>
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
      <div className='content'>
        <div>
          <img src='https://fsd.multiurok.ru/html/2017/06/25/s_594fba42bf816/653571_1.jpeg'></img>
        </div>
        <div>
          Avatar + Description
        </div>
        <div>
          My post
          <div>
            New post
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
  );
}

export default App;
