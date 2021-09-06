import React, { useEffect, useState } from 'react';

const ContactDetail = (props) => {
    const[details,setDetails] = useState();
    useEffect(()=>{
        fetch('https://reqres.in/api/users/'+props.id)
        .then(a=>a.json())
        .then(res=>{ setDetails(res)})
    },[props.id]);
    return(
        <div>
            {details}
        </div>
    );
}

export default ContactDetail;