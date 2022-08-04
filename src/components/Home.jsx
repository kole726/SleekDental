
import Navbar from './Navbar'
import Hero from './Hero'
import ContentSection from './ContentSection'
import PrimaryFeatures from './PrimaryFeatures'


import Testimonials from './Testimonials'
import CTA from './CTA'
import Faq from './Faq'
import Blog from './Blog'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ContentSection/>
      <PrimaryFeatures/>
      <Testimonials/>
      <CTA/>
      <Faq/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default Home;
