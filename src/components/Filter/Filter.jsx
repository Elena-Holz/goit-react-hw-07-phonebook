import css from 'components/Filter/Filter.module.css'
import PropTypes from "prop-types";

const Filter = ({ filter, handelChange }) => {
    console.log(filter);
    
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

