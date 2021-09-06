import { useEffect, useState } from 'react';
import ContactItem from './ContactItem';
import { List } from '@material-ui/core';

function App() {
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(d => { setContactList(d.data) })
  }, []);
  return (
    <List>
      {contactList.map((item) => {
        return <ContactItem contact={item} />
      }
      )}
    </List>
  );
}

export default App;
