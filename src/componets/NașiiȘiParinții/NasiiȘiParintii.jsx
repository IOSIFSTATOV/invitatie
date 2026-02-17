import styles from './NașiiȘiParinții.module.css'

const NașiiȘiParinții = () => {
  return (
    <section className={styles.sectionBg}>
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
              <p>Stanislav & Cristina Iurco</p>
            </div>
          </div>

          {/* Părinții снизу */}
          <div className={styles.row}>
            <div className={styles.column}>
              <h3>PĂRINȚII MIRELUI</h3>
              <p>Ivan & Ecaterina Verebcean </p>
            </div>
            <div className={styles.column}>
              <h3>PĂRINȚII MIRESEI</h3>
              <p>Boris & Maria Tabunșcic </p>
            </div>
          </div>
        </div>

        <div className={styles.footerQuote}>
          „Le suntem recunoscători pentru sprijinul, înțelepciunea și dragostea
          lor necondiționată.”
        </div>
      </div>
    </section>
  )
}

export default NașiiȘiParinții
