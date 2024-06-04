import { useDispatch } from 'react-redux';
import { FaRegUser, FaPhone, FaRegTrashAlt } from 'react-icons/fa';

import { deleteContact } from '../../redux/contactsOps';

import css from './Contact.module.css';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(id));
  };

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
      <button type="button" onClick={handleClick} className={css.button}>
        <FaRegTrashAlt size={20} />
      </button>
    </div>
  );
};

export default Contact;
