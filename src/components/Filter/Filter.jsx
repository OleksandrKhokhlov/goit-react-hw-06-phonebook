import { useDispatch } from "react-redux";
import { filterUserByName } from "redux/filterSlice";
import { FilterLabel } from "./Filter.styled";

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <FilterLabel htmlFor="filter">
        Find contacts by name
        <input
          type="text"
          id="filter"
          name="filter"
          onChange={evt => dispatch(filterUserByName(evt.target.value.toLowerCase()))}
        />
      </FilterLabel>
    </>
  );
};
