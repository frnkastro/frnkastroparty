import './App.css';
import profilepic from './profilepic.jpg'

const App = () => {

  return (
    <main>
      <a href='https://frnkastro.bandcamp.com/'>
        <img src={profilepic} className="profile-pic" alt="frnk astro in space"/>
      </a>
    </main>
  )
}

export default App;
