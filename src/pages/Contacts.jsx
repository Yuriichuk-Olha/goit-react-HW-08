import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { fetchAll } from "../redux/contacts/contactsApi";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";


export default function Contacts () {

const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
  
    useEffect(() => {
      dispatch(fetchAll());
    }, [dispatch])
  
    return (
      <div>
    Contacts Page

    <h1>
        <title>Phonebook</title>
    </h1>
    
        <ContactForm />
        <SearchBox />
        <ContactList />
        {isLoading && <div>...loading</div>}
        {error && <div>{error}</div>}

      </div>
    );
  }