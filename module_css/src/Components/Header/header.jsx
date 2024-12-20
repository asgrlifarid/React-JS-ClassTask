import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Wakabayashi</h1>

        <nav className={styles.nav}>
          <a href="">About Us</a>
          <a href="">Products </a>
          <a href="">Features</a>
          <a href="">Our Blog</a>
          <a href="">Downloads</a>
        </nav>

        <div className={styles.budiv}>
          <button className={styles.signup}>Sign up</button>
          <button className={styles.login}>Login</button>
        </div>
      </div>
    </header>
  );
}
