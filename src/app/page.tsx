import Hero from "@/components/Hero";
import Header from "../components/Header";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="relative h-screen bg-img-header-hero flex flex-col">
        <div className="absolute inset-0 bg-[#001623cc]/80" aria-hidden="true" />
        <div className="relative z-10 flex flex-col flex-1">
          <Header />
          <Hero />
        </div>
      </div>
    </>
  );
}
