// import React, {useState}, from 'react';
// import Navbar from './Navbar';
// import Hero from './Hero';
// import './Contact.css'

// const Contact = () => {
//     const [email, setEmail] = useState("");
//     const [subject, setSubject] = useState("");
//     const [message, setMessage] = useState("");
  
//     const baseUrl = "http://localhost:8000";
  
//     const sendEmail = async () => {
//       let dataSend = {
//         email: email,
//         subject: subject,
//         message: message,
//       };
//       const res = await fetch(`${baseUrl}/email/sendEmail`, {
//         method: "POST",
//         body: JSON.stringify(dataSend),
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       })
//       .then((res) => {
//         console.log(res);
//         if (res.status > 199 && res.status < 300) {
//           alert("Send Successfully !");
//         }
//       });
//   };
  
//     return(
//         <div className='contact'>
//             <div className='contactcontainer'>
//                 <h2 >OUR CONTACT</h2>
//                 <h1>REQUEST A CALL BACK</h1>
//                 <input id='email' type='text' placeholder='Your Name'/>
//                 <input type='email' placeholder='Email Address'/>
//                 <textarea id="textarea" name="textarea" rows="4" cols="60" placeholder="MESSAGE"/>
//                 <button  onClick={() => sendEmail()}>SEND</button>
//             </div>
//         </div>
//     )
// }
// export default Contact;

import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import './Contact.css';

const Contact = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
  
    const baseUrl = "http://localhost:4000";
  
    const sendEmail = async () => {
      let dataSend = {
        email: email,
        subject: subject,
        message: message,
      };
      const res = await fetch(`${baseUrl}/email/sendEmail`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.status >= 200 && res.status < 300) {
        alert("Send Successfully !");
      } else {
        alert("Failed to send email.");
      }
    };
  
    return (
        <div>
            <div className='contact'>
                <div className='contactcontainer'>
                    <h2>OUR CONTACT</h2>
                    <h1>REQUEST A CALL BACK</h1>
                    <input 
                        id='email' 
                        type='text' 
                        placeholder='Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type='text' 
                        placeholder='Subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <textarea 
                        id="message" 
                        name="message" 
                        rows="4" 
                        cols="60" 
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className='btn' onClick={() => sendEmail()}>SEND</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;