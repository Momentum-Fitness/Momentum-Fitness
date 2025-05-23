import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Get started Today</h3>
        <p> Fitness is better together!
           Join our community, track your progress, and Start Your Momentum Now !

        </p>
        <button className="footer-button">Sign Up</button>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>Email: support@Momentumfitness.org</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className="footer-column">
        <h3>Legal</h3>
        <p><a href="/privacy-policy">Privacy Policy</a></p>
        <p><a href="/terms-of-service">Terms of Service</a></p>
      </div>
    </footer>
  );
}
