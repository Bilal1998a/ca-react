import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#343a40',
    color: '#fff',
    padding: '20px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
};

export default Footer;
