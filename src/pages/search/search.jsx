import styles from "./search.module.scss";
import { Navbar } from "../../components";
import { useState } from "react";

import SearchContext from "./searchContext";
import Filters from "./filters/filters/filters";
import QueryCards from "./queryCards";

const Search = () => {
  //STATES
  const [buy, setBuy] = useState(true);
  const [rent, setRent] = useState(false);
  const [priceFilter, setPriceFilter] = useState({
    minPrice: 0,
    maxPrice: 0,
  });

  //CONTEXT
  const value = {
    buy,
    setBuy,
    rent,
    setRent,
    priceFilter,
    setPriceFilter,
  };

  return (
    <main>
      <Navbar />
      <h1 className={styles.title}>Search</h1>
      <SearchContext.Provider value={value}>
        <Filters />
        <QueryCards />
      </SearchContext.Provider>
    </main>
  );
};

export default Search;