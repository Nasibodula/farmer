// import React, { useRef, useEffect, useState } from 'react';
// import './Chat.css';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// export default function Chat() {
//     const [value, setValue] = useState('');
//     const [message, setMessage] = useState(null);
//     const [previousChats, setPreviousChats] = useState([]);
//     const [currentTitle, setCurrentTitle] = useState(null);
//     const feedRef = useRef(null);

//     const createNewChat = () => {
//         setMessage(null);
//         setValue('');
//         setCurrentTitle(null);
//     };

//     const handleClick = (uniqueTitle) => {
//         setCurrentTitle(uniqueTitle);
//         setMessage(null);
//         setValue('');
//     };

//     const getMessages = async () => {
//         const options = {
//             method: 'POST',
//             body: JSON.stringify({
//                 message: value,
//             }),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         };

//         try {
//             const response = await fetch('http://localhost:4000/completions', options);
//             const data = await response.json();
            
//             console.log('Response data:', data);
            
//             if (data.choices && data.choices.length > 0) {
//                 setMessage(data.choices[0].message);
//             } else {
//                 console.error('No choices found in response:', data);
//                 setMessage({ role: 'system', content: 'No valid response received from the server.' });
//             }
//         } catch (error) {
//             console.error('Error fetching messages:', error);
//             setMessage({ role: 'system', content: 'An error occurred while fetching the message.' });
//         }
//     };

//     useEffect(() => {
//         if (!currentTitle && (value || message)) {
//             setCurrentTitle(value || message);
//         }
//         if (currentTitle && value && message) {
//             if (isAgricultureRelated(message.content)) {
//                 setPreviousChats((prevChats) => [
//                     ...prevChats,
//                     {
//                         title: currentTitle,
//                         role: 'user',
//                         content: value,
//                     },
//                     {
//                         title: currentTitle,
//                         role: message.role,
//                         content: message.content,
//                     },
//                 ]);
//             } else {
//                 // Default message for non-agriculture related questions
//                 setPreviousChats((prevChats) => [
//                     ...prevChats,
//                     {
//                         title: currentTitle,
//                         role: 'user',
//                         content: value,
//                     },
//                     {
//                         title: currentTitle,
//                         role: message.role,
//                         content: 'I am programmed to only answer questions related to agriculture. Kindly ask your question',
//                     },
//                 ]);
//             }
//         }
//     }, [message, currentTitle]);

//     useEffect(() => {
//         // Scroll to the bottom of the feed whenever previousChats updates
//         if (feedRef.current) {
//             feedRef.current.scrollTop = feedRef.current.scrollHeight;
//         }
//     }, [previousChats]);

//     console.log(previousChats);

//     const currentChat = previousChats.filter((previousChat) => previousChat.title === currentTitle);
//     const uniqueTitles = Array.from(new Set(previousChats.map((previousChat) => previousChat.title)));

//     const isAgricultureRelated = (content) => {
//         const agricultureKeywords = ['agriculture', 'farming', 'crop', 'harvest', 'livestock'];
//         return agricultureKeywords.some((keyword) => content.toLowerCase().includes(keyword));
//     };

//     return (
//         <div className='chat'>
//             <Navbar/>
//             <div className='appcontainer '>
//                 <div className='app'>
//                     <section className='side_bar'>
//                         <button className='btn' onClick={createNewChat}>
//                             {' '}
//                             + New Chat
//                         </button>
//                         <ul className='history'>
//                             {uniqueTitles?.map((uniqueTitle, index) => (
//                                 <li key={index} onClick={() => handleClick(uniqueTitle)}>
//                                     {uniqueTitle}
//                                 </li>
//                             ))}
//                         </ul>
//                         <nav>
//                             <p>Lets chat</p>
//                         </nav>
//                     </section>
//                     <section className='main'>
//                         {!currentTitle && <h1>NDCGPT</h1>}
//                         <ul className='feed' ref={feedRef}>
//                             {currentChat.map((chatMessage, index) => (
//                                 <li key={index}>
//                                     <p className='role'>{chatMessage.role}</p>
//                                     <p>{chatMessage.content}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                         <div className='bottom-section'>
//                             <div className='input-container'>
//                                 <input value={value} onChange={(e) => setValue(e.target.value)} />
//                                 <div id='submit' onClick={getMessages}>
//                                     ➢
//                                 </div>
//                             </div>
//                             <p className='info'>
//                                 weefsasfdckjbhvcfdxrtyuijkjmnqwbvdsgyhukjwhbvgdsfcgyuijkjmnbvdscgyhujkd
//                             </p>
//                         </div>
//                     </section>
//                 </div>
//             </div>
//             <Footer/>
//         </div>
//     );
// }


