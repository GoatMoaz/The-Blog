import { Skeleton } from "@/components/ui/skeleton";

export default function HeroLoader() {
  return (
    <section className="text-center py-20 border-y">
      <Skeleton className="h-[243px] mx-auto mb-6" />
    </section>
  );
}
