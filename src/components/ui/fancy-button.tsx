export default function FancyButton() {
  return (
    <button className="relative w-full md:w-1/2 justify-center cursor-pointer inline-flex items-center gap-2 px-6 py-3 font-semibold text-slate-50 bg-gradient-to-tr from-slate-700/30 via-slate-700/70 to-slate-900/30 ring-4 ring-slate-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-slate-50/10 before:blur-xl">
      Discover More
    </button>
  );
}
