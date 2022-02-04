import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import AlarmsTable from "@/components/AlarmsTable";

export default function home() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />

      <div className="flex bg-gray-700 overflow-hidden">
        <Sidebar />

        <main className="flex-col flex-grow">
          <section>
            <AlarmsTable />
          </section>
        </main>
      </div>

      <footer>{/* Footer */}</footer>
    </div>
  );
}
