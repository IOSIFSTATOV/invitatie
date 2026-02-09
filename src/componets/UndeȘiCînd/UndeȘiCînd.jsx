import styles from './UndeȘiCînd.module.css'

const locations = [
  {
    title: 'Cununia civilă',
    img: '/images/whenwhere/3.jpg',
    address: `Oficiul stării civile
Blvd. Al. Averescu, nr 17, Sector 1
București, România`,
    time: '9 Martie 2026, 12:00',
    lat: '44.466513',
    lng: '26.076611',
  },
  {
    title: 'Cununia religioasă',
    img: '/images/church.jpeg',
    address: `Mănăstirea Cașin
Bulevardul Mărăști 16, Sector 1
București, România`,
    time: '9 Martie 2026, 13:00',
    lat: '44.4676237',
    lng: '26.0749093',
  },
  {
    title: 'Petrecerea',
    img: '/images/glasses.jpeg',
    address: `TreeHouse Garden
DJ711D
Lungulețu, Dâmbovița`,
    time: '9 Martie 2026, 18:00',
    lat: '44.611788',
    lng: '25.664226',
  },
]

const UndeȘiCînd = () => {
  const openMap = (lat, lng) => {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank')
  }

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <span className={styles.meta}>Locații</span>
        <h2 className={styles.title}>Unde și când</h2>
      </div>

      <div className={styles.grid}>
        {locations.map((loc, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrap}>
              <img src={loc.img} alt={loc.title} />
            </div>

            <div className={styles.content}>
              <h5>{loc.title}</h5>

              <p className={styles.address}>📍 {loc.address}</p>

              <p className={styles.time}>
                ⏰ <span>{loc.time}</span>
              </p>

              <button
                className={styles.mapBtn}
                onClick={() => openMap(loc.lat, loc.lng)}
              >
                Vezi hartă →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UndeȘiCînd
