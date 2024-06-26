import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import CallForQuote from "@/components/call-for-quote/CallForQuote";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/Hero/Hero";
import Service from "@/components/service/Service";
import Statistics from "@/components/statistics/Statistics";
import Testimonial from "@/components/testimonial/Testimonial";
import Work from "@/components/work/Work";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cleaning | Jahangir Hossain</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <About />
        <Service />
        <Work />
        <Statistics />
        <Blog />
        <Testimonial />
        <Footer />
        
      </main>
    </>
  );
}
