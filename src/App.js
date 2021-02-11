import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './components/Main'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Post from './components/Post'
import Projects from './components/Projects'
import Nav from './components/Nav'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/about' component={About} />
        <Route path='/post/:slug' component={SinglePost} />
        <Route path='/post' component={Post} />
        <Route path='/projects' component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
