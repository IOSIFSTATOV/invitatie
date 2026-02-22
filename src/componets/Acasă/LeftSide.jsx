import rightImg from '../../assets/images/img1.jpg'

import styles from './LeftSide.module.css'

const LeftSide = () => {
  return (
    <div className={styles.container}>
      <img src={rightImg} alt="Imagine dreapta" />
    </div>
  )
}

export default LeftSide
