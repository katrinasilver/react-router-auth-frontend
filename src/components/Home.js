import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'

import Labels from './Labels'
import BlogPostsFrontPage from './BlogPostsFrontPage'
import BlogPostArchive from './BlogPostArchive'
import BlogPostsByUser from './BlogPostsByUser'
import BlogPostsByLabel from './BlogPostsByLabel'
import SideBar from './SideBar'
import Footer from './Footer'

import '../styles/home.css'

class Home extends Component{
  render(){
    const { user, match } = this.props
    return (
      <div>
    <div className="container">
      <Labels />
    </div>

    <main role="main" className="container">
      <div className="row">
        <Switch>
          <Route exact path={match.url} component={(props) => <BlogPostsFrontPage {...props} user={user} />} />
          <Route path={`${match.url}archive/:month/:year`} component={(props) => <BlogPostArchive {...props} user={user} /> } /> 
          <Route path={`${match.url}users/:username`} component={ (props) => <BlogPostsByUser {...props} user={user} /> } /> 
          <Route path={`${match.url}labels/:label`} component={ (props) => <BlogPostsByLabel {...props} user={user} /> } />
        </Switch>

        <SideBar />
      </div>
    </main>

    <Footer />
  </div>
    )

  }
}
  

export default Home
