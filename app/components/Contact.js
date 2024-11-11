import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div>
      <main className={styles.main}>
        <h1>Contact Us</h1>
        
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label className="label" htmlFor="name">Name:</label>
            <input className="input" type="text" id="name" name="name" />
          </div>
          <div className={styles.formGroup}>
            <label className="label" htmlFor="email">Email:</label>
            <input className="input" type="email" id="email" name="email" />
          </div>
          <div className={styles.formGroup}>
            <label className="label" htmlFor="message">Message:</label>
            <textarea className="textarea" id="message" name="message" rows="5" />
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </main>
    </div>
  );
}