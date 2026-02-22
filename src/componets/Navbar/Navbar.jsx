import { useState } from 'react'
import { Link } from 'react-scroll'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.container}>
      <div className={styles.navigation}>
        {/* burger */}
        <div
          className={`${styles.burger} ${open ? styles.active : ''}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* menu */}
        <nav className={`${styles.menu} ${open ? styles.open : ''}`}>
          <ul>
            <li>
              <Link
                to="Acasă"
                smooth
                duration={700}
                onClick={() => setOpen(false)}
              >
                Acasă
              </Link>
            </li>
            <li>
              <Link
                to="NașiiȘiParinții"
                smooth
                duration={700}
                onClick={() => setOpen(false)}
              >
                Nașii Și Parinții
              </Link>
            </li>
            <li>
              <Link
                to="NoiDoi"
                smooth
                duration={700}
                onClick={() => setOpen(false)}
              >
                Noi doi
              </Link>
            </li>
            <li>
              <Link
                to="UndeȘiCînd"
                smooth
                duration={700}
                onClick={() => setOpen(false)}
              >
                Unde și când
              </Link>
            </li>
            <li>
              <Link
                to="Confirmare"
                smooth
                duration={700}
                onClick={() => setOpen(false)}
              >
                Confirmare
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
