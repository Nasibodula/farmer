import React, { useRef, useEffect, useState } from 'react';
import './Chat.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Chat() {
    const [value, setValue] = useState('');
    const [message, setMessage] = useState(null);
    const [previousChats, setPreviousChats] = useState(() => {
        const savedChats = localStorage.getItem('previousChats');
        return savedChats ? JSON.parse(savedChats) : [];
    });
    const [currentTitle, setCurrentTitle] = useState(null);
    const [sidebarActive, setSidebarActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const feedRef = useRef(null);

    // Define toggleSidebar function
    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    // Define createNewChat function
    const createNewChat = () => {
        setMessage(null);
        setValue('');
        setCurrentTitle(null);
        if (window.innerWidth <= 768) {
            setSidebarActive(false);
        }
    };

    // Define handleClick function
    const handleClick = (uniqueTitle) => {
        setCurrentTitle(uniqueTitle);
        setMessage(null);
        setValue('');
        if (window.innerWidth <= 768) {
            setSidebarActive(false);
        }
    };

    // Define handleKeyPress function
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            getMessages();
        }
    };

    const getMessages = async () => {
        if (!value.trim()) return;
        
        setIsLoading(true);
        
        try {
            const chatHistory = currentTitle ? 
                previousChats
                    .filter(chat => chat.title === currentTitle)
                    .map(chat => ({
                        role: chat.role,
                        content: chat.content
                    })) : [];
                    
            const messages = [
                ...chatHistory,
                { role: "user", content: value }
            ];
            
            const options = {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': window.location.href,
                    'X-Title': 'NDCGPT'
                },
                body: JSON.stringify({
                    // Using a known working model - try these alternatives:
                    // "openai/gpt-3.5-turbo" - Free tier available
                    // "anthropic/claude-3-haiku" - Good balance
                    // "google/gemini-pro" - Another good option
                    model: "openai/gpt-3.5-turbo",
                    messages: messages,
                    temperature: 0.7,
                    max_tokens: 800
                })
            };
    
            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', options);
            const data = await response.json();
            
            if (!response.ok) {
                // Improved error message with API response details
                const errorMsg = data.error?.message || 
                               data.error?.type ||
                               `API request failed with status ${response.status}`;
                throw new Error(errorMsg);
            }
            
            if (data.choices && data.choices.length > 0) {
                setMessage(data.choices[0].message);
            } else {
                throw new Error('API returned no completions');
            }
        } catch (error) {
            console.error('API Error:', error);
            setMessage({ 
                role: 'assistant', 
                content: `Sorry, I encountered an error: ${error.message}. Please try again.`
            });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!currentTitle && value && message) {
            setCurrentTitle(value.substring(0, 30) + (value.length > 30 ? '...' : ''));
        }
        
        if (currentTitle && value && message) {
            setPreviousChats((prevChats) => [
                ...prevChats,
                {
                    title: currentTitle,
                    role: 'user',
                    content: value,
                },
                {
                    title: currentTitle,
                    role: message.role || 'assistant',
                    content: message.content,
                },
            ]);
            setValue('');
        }
    }, [message, currentTitle]);

    useEffect(() => {
        localStorage.setItem('previousChats', JSON.stringify(previousChats));
        if (feedRef.current) {
            feedRef.current.scrollTop = feedRef.current.scrollHeight;
        }
    }, [previousChats]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setSidebarActive(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Define currentChat and uniqueTitles
    const currentChat = previousChats.filter((previousChat) => previousChat.title === currentTitle);
    const uniqueTitles = Array.from(new Set(previousChats.map((previousChat) => previousChat.title)));

    return (
        <div className="chat">
            <Navbar/>
            <button className="menu-toggle" onClick={toggleSidebar}>
                ☰ Menu
            </button>
            <div className="appcontainer">
                <div className="app">
                    <section className={`side_bar ${sidebarActive ? 'active' : ''}`}>
                        <button className="btn" onClick={createNewChat}>
                            + New Chat
                        </button>
                        <ul className="history">
                            {uniqueTitles?.map((uniqueTitle, index) => (
                                <li key={index} onClick={() => handleClick(uniqueTitle)}>
                                    {uniqueTitle}
                                </li>
                            ))}
                        </ul>
                        <nav>
                            <p>Agricultural Assistant</p>
                        </nav>
                    </section>
                    <section className="main">
                        {!currentTitle && <h1>NDCGPT</h1>}
                        <ul className="feed" ref={feedRef}>
                            {currentChat.map((chatMessage, index) => (
                                <li key={index}>
                                    <p className="role">{chatMessage.role}</p>
                                    <p>{chatMessage.content}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="bottom-section">
                            <div className="input-container">
                                <input 
                                    value={value} 
                                    onChange={(e) => setValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask about agriculture..."
                                    disabled={isLoading}
                                />
                                <div id="submit" onClick={getMessages}>
                                    {isLoading ? "..." : "➢"}
                                </div>
                            </div>
                            <p className="info">
                                Agricultural AI Assistant - Ask questions about farming, crops, livestock, and more
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer/>
        </div>
    );
}