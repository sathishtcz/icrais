import React from 'react'
import PaperSub from '../../shared/components/PaperSub/PaperSub'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Papersubpage() {
  return (
    <div>
      <HelmetComponent title={'Paper Submission - International Conference on Robotics, AI, and Intelligent Systems'} canonical={'https://icrais.com/paper-submission'} />
      <PaperSub />
    </div>
  )
}
