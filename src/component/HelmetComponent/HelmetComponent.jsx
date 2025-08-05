import React from 'react'
import { Helmet } from 'react-helmet'

function HelmetComponent({title,canonical}) {
  return (
    <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="ICRAIS, International Conference on Robotics, AI, and Intelligent Systems  ,Robotics, Artificial Intelligence, Intelligent Systems, AI Conference, Robotics Conference, Machine Learning, Autonomous Systems, Smart Robots, Human-Robot Interaction, AI Applications, Deep Learning, Intelligent Automation, Swarm Robotics, AI in Industry, Cognitive Computing, International Conference 2025, Robotics and AI Technologies, Robotics Research, Intelligent Machines, Future of AI" />
            <meta name="description" content="The International Conference on Robotics, AI, and Intelligent Systems 2025 brings together researchers, innovators, and industry leaders to explore breakthroughs in robotics, artificial intelligence, and autonomous intelligent systems." />
            <meta name="author" content="ICRAIS Editorial Team" />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Robotics, AI, and Intelligent Systems" />
            <meta property="og:description" content="The International Conference on Robotics, AI, and Intelligent Systems 2025 brings together researchers, innovators, and industry leaders to explore breakthroughs in robotics, artificial intelligence, and autonomous intelligent systems." />
            <meta property="og:url" content="https://icrais.com/" />
            <meta property="og:image" content="https://icrais.com/assets/images/ICRAIS.png" />

            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://icrais.com/assets/images/Fav.png" />

        </Helmet>
  )
}

export default HelmetComponent