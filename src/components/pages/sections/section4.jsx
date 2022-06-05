import { building3 } from "../../../assets";
import styles from "./section4.module.scss";

const Section4 = () => {
	return (
		<section className={styles.section_4}>
			<div className={styles.section_4_title}>
		        <h1>Help People To Getting Their Dream House For More Than 17 Years</h1>
		    </div>

		    <div className={styles.section_4_content}>
		        <div className={styles.image_container}>
		          	<img src={ building3 } alt="building" />
		        </div>
		        <div className={styles.info}>
		          	<p>
		            	Search and find your dream house at affordable prices, but with the best quality. Only available in Real!
		          	</p>

		          	<div className={styles.rows}>
			            <div className={styles.row_1}>
			              	<div className={styles.fact}>
				                <h2>10.234</h2>
				                <h3>Completed Houses</h3>
			              	</div>
			              	<div className={styles.fact}>
				                <h2>11.234</h2>
				                <h3>Rented Houses </h3>
			              	</div>
			            </div>

			            <div className={styles.row_1}>
			              	<div className={styles.fact}>
				                <h2>2.157</h2>
				                <h3>Sold Houses</h3>
			              	</div>

			              	<div className={styles.fact}>
				                <h2>12.157</h2>
				                <h3>Happy Client</h3>
			              	</div>
			            </div>
		          	</div>
		        </div>
		    </div>
		</section>
	)
}

export default Section4