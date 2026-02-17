import { Link } from 'react-scroll'

import styles from './NavbarMenu.module.css'

const NavbarMenu = () => {
  const handleMenuItemClick = (section) => {
    window.history.pushState(null, '', `#${section}`)
  }

  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        <li>
          <Link
            to="Acasă"
            smooth
            duration={700}
            onClick={() => handleMenuItemClick('Acasă')}
          >
            Acasă
          </Link>
        </li>
        <li>
          <Link
            to="NașiiȘiParinții"
            smooth
            duration={1000}
            onClick={() => handleMenuItemClick('NașiiȘiParinții')}
          >
            Nașii Și Parinții
          </Link>
        </li>
        <li>
          <Link
            to="NoiDoi"
            smooth
            duration={1000}
            onClick={() => handleMenuItemClick('NoiDoi')}
          >
            Noi Doi
          </Link>
        </li>

        <li>
          <Link
            to="UndeȘiCînd"
            smooth
            duration={1000}
            onClick={() => handleMenuItemClick('UndeȘiCînd')}
          >
            Unde Și Când
          </Link>
        </li>
        <li>
          <Link
            to="Confirmare"
            smooth
            duration={1000}
            onClick={() => handleMenuItemClick('Confirmare')}
          >
            Confirmare
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavbarMenu
