import NavBar from './components/Navbar';
import styles from './styles/Home.module.css';
import About from './components/About';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="main">
        <h1 className="h1" > Well come to our Followers website </h1>
        <p className="p"></p>
        <About />
        <Contact />
      </main>
    </div>
  );
}