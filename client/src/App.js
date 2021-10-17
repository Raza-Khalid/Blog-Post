import './App.css'
import { Route, Switch } from 'react-router-dom'
import React, { useState } from 'react'

// import MessageBoard from './components/MessageBoard'
import Navbar from './components/Navbar'
import ArticleCard from './components/ArticleCard'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }
  return (
    <div className="App">
      <Navbar user={user} handleLogOut={handleLogOut} />
      <main>
        <Switch>
          <Route exact path="/" component={Home} user={user} />
          <Route exact path="/" component={Navbar} user={user} />
          <Route exact path="/about" component={About} user={user} />
          <Route exact path="/signup" component={SignUp} user={user} />
          <Route exact path="/contact" component={Contact} user={user} />
          <Route
            exact
            path="/signin"
            component={(props) => <SignIn {...props} setUser={setUser} />}
          />
          <Route
            exact
            path="/register"
            component={Register}
            user={user}
            setUser={setUser}
          />
          <Route
            exact
            path="/allarticles"
            component={ArticleCard}
            user={user}
          />
        </Switch>
      </main>
    </div>
  )
}

export default App
