import Navbar from "@/app/components/Navbar";
import ProductList from "@/app/components/ProductList";

export default function Home() {
  return (
    <>
        <div className="container mx-auto">
            <Navbar/>

            <ProductList/>
        </div>
    </>
  );
}
