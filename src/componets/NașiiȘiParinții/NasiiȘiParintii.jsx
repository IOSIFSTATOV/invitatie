import styles from './NașiiȘiParinții.module.css'

const NașiiȘiParinții = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Cu drag, alături de noi</div>
      <div className={styles.quote}>
        „Nimic nu ar fi la fel fără oamenii care ne-au ghidat, susținut și
        iubit.”
      </div>

      <div className={styles.columnsWrapper}>
        {/* Nașii сверху */}
        <div className={styles.row}>
          <div className={styles.column}>
            <h3>NAȘII NOȘTRI</h3>
            <p>Andreea & Mihai Georgescu</p>
            <p>Elena & Vasile Ionescu</p>
            <p>Maria & Ion Popescu</p>
          </div>
        </div>

        {/* Părinții снизу */}
        <div className={styles.row}>
          <div className={styles.column}>
            <h3>PĂRINȚII MIRESEI</h3>
            <p>Mihaela și Radu</p>
            <p>Dana și Florin</p>
          </div>
          <div className={styles.column}>
            <h3>PĂRINȚII MIRELUI</h3>
            <p>Elena & Vasile Ionescu</p>
            <p>Maria & Ion Popescu</p>
          </div>
        </div>
      </div>

      <div className={styles.footerQuote}>
        „Le suntem recunoscători pentru sprijinul, înțelepciunea și dragostea
        lor necondiționată.”
      </div>
    </div>
  )
}

export default NașiiȘiParinții
