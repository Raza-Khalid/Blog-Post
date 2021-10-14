import './App.css'
import Home from './pages/Home'
// import About from './pages/About'
// import Navbar from './components/Navbar'
import MessageBoard from './components/MessageBoard'

function App() {
  return (
    <div className="App">
      <h1>blog post</h1>
      <Home />
      {/* <About /> */}
      {/* <Navbar /> */}
      <MessageBoard />
    </div>
  )
}

export default App
