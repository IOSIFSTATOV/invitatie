import styles from './Confirmare.module.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Confirmare = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    attend: 'Da',
    adults: '',
    kids: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_CONFIRM,
        { ...form },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
      alert('Confirmarea a fost trimisă ❤️')
      setForm({
        name: '',
        phone: '',
        attend: 'Da',
        adults: '',
        kids: '',
        message: '',
      })
    } catch {
      alert('Eroare la trimitere ❌')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>Vă rugăm să confirmați prezența</div>

        <form className={styles.form} onSubmit={sendEmail}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>* Nume Prenume:</label>
              <input
                type="text"
                name="name"
                placeholder="ex. Rotaru Mihail și Elena"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label>* Număr de contact:</label>
              <input
                type="tel"
                name="phone"
                placeholder="+373..."
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <hr />

          <label className={styles.mainLabel}>* Prezență:</label>
          <div className={styles.presenceRow}>
            {/* Карточка Да */}
            <div
              className={styles.cardYes}
              style={{
                borderColor: form.attend === 'Da' ? '#4caf50' : '#eee',
              }}
            >
              <div className={styles.radioLine}>
                <input
                  type="radio"
                  name="attend"
                  value="Da"
                  checked={form.attend === 'Da'}
                  onChange={handleChange}
                />
                <span className={styles.yesText}>Da, vom fi prezenți</span>
              </div>

              <div className={styles.numbers}>
                <input
                  type="number"
                  name="adults"
                  placeholder="Adulți"
                  value={form.adults}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="kids"
                  placeholder="Copii"
                  value={form.kids}
                  onChange={handleChange}
                />
              </div>

              {/* Mesaj показываем, если выбрано Da */}
              {form.attend === 'Da' && (
                <div className={styles.message}>
                  <textarea
                    name="message"
                    placeholder="Mesaj..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>

            {/* Карточка Nu */}
            <div
              className={styles.cardNo}
              style={{
                borderColor: form.attend === 'Nu' ? '#f44336' : '#eee',
              }}
            >
              <div className={styles.radioLine}>
                <input
                  type="radio"
                  name="attend"
                  value="Nu"
                  checked={form.attend === 'Nu'}
                  onChange={handleChange}
                />
                <span className={styles.noText}>Nu vom fi prezenți</span>
              </div>

              {/* Mesaj показываем, если выбрано Nu */}
              {form.attend === 'Nu' && (
                <div className={styles.message}>
                  <textarea
                    name="message"
                    placeholder="Mesaj..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Confirmați Prezența
          </button>
        </form>
      </div>
    </div>
  )
}

export default Confirmare