import React, { useRef, useEffect, useState } from 'react';
import './Chat.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Chat() {
    const [value, setValue] = useState('');
    const [message, setMessage] = useState(null);
    const [previousChats, setPreviousChats] = useState(() => {
        // Load previous chats from local storage
        const savedChats = localStorage.getItem('previousChats');
        return savedChats ? JSON.parse(savedChats) : [];
    });
    const [currentTitle, setCurrentTitle] = useState(null);
    const feedRef = useRef(null);

    const createNewChat = () => {
        setMessage(null);
        setValue('');
        setCurrentTitle(null);
    };

    const handleClick = (uniqueTitle) => {
        setCurrentTitle(uniqueTitle);
        setMessage(null);
        setValue('');
    };

    const getMessages = async () => {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                message: value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await fetch('http://localhost:4000/completions', options);
            const data = await response.json();
            
            console.log('Response data:', data);
            
            if (data.choices && data.choices.length > 0) {
                setMessage(data.choices[0].message);
            } else {
                console.error('No choices found in response:', data);
                setMessage({ role: 'system', content: 'No valid response received from the server.' });
            }
        } catch (error) {
            console.error('Error fetching messages:', error);
            setMessage({ role: 'system', content: 'An error occurred while fetching the message.' });
        }
    };

    useEffect(() => {
        if (!currentTitle && (value || message)) {
            setCurrentTitle(value || message);
        }
        if (currentTitle && value && message) {
            if (isAgricultureRelated(message.content)) {
                setPreviousChats((prevChats) => [
                    ...prevChats,
                    {
                        title: currentTitle,
                        role: 'user',
                        content: value,
                    },
                    {
                        title: currentTitle,
                        role: message.role,
                        content: message.content,
                    },
                ]);
            } else {
                // Default message for non-agriculture related questions
                setPreviousChats((prevChats) => [
                    ...prevChats,
                    {
                        title: currentTitle,
                        role: 'user',
                        content: value,
                    },
                    {
                        title: currentTitle,
                        role: message.role,
                        content: 'I am programmed to only answer questions related to agriculture,plant, animals and farm. Kindly ask your question',
                    },
                ]);
            }
        }
    }, [message, currentTitle]);

    useEffect(() => {
        // Save previousChats to local storage whenever it updates
        localStorage.setItem('previousChats', JSON.stringify(previousChats));
        
        // Scroll to the bottom of the feed whenever previousChats updates
        if (feedRef.current) {
            feedRef.current.scrollTop = feedRef.current.scrollHeight;
        }
    }, [previousChats]);

    console.log(previousChats);

    const currentChat = previousChats.filter((previousChat) => previousChat.title === currentTitle);
    const uniqueTitles = Array.from(new Set(previousChats.map((previousChat) => previousChat.title)));

    const isAgricultureRelated = (content) => {
        const agricultureKeywords = ['agriculture', 'farming', 'crop', 'harvest', 'livestock'];
        return agricultureKeywords.some((keyword) => content.toLowerCase().includes(keyword));
    };

    return (
        <div className='chat'>
            <Navbar/>
            <div className='appcontainer '>
                <div className='app'>
                    <section className='side_bar'>
                        <button className='btn' onClick={createNewChat}>
                            {' '}
                            + New Chat
                        </button>
                        <ul className='history'>
                            {uniqueTitles?.map((uniqueTitle, index) => (
                                <li key={index} onClick={() => handleClick(uniqueTitle)}>
                                    {uniqueTitle}
                                </li>
                            ))}
                        </ul>
                        <nav>
                            <p>Lets chat</p>
                        </nav>
                    </section>
                    <section className='main'>
                        {!currentTitle && <h1>NDCGPT</h1>}
                        <ul className='feed' ref={feedRef}>
                            {currentChat.map((chatMessage, index) => (
                                <li key={index}>
                                    <p className='role'>{chatMessage.role}</p>
                                    <p>{chatMessage.content}</p>
                                </li>
                            ))}
                        </ul>
                        <div className='bottom-section'>
                            <div className='input-container'>
                                <input value={value} onChange={(e) => setValue(e.target.value)} />
                                <div id='submit' onClick={getMessages}>
                                    ➢
                                </div>
                            </div>
                            <p className='info'>
                                weefsasfdckjbhvcfdxrtyuijkjmnqwbvdsgyhukjwhbvgdsfcgyuijkjmnbvdscgyhujkd
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer/>
        </div>
    );
}