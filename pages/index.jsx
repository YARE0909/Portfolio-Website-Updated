import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pradyumna D</title>
        <meta name="description" content="Portfolio website of Pradyumna D" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${"w-full h-screen bg-[#190d27]"}`}>
        <Hero />
      </div>
    </div>
  );
}
