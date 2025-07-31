import React from 'react'
import Organizingcommittee from '../../shared/components/Organizingcommittee/Organizingcommittee'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Organizingpage() {
  return (
    <div>
      <HelmetComponent title={'Organizing Committee - International Conference on Robotics, AI, and Intelligent Systems'} canonical={'https://icrais.com/organizing-committee'} />
      <Organizingcommittee />
    </div>
  )
}
