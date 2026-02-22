import undeImg from '../../assets/images/img7.jpg'
import styles from './UndeȘiCînd.module.css'

const UndeȘiCînd = () => {
  return (
    <section className={styles.sectionBg}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Unde și când</h2>
        </div>

        <div className={styles.grid}>
          {/* Google Maps вместо Cununia civilă и Cununia religioasă */}
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps?q=Kevi's+Events+Restaurant,+Calea+Orheiului+111/7,+Chișinău&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '14px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kevis Restaurant"
            />
          </div>

          {/* Petrecerea */}
          <div className={styles.card}>
            <div className={styles.imageWrap}>
              <img src={undeImg} alt="Imagine unde" />
            </div>
            <div className={styles.content}>
              <h5>Petrecerea</h5>
              <p className={styles.address}>
                📍 Kevi's Events Restaurant
                <br />
                Poșta Veche, str.Calea Orheiului, Nr. 111/7
              </p>
              <p className={styles.time}>
                ⏰ <span>26 May 2026, 17:00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UndeȘiCînd
