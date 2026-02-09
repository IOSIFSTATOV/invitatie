import undeImg from '../../assets/images/img6.jpg'
import styles from './UndeȘiCînd.module.css'

const UndeȘiCînd = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <span className={styles.meta}>Locații</span>
        <h2 className={styles.title}>Unde și când</h2>
      </div>

      <div className={styles.grid}>
        {/* Google Maps вместо Cununia civilă и Cununia religioasă */}
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.1234567890!2d25.664226!3d44.611788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z44TCsDI3JzUyLjIiTiAyNcKwMzknMjYuMiJF!5e0!3m2!1sen!2sro!4v1700000000000!5m2!1sen!2sro"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '14px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
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
              📍 TreeHouse Garden
              <br />
              DJ711D
              <br />
              Lungulețu, Dâmbovița
            </p>
            <p className={styles.time}>
              ⏰ <span>9 Martie 2026, 18:00</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UndeȘiCînd
