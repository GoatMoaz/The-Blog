import AnimatedItem from "@/components/ui/animated-item";
import HeroLoader from "@/components/loaders/hero-loader";

export default function Hero({ loading }: { loading: boolean }) {
  if (loading) {
    return <HeroLoader />;
  }

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
