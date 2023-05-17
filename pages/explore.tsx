import React from "react"
import Layout from "../components/Layout"

const Explore = () => {
  return (
    <Layout>
      <h2 className="text-4xl font-extrabold dark:text-white mb-10">Explore</h2>
      <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-l" />
    </Layout>
  )
}

export default Explore
