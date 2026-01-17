import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Generators from "@/components/Generators";
import BookAppointment from "@/components/BookAppointment";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Generators />
      <BookAppointment />
      <Contact />
    </>
  );
}

