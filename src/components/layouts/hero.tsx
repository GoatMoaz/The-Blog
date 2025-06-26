import AnimatedItem from "@/components/ui/animated-item";

export default function Hero() {
  return (
    <section className="text-center py-20 border-y">
      <AnimatedItem
        animation="slideInLeft"
        delay={0.2}
        className="text-6xl sm:text-7xl lg:text-[160px] xl:text-[243px] font-bold mb-6 opacity-0"
      >
        THE BLOG
      </AnimatedItem>
    </section>
  );
}
