import { useRecoilState, useRecoilValue } from "recoil";

import CommandList from "../../components/CommandList";
import Header from "../../components/Header";
import ModalItem from "@/components/Modal/ModalItem";
import Sidebar from "../../components/Sidebar";
import { modalToggleState } from "@/atoms/commandsAtom";

export default function Home() {
  const open = useRecoilValue(modalToggleState);

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
