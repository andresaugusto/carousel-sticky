import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";
import Section from "@/components/Section/Section";
import "./globals.css";

export default function Home() {
  return (
    <div className="App">
      <Section title="gallery start (scroll down)" />
      <HorizontalScroll />
      <Section title="gallery end (scroll up)" />
    </div>
  );
}
