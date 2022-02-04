import { SidebarContents } from "./SidebarContents";
import NavSubMenu from "./NavSubMenu";

function Sidebar() {
  return (
    <nav
      className="w-auto sticky items-end h-screen text-sm bg-gray-800
      text-gray-500 p-6 lg:text-base"
    >
      <div className="space-y-4">
        {SidebarContents.map((item, index) => {
          return <NavSubMenu item={item} key={index} />;
        })}
      </div>
    </nav>
  );
}

export default Sidebar;
