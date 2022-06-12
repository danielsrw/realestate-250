import styles from "./filters.module.scss";
import PriceRange from "../priceRange/priceRange";
import BuyCheckbox from "../buyCheckbox";
import RentCheckbox from "../rentCheckbox";

const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.categories}>
        <div className={styles.category}>
          <BuyCheckbox />
          <PriceRange />
        </div>
        <div className={styles.category}>
          <RentCheckbox />
        </div>
      </div>
    </div>
  );
};

export default Filters;