import React from 'react'
import Scope from '../../shared/components/Scope/Scope'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Scopepage() {
  return (
    <div>
      <HelmetComponent title={'Scope of Conference - International Conference on Robotics, AI, and Intelligent Systems'} canonical={'https://icrais.com/scope'} />
      <Scope />
    </div>
  )
}
