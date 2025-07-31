import Organizingcommittee from "../../shared/components/Organizingcommittee/Organizingcommittee"
import HelmetComponent from "../HelmetComponent/HelmetComponent"

function Committeepage() {
  return (
    <div>
      <HelmetComponent title={'Organizing Committee - International Conference on Robotics, AI, and Intelligent Systems'} canonical={'https://icrais.com/organizing-committee'} />
      <Organizingcommittee />
    </div>
  )
}

export default Committeepage