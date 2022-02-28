import { useState } from "react";
import Link from "next/link";

function NavSubMenu({ item }) {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => {
    setSubnav(!subnav);
  };

  return (
    <div className="flex-col">
      {item.subNav ? (
        <div
          className="flex mb-4 text-gray-100 items-center hover:scale-[1.02] hover:text-orange-800 duration-150 cursor-default"
          onClick={item.subNav && showSubnav}
        >
          <p>{item.icon}</p>
          <div className="ml-2">{item.title}</div>
          <div className="ml-auto">
            {subnav ? item.iconOpened : item.iconClosed}
          </div>
        </div>
      ) : (
        <Link href={"/" + item.title.replace(/\s+/g, "")}>
          <div
            className={
              "flex mb-4 text-gray-100 items-center hover:scale-[1.02] hover:text-orange-800 duration-150 cursor-pointer"
            }
            onClick={item.subNav && showSubnav}
          >
            {item.icon}
            <div className="ml-2">{item.title}</div>
          </div>
        </Link>
      )}
      
      <div
        className={
          "flex-col my-2 px-2 border-y border-orange-800 " +
          (subnav ? "py-1" : "")
        }
      >
        {subnav &&
          item.subNav.map((item, index: number) => {
            return (
              <Link href={"/" + item.title.replace(/\s+/g, "")} key={index}>
                <div
                  className="flex text-[0.8rem] text-gray-300 items-center my-1 space-x-2 py-[6px] cursor-pointer
                hover:text-orange-800 hover:scale-[1.05] lg:text-[0.85rem]"
                >
                  <div>{item.icon}</div>
                  <div>{item.title}</div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default NavSubMenu;
