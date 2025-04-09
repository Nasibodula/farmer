import React from 'react';
import './whyus.css';

export default function WhyUs() {
  return (
    <div className="why-us-container">
      <h2 className="why-us-title">Why Choose FarmBuddy</h2>
      
      <div className="benefits-grid">
        <div className="benefit-card">
          <div className="benefit-header">
            <div className="benefit-icon">🌱</div>
            <h3 className="benefit-title">Farmer-Focused Design</h3>
          </div>
          <p className="benefit-text">Built specifically for your farming needs, with features that understand agricultural challenges.</p>
        </div>
        
        <div className="benefit-card">
          <div className="benefit-header">
            <div className="benefit-icon">☁️</div>
            <h3 className="benefit-title">Weather Intelligence</h3>
          </div>
          <p className="benefit-text">Accurate, real-time forecasts and alerts to help you plan harvesting, planting, and field work.</p>
        </div>
        
        <div className="benefit-card">
          <div className="benefit-header">
            <div className="benefit-icon">📱</div>
            <h3 className="benefit-title">Always Available</h3>
          </div>
          <p className="benefit-text">Access critical farm data whether you're in the field, barn, or relaxing at home - works offline too!</p>
        </div>
        
        <div className="benefit-card">
          <div className="benefit-header">
            <div className="benefit-icon">💰</div>
            <h3 className="benefit-title">Simple & Affordable</h3>
          </div>
          <p className="benefit-text">Essential features free forever, with intuitive design that works for farmers of all tech comfort levels.</p>
        </div>
      </div>
      
      <div className="cta-container">
        <button className="cta-button">Start Growing Smarter</button>
      </div>
    </div>
  );
}