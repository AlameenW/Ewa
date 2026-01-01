import PageHeader from "./components/PageHeader";
import IntroSection from "./components/IntroSection";
import { ProductsPreview } from "./components/ProductsPreview";
export default function Home() {
  return (
    <div className="font-sans">
      <IntroSection></IntroSection>
      <ProductsPreview></ProductsPreview>
    </div>
  );
}
