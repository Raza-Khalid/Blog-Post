import './App.css'
import { Route, Switch } from 'react-router-dom'


// import MessageBoard from './components/MessageBoard'
import Navbar from './components/Navbar'
import ArticleCard from './components/ArticleCard'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Navbar} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/allarticles" component={ArticleCard} />
        </Switch>
      </main>
    </div>
  )
}

export default App
