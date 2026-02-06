import styles from './Confirmare.module.css'
import { useState } from 'react'

const TOKEN = 'СЮДА_ВСТАВЬ_TOKEN'
const CHAT_ID = 'СЮДА_ВСТАВЬ_CHAT_ID'

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

  const sendToTelegram = async (e) => {
    e.preventDefault()

    const text = `
💍 Confirmare nouă!

👤 Nume: ${form.name}
📞 Telefon: ${form.phone}

📍 Prezență: ${form.attend}
👨 Adulți: ${form.adults}
👶 Copii: ${form.kids}

💬 Mesaj: ${form.message}
`

    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`

    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
    })

    alert('Confirmarea a fost trimisă ❤️')
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          Vă rugăm să confirmați prezența <br /> până la data de 10 august 2024
        </div>

        <form className={styles.form} onSubmit={sendToTelegram}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>* Nume Prenume:</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="ex. Rotaru Mihail și Elena"
              />
            </div>

            <div className={styles.field}>
              <label>* Număr de contact:</label>
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                placeholder="ex. +373 111 22 333"
              />
            </div>
          </div>

          <hr />

          <div className={styles.presenceBlock}>
            <label className={styles.mainLabel}>* Selectați Prezența:</label>

            <div className={styles.presenceRow}>
              <div className={styles.cardYes}>
                <div className={styles.radioLine}>
                  <input
                    type="radio"
                    name="attend"
                    value="Da"
                    defaultChecked
                    onChange={handleChange}
                  />
                  <span className={styles.yesText}>Da, vom fi prezenți</span>
                </div>

                <div className={styles.numbers}>
                  <div>
                    <label>Adulți prezenți:</label>
                    <input
                      type="number"
                      name="adults"
                      onChange={handleChange}
                      min="0"
                      max="10"
                    />
                  </div>

                  <div>
                    <label>Copii prezenți:</label>
                    <input
                      type="number"
                      name="kids"
                      onChange={handleChange}
                      min="0"
                      max="10"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.cardNo}>
                <div className={styles.radioLine}>
                  <input
                    type="radio"
                    name="attend"
                    value="Nu"
                    onChange={handleChange}
                  />
                  <span className={styles.noText}>Nu vom fi prezenți</span>
                </div>

                <div className={styles.message}>
                  <label>Lăsați un mesaj sau detalii:</label>
                  <textarea
                    name="message"
                    onChange={handleChange}
                    placeholder="Mesaj..."
                  />
                </div>
              </div>
            </div>
          </div>

          <hr />

          <button type="submit" className={styles.submitBtn}>
            Confirmați Prezența
          </button>
        </form>
      </div>
    </div>
  )
}

export default Confirmare
