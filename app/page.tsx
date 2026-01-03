import PageHeader from "./components/PageHeader";
import IntroSection from "./components/IntroSection";
import { ProductsPreview } from "./components/ProductsPreview";
import AboutSection from "./components/AboutSection";
import OrderSection from "./components/OrderSection";
export default function Home() {
  return (
    <div className="font-sans">
      <IntroSection></IntroSection>
      <AboutSection></AboutSection>
      <OrderSection></OrderSection>
      <ProductsPreview></ProductsPreview>


    </div>
  );
}
