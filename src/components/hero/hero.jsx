import './hero.scss'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
// import 'bootstrap/dist/css/bootstrap.min.css'

const Hero = () => {
	return (
		<div className='app__hero hero'>
			<div className='overlay'>
				<div className='container'>
					<div className='app__banner_text'>
						<h2 className='mb-2'>About MUSOMESA</h2>
						<p className='breadcrumbs'>
							<span>
								<Link to='/'>Home</Link>
							</span>
							<BsArrowRight className='hero_icon' />
							<span>
								About us
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero