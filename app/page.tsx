import PageHeader from "./components/PageHeader";
import IntroSection from "./components/IntroSection";
import { ProductsPreview } from "./components/ProductsPreview";
import AboutSection from "./components/AboutSection";
import OrderSection from "./components/OrderSection";
import ReviewsSection from "./components/ReviewsSection";
export default function Home() {
  return (
    <div className="font-sans">
      <IntroSection></IntroSection>
      <AboutSection></AboutSection>
      <ProductsPreview></ProductsPreview>
      <ReviewsSection></ReviewsSection>
      <OrderSection></OrderSection>
    </div>
  );
}
