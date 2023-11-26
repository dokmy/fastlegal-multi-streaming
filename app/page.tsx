import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24 background-gradient">
      {/* <Header /> */}
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
          FastLegal - Search by Situation
        </h1>
      </div>
      <div className="w-full flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/7 xl:w-2/7 mb-4">
          <ChatSection />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/7 xl:w-2/7 mb-4">
          <ChatSection />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/7 xl:w-2/7 mb-4">
          <ChatSection />
        </div>
      </div>
    </main>
  );
}
