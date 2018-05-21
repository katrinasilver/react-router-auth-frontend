import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Labels from './Labels'
import BlogPostsFrontPage from './BlogPostsFrontPage'
import BlogPostArchive from './BlogPostArchive'
import BlogPostsByUser from './BlogPostsByUser'
import BlogPostsByLabel from './BlogPostsByLabel'
import SideBar from './SideBar'
import Footer from './Footer'

import '../styles/home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header />
          <Labels />
        </div>

        <main role="main" className="container">
          <div className="row">
            <Switch>
              <Route exact path={this.props.match.url} component={BlogPostsFrontPage} />
              <Route path={`${this.props.match.url}archive/:month/:year`} component={ BlogPostArchive } />
              <Route path={`${this.props.match.url}users/:username`} component={ BlogPostsByUser } />
              <Route path={`${this.props.match.url}labels/:label`} component={ BlogPostsByLabel } />
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
