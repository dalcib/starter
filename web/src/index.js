import * as React from 'react'
import { AppRegistry } from 'react-native'
//import * as ReactDOM from 'react-dom'
import App from './../src/App'
import registerServiceWorker from './registerServiceWorker'

//ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)

AppRegistry.registerComponent('MyApp', () => App)
AppRegistry.runApplication('MyApp', {
  rootTag: document.getElementById('react-root'),
})

registerServiceWorker()
