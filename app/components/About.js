import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className="h1">About Us</h1>
        <section className={styles.section}>
          <h2>Our Passion for Flowers</h2>
          <p>we believe in the beauty and elegance that flowers bring to every moment. Our mission is to share this joy with you through our carefully selected, fresh, and vibrant floral arrangements.</p>
        </section>
        <section className={styles.section}>
          <h2>Crafting Floral Memories</h2>
          <p>From weddings to anniversaries, our florists put heart and soul into every bouquet. Each petal and stem is chosen with care, ensuring that our arrangements make a lasting impression on your special occasions.</p>
        </section>
        <section className={styles.section}>
          <h2>A Team of Flower Enthusiasts</h2>
          <p>Our team is composed of experienced florists and passionate flower lovers, all committed to delivering the finest blooms and exceptional customer service. We look forward to being part of your floral journey.</p>
        </section>
      </main>
    </div>
  );
}