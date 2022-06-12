import styles from "./property.module.scss";
import Section3 from '../home/sections/section3'
import { Navbar, Card, Footer } from '../../components'

const Property = () => {
	
	return (
		<main className={styles.flex}>
			<Navbar BurgerColour={"whitesmoke"} />

			<div className='row'>
				<div className={styles.house}>
	            	<Section3 />
		        </div>
			</div>

			<Footer />
		</main>
	)
}

export default Property