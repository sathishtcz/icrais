import React from 'react'
import Keydates from '../../shared/components/Keydates/Keydates'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Keydatepage() {
  return (
    <div>
      <HelmetComponent title={'Key Dates - International Conference on Robotics, AI, and Intelligent Systems'} canonical={'https://icrais.com/key-dates'} />
      <Keydates />
    </div>
  )
}
