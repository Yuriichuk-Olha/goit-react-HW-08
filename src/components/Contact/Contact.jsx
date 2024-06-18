import { useDispatch } from 'react-redux';
import { FaRegUser, FaPhone, FaRegTrashAlt } from 'react-icons/fa';
import { deleteContact } from '../../redux/contacts/operations';

import css from './Contact.module.css';

const Contact = ( {id, name, number}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
 if(!name || !number){
  return null
 }
  return (
    <div className={css.box}>
      <div className={css.info}>
        <span className={css.item}>
          <FaRegUser size={20} />: {name}
        </span>
        <span className={css.item}>
          <FaPhone size={20} />: {number}
        </span>
      </div>
      <button type="button" onClick={handleDelete} className={css.button}>
         <FaRegTrashAlt size={20} /> Delete
      </button>
    </div>
  );
};

 
export default Contact;
