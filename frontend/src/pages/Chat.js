import React from 'react';
import './Chat.css';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Chat() {
    const [value, setValue] = useState('');
    const [message, setMessage] = useState(null);
    const [previousChats, setPreviousChats] = useState([]);
    const [currentTitle, setCurrentTitle] = useState(null);

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
            setMessage(data.choices[0].message);
            console.log(data);
        } catch (error) {
            console.log(error);
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
                        content: 'I am programmed to only answer questions related to agriculture. Kindly ask your question',
                    },
                ]);
            }
        }
    }, [message, currentTitle]);

    console.log(previousChats);

    const currentChat = previousChats.filter((previousChat) => previousChat.title === currentTitle);
    const uniqueTitles = Array.from(new Set(previousChats.map((previousChat) => previousChat.title)));

    const isAgricultureRelated = (content) => {
        // Implement your logic to determine if the content is related to agriculture
        // For example, you can check for specific keywords or phrases related to agriculture
        const agricultureKeywords = ['agriculture', 'farming', 'crop', 'harvest', 'livestock'];
        return agricultureKeywords.some((keyword) => content.toLowerCase().includes(keyword));
    };

    return (
        <div className='appcontainer'>
            <Navbar/>
        <div className='app'>
            <section className='side_bar'>
                <button className='btn' onClick={createNewChat}>
                    {' '}
                    + New Chat
                </button>
                <ul className='history'>
                    {uniqueTitles?.map((uniqueTitle, index) => (
                        <li key={index} onClick={() => handleClick(uniqueTitle)}>
                            {uniqueTitles}
                        </li>
                    ))}
                </ul>
                <nav>
                    <p>Lets chat</p>
                </nav>
            </section>
            <section className='main'>
                {!currentTitle && <h1>NDCGPT</h1>}
                <ul className='feed'>
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
    );
}