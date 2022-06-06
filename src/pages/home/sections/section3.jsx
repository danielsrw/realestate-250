import { SwiperSlide } from "swiper/react";
import styles from "./section3.module.scss";
import { Card, Carousel, ArrowButton } from "../../../components";

const Section3 = () => {
	return (
		<section className={styles.section_3}>
			<div className={styles.section_3_title}>
		        <h1>Best Houses</h1>
		        <ArrowButton text="See More" path="buy" />
		    </div>

		    <div className={styles.cards}>
		        <Carousel>
		         	 <SwiperSlide>
		            	<Card />
		          	</SwiperSlide>
		         	 <SwiperSlide>
		            	<Card />
		          	</SwiperSlide>
		         	 <SwiperSlide>
		            	<Card />
		          	</SwiperSlide>
		         	 <SwiperSlide>
		            	<Card />
		          	</SwiperSlide>
		        </Carousel>
		    </div>
		</section>
	)
}

export default Section3