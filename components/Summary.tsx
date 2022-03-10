import Link from "next/link";
import MondalConfirm from "./Modal/MondalConfirm";
import React from "react";
import SummaryItem from "./SummaryItem";
import { selectedCommandDataState } from "../atoms/commandsAtom";
import { useRecoilValue } from "recoil";

export default function Summary() {
    const [openConfirm, setOpenConfirm] = React.useState(false);
    const selectedCommand = useRecoilValue(selectedCommandDataState);

    const handleClickConfirm = () => {
        setOpenConfirm(!openConfirm);
    };

    return (
        <div className="flex-col items-center w-auto h-[80%] p-10 text-lg text-gray-200">

            <div className="w-full pb-5">
                <Link href="/CommandList">
                    <button className="w-32 p-3 mr-8 bg-[#c4c4c4] text-[#000000]">
                        Back
                    </button>
                </Link>
                <span className="text-3xl">Summary</span>
            </div>

            <div className="p-6 bg-[#2C3333]">
                <div className="flex flex-row justify-between items-center">
                    <span>
                        <p>Command Id(s)</p>
                        <p>Command Name(s)</p>
                    </span>
                    <p>Command value</p>
                    <p>Actions</p>
                </div>
                <hr className="my-4 border-[1px]" />

                {selectedCommand.map((selectedCommand, index) => (
                    <SummaryItem key={index} index={index} command={selectedCommand} />
                ))}
                <hr className="my-4 border-[1px]" />

                <div className="flex flex-row justify-between items-center">
                    <div>
                        <p>Total commands : {selectedCommand.length}</p>
                        <p>Satellite name : {selectedCommand.length !== 0 ? "OSUSR" : "None" }</p>
                    </div>
                    {selectedCommand.length !== 0 && (
                        <button
                            onClick={handleClickConfirm}
                            className="w-32 p-3 bg-[#eee] text-[#000]"
                            >
                            Done
                        </button>
                    )}
                </div>
            </div>

            <MondalConfirm open={openConfirm} close={setOpenConfirm} />
        </div>
    );
}
