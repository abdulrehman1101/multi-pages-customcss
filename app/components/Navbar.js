import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">About</Link></li>
        <li><Link href="/">Contact</Link></li>
      </ul>
    </nav>
  );
}