import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import BeforeAfter from "@/components/BeforeAfter";
import Atuacao from "@/components/Location";
import Map from "@/components/Map";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* 1. A Navbar gere-se sozinha no topo */}
      <Navbar />

      {/* 2. Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* 3. Sobre a Empresa */}
      <section id="sobre">
        <About />
      </section>

      {/* 4. Áreas de Atuação (Apenas uma vez) */}
      <section id="atuacao">
        <Atuacao />
      </section>

      {/* 5. Serviços Oferecidos */}
      <section id="servicos">
        <Services />
      </section>

      {/* 6. Testemunhos */}
      <Testimonials />

      {/* 7. CTA Banner */}
      <CTABanner />

      {/* 8. Antes/Depois */}
      <BeforeAfter />

      {/* 9. Mapa de Localização */}
      <section id="localizacao">
        <Map />
      </section>

      {/* 7. Formulário de Contacto */}
      <section id="contactos">
        <Contact />
      </section>
      
      {/* 8. O Componente Footer Profissional (Substituímos o manual por este) */}
      <Footer /> 
    </main>
  );
}