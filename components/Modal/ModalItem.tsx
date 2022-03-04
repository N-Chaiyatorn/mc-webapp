import { commandDataState, modalToggleState } from "@/atoms/commandsAtom";
import { useRecoilState, useRecoilValue } from "recoil";

import React from "react";

export default function ModalItem(props: any) {
    const [open, setOpen] = useRecoilState(modalToggleState);
    console.log(props)

    const toggleModal = () => {
        setOpen(!open);
    };

    return (
        open && (
            <div className="fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">


                <div key={props.commandId} className="w-auto h-auto z-50 p-6 bg-[#eee] text-[#000] overflow-auto">
                    <table className="w-[680px]">
                        <tr>
                            <td className="w-[30%]">Command Id</td>
                            <td>{props.commandId}</td>
                        </tr>
                        <tr>
                            <td>Command Name</td>
                            <td>{props.name}</td>
                        </tr>
                        <tr>
                            <td>Command description</td>
                            <td>{props.description}</td>
                        </tr>
                    </table>
                    <p className="mb-3">Command value</p>
                    <textarea placeholder="Input value..." className="w-full bg-[#c4c4c4]" />

                    <footer className="mt-5 float-right">
                        <button className="p-3 bg-[#A3DA8D]">Accept</button>
                        <button onClick={toggleModal} className="p-3 ml-8 bg-[#c4c4c4]">Cancel</button>
                    </footer>
                </div>

            </div>
        )
    );
}
