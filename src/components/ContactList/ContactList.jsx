import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';
import { selectIsLoading, selectFilteredContacts  } from '../../redux/contacts/selectors';
//selectError,
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  //const error = useSelector(selectError)
  const isLoading = useSelector(selectIsLoading)
  
  return (<>
      {contacts.length > 0 && <h2>Contacts</h2>}
       <ul className={css.list}>
       {isLoading &&  <p>loading...</p>}
       {/* {error && <p>Error: {error}</p>}  */}
      {contacts.map(({id,name,number}) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
      </ul>
  </>
    
   
    
  );
};

export default ContactList;
