import { Link } from 'react-scroll'

import styles from './NavbarMenu.module.css'

const NavbarMenu = ({ open, setOpen }) => {
  const handleMenuItemClick = (section) => {
    window.history.pushState(null, '', `#${section}`)
  }

  return (
    <div className={styles.container}>
      <ul className={`${styles.menu} ${open ? styles.open : ''}`}>
        <li>
          <Link
            to="Acasă"
            smooth
            duration={700}
            onClick={() => {
              handleMenuItemClick('Acasă')
              setOpen(false)
            }}
          >
            Acasă
          </Link>
        </li>
        <li>
          <Link
            to="NașiiȘiParinții"
            smooth
            duration={1000}
            onClick={() => {
              handleMenuItemClick('NașiiȘiParinții')
              setOpen(false)
            }}
          >
            Nașii Și Parinții
          </Link>
        </li>
        <li>
          <Link
            to="NoiDoi"
            smooth
            duration={1000}
            onClick={() => {
              handleMenuItemClick('NoiDoi')
              setOpen(false)
            }}
          >
            Noi Doi
          </Link>
        </li>

        <li>
          <Link
            to="UndeȘiCînd"
            smooth
            duration={1000}
            onClick={() => {
              handleMenuItemClick('UndeȘiCînd')
              setOpen(false)
            }}
          >
            Unde Și Când
          </Link>
        </li>
        <li>
          <Link
            to="Confirmare"
            smooth
            duration={1000}
            onClick={() => {
              handleMenuItemClick('Confirmare')
              setOpen(false)
            }}
          >
            Confirmare
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavbarMenu
