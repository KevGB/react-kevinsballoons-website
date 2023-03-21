import Header from "../components/Header";
import SectionMarketing from "../components/SectionMarketing";
import ScrollingGallery from "../components/ScrollingGallery";
import SubscribeForm from "../components/SubscribeForm";
import ScrollingLogos from "../components/ScrollingLogos";
import TestimonialCarousel from "../components/TestimonialCarousel";
import FAB from "../components/FAB";
import "./pagescss/homepage.css";

const Homepage = () => {
  return (
    <div>
      <Header
        headline={"Kevin's Balloons"}
        tagline={"San Francisco's Globally-Demanded Balloon Artist"}
        display={true}
        className="header"
      />
      <FAB className="fab" />
      <SectionMarketing />
      <ScrollingGallery />
      <SubscribeForm />
      <div className="testimonial-section">
        <ScrollingLogos />
        <TestimonialCarousel className="testimonialcarousel" />
      </div>
    </div>
  );
};

export default Homepage;
