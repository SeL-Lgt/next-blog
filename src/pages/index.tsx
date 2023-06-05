import styles from "./index.module.scss";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center grow">
          <p className={styles.welcome}>WELCOME,MY SPACE</p>
          <p className="text-5xl font-bold">不知名的狼窝</p>
        </div>
        <div className="absolute bottom-40 w-full flex justify-center gap-3">
          <p>123</p>
          <p>123</p>
        </div>
      </main>
    </div>
  );
}
