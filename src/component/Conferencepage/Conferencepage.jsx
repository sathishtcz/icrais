import React from 'react'
import ConferenceTracks from '../../shared/components/ConferenceTracks/ConferenceTracks'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Conferencepage() {
  return (
    <div>
      <HelmetComponent title={'Conference Tracks - International Conference on Robotics, AI, and Intelligent Systems'} canonical={'https://icrais.com/conference-tracks'} />
      <ConferenceTracks />
    </div>
  )
}
