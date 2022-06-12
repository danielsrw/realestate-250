import { useContext } from "react";
import SearchContext from "../searchContext";
const BuyCheckbox = () => {
  const { buy, setBuy } = useContext(SearchContext);

  return (
    <div>
      <input
        type="checkbox"
        name="Buy"
        value="Buy"
        onChange={() => setBuy(!buy)}
        checked={buy}
      />
      <label htmlFor="Buy"> Houses For Sale</label>
    </div>
  );
};

export default BuyCheckbox;