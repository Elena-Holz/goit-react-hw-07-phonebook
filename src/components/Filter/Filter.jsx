import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/filter/filterSlice";
import { getFilter } from "redux/filter/filterSelector";
import css from 'components/Filter/Filter.module.css'
import PropTypes from "prop-types";

const Filter = () => {
      const filter = useSelector(getFilter);
       const dispatch = useDispatch();
    
       const handelChange = (event) => {
       const { value } = event.target;
       dispatch(setFilter(value));
  }

    return (
        <div className={css.formGrup}>
            <label className={css.titleInput}>Find contacts by name</label><br />
            <input className={css.input} type='text' name="filter" onChange={handelChange} value={filter} />
        </div>
)

}

export default Filter

Filter.propTypes = {

    filter: PropTypes.string,
     handelChange: PropTypes.func.isRequired,
    
}

