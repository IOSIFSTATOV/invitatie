import React from 'react'
import styles from './NoiDoi.module.css'
import bgImage from '../../assets/images/img5.jpg' // картинка на всю ширину экрана

const NoiDoi = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {/* Блок 1 */}
        <div className={styles.block}>
          <h2>El</h2>
          <h3>Trofim</h3>
          <p>
            Serioasă dar cu capul în nori, devreme acasă dar party animal.
            <br />
            Și ghici ce.. mă mărit!
            <br />
            Aș fi foarte bucuroasă dacă vom putea marca acest eveniment
            împreună!
          </p>
        </div>

        {/* Блок 2 */}
        <div className={styles.block}>
          <h2>Ea</h2>
          <h3>Victoria</h3>
          <p>
            Serioasă dar cu capul în nori, devreme acasă dar party animal.
            <br />
            Și ghici ce.. mă mărit!
            <br />
            Aș fi foarte bucuroasă dacă vom putea marca acest eveniment
            împreună!
          </p>
        </div>
      </div>

      {/* Картинка под блоками */}
      <div className={styles.bottomImage}>
        <img src={bgImage} alt="Background" />
      </div>
    </div>
  )
}

export default NoiDoi
