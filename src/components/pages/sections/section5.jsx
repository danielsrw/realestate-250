import styles from "./section5.module.scss";
import { building4 } from "../../../assets";
import { building5 } from "../../../assets";
import { ArrowButton } from "../../buttons/buttons";

const Section5 = () => {
	return (
		<section className={styles.section_5}>
	      	<div className={styles.action}>
		        <h1>Your Best Partner To find New House</h1>
		        <ArrowButton text="Get Started" path="search" />
	      	</div>
	      	<div className={styles.image_container_1}>
	        	<img src={ building4 } alt="building" />
	      	</div>
	      	<div className={styles.image_container_2}>
	        	<img src={ building5 } alt="building" />
	      	</div>
	    </section>
	)
}

export default Section5