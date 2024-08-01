import { Navbar, Header, Hedge, About, Connection } from "../components";
export default function Home() {
  return (
    <main>
      <div className="bg-[#1a1a1a] px-[4rem] py-4">
        <Navbar />
        <Header />
      </div>
      <div className="bg-[#1a1a1a]">
        <Hedge />
      </div>
      <div className="bg-[#1a1a1a] px-[4rem] py-4">
        <About />
      </div>
      <Connection />
    </main>
  );
}
