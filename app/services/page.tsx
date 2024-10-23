import Link from "next/link"
import styles from "../services/services.module.css"
  function ServicePage() {
    return(
    
    <div> 
        <h1 className= {styles.services} >Service page</h1>
        <p className={styles.hi}>We offer various services</p>
        <ul >
            <li className={styles.myservice}><Link href="/services/myservices"> Myservices</Link></li>
        </ul>


    </div>
    
    )
    
    }
    export default ServicePage;