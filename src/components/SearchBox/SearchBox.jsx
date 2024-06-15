import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../../redux/filters/slice';
import { selectFilterName } from '../../redux/filters/selectors';

import css from './SearchBox.module.css';


const SearchBox = () => {
  const filterId = useId();
  const filter = useSelector(selectFilterName);
  const dispatch = useDispatch();
  return (
    <div className={css.field}>
      <label htmlFor={filterId}>Search contacts</label>
      <input
        type="text"
        id={filterId}
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
