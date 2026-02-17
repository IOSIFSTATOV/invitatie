import React from 'react'
import styles from './NoiDoi.module.css'

import imgEl from '../../assets/images/img5.jpg'
import imgEa from '../../assets/images/img6.jpg'

const NoiDoi = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {/* Блок 1 */}
        <div className={styles.block}>
          <h2>El</h2>
          <h3>Trofim</h3>
          <p>
            El este energic, de încredere și aproape întotdeauna are dreptate
            (cel puțin după părerea lui). Iubește libertatea, animalele și
            visează la o casă mare cu vedere spre natură. Este un adevărat
            visător și are un simț al umorului excelent.
          </p>

          {/* Фото под блоком */}
          <img src={imgEl} alt="El" className={styles.blockImage} />
        </div>

        {/* Блок 2 */}
        <div className={styles.block}>
          <h2>Ea</h2>
          <h3>Victoria</h3>
          <p>
            Organizată, realistă și mereu cu un plan bine pus la punct.
            <br />
            Are liste și soluții pentru orice situație.
            <br />
            În realitate, datorită lui, nimic nu merge exact după plan.
          </p>

          {/* Фото под блоком */}
          <img src={imgEa} alt="Ea" className={styles.blockImage} />
        </div>
      </div>
    </div>
  )
}

export default NoiDoi
