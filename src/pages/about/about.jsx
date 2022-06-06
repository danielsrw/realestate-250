import './about.scss'
import { AiOutlinePhone} from 'react-icons/ai'
import { building3, building4 } from '../../assets'
import { Navbar, Hero, Footer } from '../../components'

const About = () => {
	return (
		<main>
			<Navbar BurgerColour={"whitesmoke"} />

			<Hero />

			<div className='about_content'>
				<div className='image_container1'>
		          	<img src={ building3 } alt="building" />
		        </div>
		        <div className='image_container2'>
		          	<img src={ building4 } alt="building" />
		        </div>
		        <div className='about_info'>
		        	<div className='about_starter'>
		        		<div />
		        		<p>Know more about us</p>
		        	</div>
		        	<h2>Are you looking for the best property near you? contact us</h2>
		        	<p>
		        		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
		        	</p>
		        	<p>
		        		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
		        	</p>
		        	<div className='about_call'>
		        		<div>
		        			<span>Call us now</span>
		        			<p>+250 788 888 888</p>
		        		</div>
		        		<AiOutlinePhone className='icon' />
		        	</div>
		        </div>
			</div>

			<Footer />
		</main>
	)
}

export default About