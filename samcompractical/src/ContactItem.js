import React from 'react';
import { ListItemText, ListItemAvatar, ListItem, Avatar } from '@material-ui/core';
import ContactDetail from './ContactDetail';

const ContactItem = (props) => {
    return (
        <ListItem button onClick={onCardclick(props.contact.id)} key={props.contact.id}>
            <ListItemAvatar>
                <Avatar alt='' src={props.contact.avatar} />
            </ListItemAvatar>
            <ListItemText primary={props.contact.first_name + ' ' + props.contact.last_name} secondary={props.contact.email} />           
        </ListItem>
    );
}
const onCardclick = (id) => {
    console.log("clicked");
    <ContactDetail id={id} />
}

export default ContactItem;