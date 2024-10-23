import styles from "./home.module.css";
import Link from"next/link"
function Homepage() {
return(

<div> 
    <h1 className={styles.box}>This is Home page</h1>
    <nav >
        <ul>
            <li className={styles.about}><Link href="/about"> About</Link> </li>
            <li className={styles.contact}><Link href =  "/contact">Contact</Link></li>
            <li className={styles.services}><Link href ="/services">Services</Link></li>
            
        </ul>
    </nav>
</div>

)

}
export default Homepage;