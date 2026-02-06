import styles from './Navbar.module.css'
import NavbarMenu from './NavbarMenu'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <div className={styles.nav}>
          <NavbarMenu />
        </div>
      </div>
    </div>
  )
}
export default Navbar
