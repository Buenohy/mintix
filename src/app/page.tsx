import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-[#050810]">
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-[#050810] sm:items-start">
        <Header />
      </main>
    </div>
  );
}
