import React from "react"
import Layout from "../components/Layout"
import Media from "../components/Media"

const Home  = () => {
  return (
    <Layout>
      <h2 className="text-4xl font-extrabold dark:text-white mb-10">Home</h2>
      <Media></Media>
    </Layout>
  )
}

export default Home
