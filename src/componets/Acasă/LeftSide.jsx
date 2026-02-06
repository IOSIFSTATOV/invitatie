import styles from './LeftSide.module.css'
const LeftSide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contextWrapper}>
        <h5>NE CĂSĂTORIM!</h5>
        <h1>Trofim</h1>
        <div className={styles.andSymbol}>
          <hr className={styles.lineLeft} />
          <span>&</span>
          <hr className={styles.lineRight} />
        </div>
        <h1>Victoria</h1>
        <h4>22.09.2024</h4>
      </div>
    </div>
  )
}

export default LeftSide
