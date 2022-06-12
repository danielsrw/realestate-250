import styles from './buy.module.scss'
import { Navbar, Card, Footer } from '../../components'

const Buy = () => {

	return (
		<main>
			<Navbar BurgerColour={"whitesmoke"} />

			<div className={styles.content}>
		        <h1>Houses For Sale</h1>
		        <div className={styles.card}>
			        <Card />
		        </div>
		    </div>

			<Footer />
		</main>
	)
}

export default Buy