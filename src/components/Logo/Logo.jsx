import React from 'react';
import styles from './Logo.module.css';

function Logo({ size = 'medium' }) {
  return (
    <div className={`${styles.logo} ${styles[size]}`}>
      <img 
        src="/assets/izwm-logo.svg" 
        alt="International Zero Waste Month 2026" 
        className={styles.logoImage}
      />
    </div>
  );
}

export default Logo;

