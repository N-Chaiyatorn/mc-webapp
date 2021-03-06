import CommandList from "../components/CommandList";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function home() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />

      <div className="flex bg-gray-700 overflow-hidden">
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
