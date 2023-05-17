import React from "react"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src="../images/logo.png" className="max-w-sm rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold">
              Welcome to <span className="text-primary">ContentCove</span>!
            </h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
