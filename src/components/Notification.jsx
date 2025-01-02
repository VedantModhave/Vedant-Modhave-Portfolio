import React from 'react';
import styles from './Notification.module.css';

const Notification = ({ message, onClose }) => {
  return (
    <div className={styles.notification}>
      <p>{message}</p>
      <button onClick={onClose} className={styles.closeButton}>Close</button>
    </div>
  );
};

export default Notification;