import React from "react"
import Layout from "../components/Layout"
import Media from "../components/Media"

const Home  = () => {
  return (
    <Layout>
      <h2 className="text-4xl font-extrabold dark:text-white mb-10">Home</h2>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="w-400 flex-none">
          <Media />
        </div>
        <div className="w-400 flex-none">
          <Media />
        </div>
        <div className="w-400 flex-none">
          <Media />
        </div>
        <div className="w-400 flex-none">
          <Media />
        </div>
        <div className="w-400 flex-none">
          <Media />
        </div>
        <div className="w-400 flex-none">
          <Media />
        </div>
        <div className="w-400 flex-none">
          <Media />
        </div>
        <div className="w-400 flex-none">
          <Media />
        </div>
        <div className="w-400 flex-none">
          <Media />
        </div>
      </div>
    </Layout>
  )
}

export default Home
