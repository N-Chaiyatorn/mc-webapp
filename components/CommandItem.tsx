import { BiCheckboxChecked } from "react-icons/bi";
import ModalItem from "./Modal/ModalItem";
import React from "react";
import { modalToggleState } from "@/atoms/commandsAtom";
import { useRecoilState } from "recoil";

function CommandItem(props: any) {
    const { command } = props;
    const [open, setOpen] = useRecoilState(modalToggleState);

    const toggleModal = (e) => {
        setOpen(!open);
        console.log(e);
    };

    return (
        <>
            <div
                className="flex flex-col justify-between relative p-6 bg-[#2C3333] cursor-pointer"
                onClick={() => toggleModal(command.commandId)}
            >
                <p className="text-[15px]">{command.commandId}</p>
                <hr className="border-3 my-3" />
                <h2 className="font-semibold">{command.name}</h2>

                <div className="absolute right-[0] top-[0] lg:text-[2rem]">
                    <BiCheckboxChecked />
                </div>
            </div>

            <ModalItem command={command} />
        </>
    );
}

export default CommandItem;
