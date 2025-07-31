import React from 'react'
import Contactus from '../../shared/components/Contactus/Contactus'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Contactpage() {
  return (
    <div>
      <HelmetComponent title={'Contact us - International Conference on Robotics, AI, and Intelligent Systems'} canonical={'https://icrais.com/contactus'} />
      <Contactus />
    </div>
  )
}
