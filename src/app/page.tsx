import EventOverview from "@/components/EventOverview";
import Events from "@/components/Events";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-[#050810]">
      <main className="flex min-h-screen w-full flex-col items-center bg-white dark:bg-[#050810] sm:items-start">
        <Header />
        <div className="flex flex-col gap-5 p-7.5">
        <EventOverview />
        <Events />
        </div>
      </main>
    </div>
  );
}
