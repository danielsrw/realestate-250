import { useState } from "react";
import { logo } from "../../assets";
import styles from "./navbar.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import useClickOutside from "../../customHooks/clickOutside";

const Navbar = ({ BurgerColour }) => {
	const MenuLink = ({ url, path }) => {
	    return (
	      	<li className={styles.navlink}>
		        <NavLink to={`/${url}`} className={({ isActive }) => (isActive ? styles.active : undefined)}>
		          	{`${path}`}
		        </NavLink>
	      	</li>
	    );
  	};

	const [isNavOpen, setIsNavOpen] = useState(false);
	let domNode = useClickOutside(() => {
		setIsNavOpen(false);
	});

	return (
		<div className={styles.navbar_container}>
			<nav>
				<div className={styles.brand_logo}>
		          	<Link to="/">
		          		<img src={ logo } alt='logo' />
		          	</Link>
		        </div>

		        <div className={styles.mobile_menu} style={{ color: BurgerColour }} onClick={() => setIsNavOpen(!isNavOpen)}>
		          	<FaBars />
		        </div>

		        <ul className={`${isNavOpen ? styles.ul_active : undefined} ${ styles.navbar_ul }`} ref={domNode}>
		          	<div className={styles.mobile_close} onClick={() => setIsNavOpen(!isNavOpen)}>
		            	<FaTimes />
		          	</div>

		          	<MenuLink url="" path="Home" />
		          	<MenuLink url="about" path="About" />
		          	<MenuLink url="property" path="Property" />
		          	<MenuLink url="agents" path="Agents" />
		          	<MenuLink url="contact" path="Contact" />
		          	<Link to="/auth" className={styles.login}>
		            	<span>Login</span>
		          	</Link>
		        </ul>
		        <Link to="/auth" className={styles.login_container}>
		          	<span style={{ color: BurgerColour }}>Login</span>
		          	<BsArrowRight style={{ color: BurgerColour }} />
		        </Link>
			</nav>
		</div>
	)
}

Navbar.defaultProps = {
  	BurgerColour: "rgb(26, 55, 58)",
};

export default Navbar