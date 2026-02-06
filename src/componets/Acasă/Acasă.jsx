import styles from './Acasă.module.css'
import LeftSide from './LeftSide.jsx'
import RightSide from './RightSide.jsx'

const Acasă = () => {
  return (
    <div className={styles.container}>
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default Acasă
