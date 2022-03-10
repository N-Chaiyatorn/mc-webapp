import CommandList from "../../components/CommandList";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />

      <div className="flex bg-gray-700">
        <Sidebar />

        <main className="flex-col flex-grow">
          <section>
            <CommandList />
          </section>
        </main>
      </div>

      <footer>{/* Footer */}</footer>
    </div>
  );
}
