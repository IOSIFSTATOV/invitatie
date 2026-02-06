import styles from './MainContent.module.css'
import Acasă from '../Acasă/Acasă.jsx'
import NașiiȘiParinții from '../NașiiȘiParinții/NasiiȘiParintii.jsx'
import NoiDoi from '../NoiDoi/NoiDoi.jsx'
import Confirmare from '../Confirmare/Confirmare.jsx'
const MainContent = () => {
  return (
    <div className={styles.container}>
      <div id="Acasă">
        <Acasă />
      </div>
      <div id="NașiiȘiParinții">
        <NașiiȘiParinții />
      </div>
      <div id="NoiDoi">
        <NoiDoi />
      </div>
      <div id="Confirmare">
        <Confirmare />
      </div>
    </div>
  )
}

export default MainContent
