import { BiCheckboxChecked } from "react-icons/bi";
import ModalItem from "./Modal/ModalItem";
import React from "react";

function CommandItem(props: any) {
    const { command } = props;
    const [open, setOpen] = React.useState(false);
    const [selectedModal, setSelectedModal] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <div
                key={command.commandId}
                onClick={handleClick}
                className="flex flex-col justify-between relative p-6 bg-[#2C3333] hover:bg-[#616161] hover:opacity-70 cursor-pointer"
            >
                <p className="text-[15px]">{command.commandId}</p>
                <hr className="border-3 my-3" />
                <h2 className="font-semibold">{command.name}</h2>

                {selectedModal && (
                    <div className="absolute right-[0] top-[0] lg:text-[2rem] animate-bounce">
                        <BiCheckboxChecked />
                    </div>
                )} 
            </div>

            {open && <ModalItem command={command} onClose={setOpen} />}
        </>
    );
}

export default CommandItem;
