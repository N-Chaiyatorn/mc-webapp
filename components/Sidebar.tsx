import NavSubMenu from "./NavSubMenu";
import { SidebarContents } from "./SidebarContents";
import { sidebarToggleState } from "../atoms/commandsAtom";
import { useRecoilValue } from "recoil";

function Sidebar() {
    const isOpen = useRecoilValue(sidebarToggleState);

    return (
        isOpen && (
            <nav
                className="w-auto sticky items-end h-screen text-sm bg-[#2C3333]
      text-gray-500 p-6 lg:text-base"
            >
                <div className="space-y-4">
                    {SidebarContents.map((item, index) => {
                        return <NavSubMenu item={item} key={index} />;
                    })}
                </div>
            </nav>
        )
    );
}

export default Sidebar;
