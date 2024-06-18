import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../../redux/filters/slice';
import { selectFilterName } from '../../redux/filters/selectors';
//import {selectFilteredContacts} from '../../redux/contacts/selectors'
import css from './SearchBox.module.css';


const SearchBox = () => {
  const filterId = useId();
  const filter = useSelector(selectFilterName);
  //console.log(filter)
  const dispatch = useDispatch();

  const handleChangeFilter = (e) =>{
    console.log(e)
    dispatch(changeFilter(e.target.value))
  }


  return (
    <div className={css.field}>
      <label htmlFor={filterId} className={css.label}>Search contacts</label>
      <input
        type="text"
        id={filterId}
        value={filter}
        onChange= {handleChangeFilter}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
