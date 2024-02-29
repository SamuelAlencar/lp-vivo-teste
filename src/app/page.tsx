import Cards from "@/components/cards";
import Carousel from "@/components/carousel";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="bg-[#F5F0F0]">
      <div className="container bg-[#FFFAFA] max-w-[1005px]">
        <Header />
        <Carousel />
        <Cards />
      </div>
    </div>
  );
}
