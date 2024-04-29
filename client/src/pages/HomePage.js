import React, {useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../Context/Auth.js'

const HomePage = () => {

  const [auth, setAuth] = useAuth();
  return (
    <Layout title = "Home page">
      <h1>Home Page</h1>
      <pre>
        {JSON.stringify(auth, null, 3)}
      </pre>
    </Layout>
  )
}

export default HomePage
