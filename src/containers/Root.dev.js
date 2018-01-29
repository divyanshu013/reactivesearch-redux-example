import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import { Route } from 'react-router-dom'
import App from './App'
import UserPage from './UserPage'
import RepoPage from './RepoPage'
import { ReactiveBase } from '@appbaseio/reactivesearch'

const Root = ({ store }) => (
  <Provider store={store}>
    <ReactiveBase
      app="car-store"
      credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c"
    >
      <div>
        <Route path="/" component={App} />
        <Route path="/:login/:name"
              component={RepoPage} />
        <Route path="/:login"
              component={UserPage} />
        <DevTools />
      </div>
    </ReactiveBase>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
