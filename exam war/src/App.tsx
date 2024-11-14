import './App.css'

import Layout from './Layout/Main/Layout'
import AppRouter from './Router/AppRouter'

function App() {

  return (
    <>
    <Layout children={<AppRouter/>}/>
      
    </>
  )
}

export default App
