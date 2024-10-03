import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 React Quiz App. All rights reserved.</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  width: '100%',
  bottom: '0',
};

export default Footer;
