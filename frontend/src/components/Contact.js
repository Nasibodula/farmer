import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    
    const baseUrl = "http://localhost:4000";
    
    const sendEmail = async () => {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      let dataSend = {
        email: email,
        subject: subject,
        message: message,
      };
      
      try {
        const res = await fetch(`${baseUrl}/email/sendEmail`, {
          method: "POST",
          body: JSON.stringify(dataSend),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        
        if (res.status >= 200 && res.status < 300) {
          setSubmitStatus('success');
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          setSubmitStatus('error');
        }
      } catch (err) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    };
    
    return (
        <div className='contact-wrapper'>
            <div className='contact'>
                <div className='contact-container'>
                    <div className="contact-header">
                        <div className="plant-icon">🌱</div>
                        <h2>GET IN TOUCH</h2>
                        <h1>GROW WITH US</h1>
                        <p>Have questions about farming? Need advice? We're here to help your crops flourish!</p>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <div className="input-container">
                            <span className="input-icon">✉️</span>
                            <input
                                id='email'
                                type='email'
                                placeholder='youremail@example.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <div className="input-container">
                            <span className="input-icon">📝</span>
                            <input
                                id='subject'
                                type='text'
                                placeholder='What is this about?'
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <div className="input-container textarea-container">
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Tell us how we can help with your farm..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    {submitStatus === 'success' && (
                        <div className="status-message success">
                            <span className="status-icon">✅</span>
                            Message sent successfully! We'll get back to you soon.
                        </div>
                    )}
                    
                    {submitStatus === 'error' && (
                        <div className="status-message error">
                            <span className="status-icon">❌</span>
                            Oops! Something went wrong. Please try again.
                        </div>
                    )}
                    
                    <button 
                        className={`send-btn ${isSubmitting ? 'submitting' : ''}`} 
                        onClick={sendEmail}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'SENDING...' : 'PLANT YOUR MESSAGE'}
                        {!isSubmitting && <span className="btn-icon">🚜</span>}
                    </button>
                    
                    <div className="contact-footer">
                        <div className="footer-decoration">
                            <span className="decoration-item">🌽</span>
                            <span className="decoration-item">🍅</span>
                            <span className="decoration-item">🥕</span>
                            <span className="decoration-item">🥬</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;