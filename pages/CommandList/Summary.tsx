import Header from "../../components/Header";
import ModalItem from "../../components/Modal/ModalItem";
import Sidebar from "../../components/Sidebar";
import Summary from "../../components/Summary";
import { modalToggleState } from "@/atoms/commandsAtom";

export default function Home() {

  return (
    <div className="relative h-screen">
      <Header />

      <div className="flex bg-gray-700">
        <Sidebar />

        <main className="flex-col flex-grow">
          <section>
            <Summary />
          </section>
        </main>
      </div>

      <footer>{/* Footer */}</footer>

    </div>
  );
}
