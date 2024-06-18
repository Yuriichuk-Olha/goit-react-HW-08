import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { fetchAll } from "../redux/contacts/operations";
import {  selectIsLoading } from "../redux/contacts/selectors";
import Contact from "../components/Contact/Contact";
//selectError,

export default function Contacts () {

const dispatch = useDispatch();
  //const contacts=useSelector(selectContacts)
    const isLoading = useSelector(selectIsLoading);
    //const error = useSelector(selectError);
  
    useEffect(() => {
      dispatch(fetchAll());
    }, [dispatch])
  
    return (
      <div>
        <h1>
          <title>Phonebook</title>
        </h1>
        <ContactForm />
        <SearchBox />
        <Contact/>
        
        <ContactList />
        {isLoading && <div>...loading</div>} 
        {/* {error && <div>{error}</div>} */}

      </div>
    );
  }