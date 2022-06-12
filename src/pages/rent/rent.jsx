import styles from './rent.module.scss'
import { Navbar, Card, Footer } from '../../components'

const Rent = () => {
	return (
		<main>
			<Navbar BurgerColour={'whitesmoke'} />

			<div className={styles.content}>
		        <h1>Houses For Renting</h1>
		        <div className={styles.card}>
			        <Card />
		        </div>
		    </div>

			<Footer />
		</main>
	)
}

export default Rent