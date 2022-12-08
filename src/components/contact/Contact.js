import React, { useState } from 'react';
import "./contact.css";

// Here we import a helper function that will check if the email is valid
export default function Contact() {
     // Create state variables for the fields in the form
     // We are also setting their initial values to an empty string
    const [name, setName] = useState ('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState ('');

    const submit = (e) => {
     e.preventDefault();
     const formValid =
          name.length > 0 &&
          /(.+)@(.+){2,}.(.+){2,}/.test(email) &&
          message.length > 0;
          if (!formValid) {
               return;
          }
          if (!localStorage.getItem('messages')) {
               localStorage.setItem('messages', JSON.stringify([]));
          }
          const messages = JSON.parse(localStorage.getItem("messages"));
          messages.push({
               name,
               email,
               message
          });
          localStorage.setItem('messages', JSON.stringify(messages));
    };

    const onReset = () => {
     setName('');
     setEmail('');
     setMessage('');
    };

    return (
     <div className='Contact'>
          <form onSubmit={submit} onReset={onReset}>
               <div>
                    <label className='name'>Name:</label>
                    <input value ={name} onChange={(e) => setName(e.target.value)}/>
               </div>
               <div>
                    <label className='email'>Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}/>
               </div>
               <div>
                    <label className='message'>Message:</label>
                    <input value={message} onChange={(e) => setMessage(e.target.value)}/>
               </div>
               <button type='submit'>Submit</button>
               <button type='reset'>Reset</button>
          </form>
     </div>
    );
    }
