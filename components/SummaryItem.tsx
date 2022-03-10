import ModalItemEdit from "./Modal/ModalItemEdit";
import React from "react";

export default function SummaryItem(props: any) {
    const { index, command } = props;
    const [openEdit, setOpenEdit] = React.useState(false);
    console.log(command);

    const handleClickEdit = () => {
        setOpenEdit(!openEdit);
    };

    return (
        <div>
            <div className="flex flex-row justify-between items-center">
                <span className="w-[200px] max-w-[200px]">
                    <p>{command.id}</p>
                    <p>{command.name}</p>
                </span>
                <p className="text-left">{command.value}</p>
                <div>
                    <button
                        onClick={handleClickEdit}
                        className="w-32 p-3 mb-6 bg-[#1572A1] text-[#fff]"
                    >
                        Edit
                    </button>
                    <br />
                    <button className="w-32 p-3 bg-[#D35252] text-[#fff]">
                        Delete
                    </button>
                </div>
            </div>
            <hr className="my-4 border-[1px] border-[#202020]" />

            <ModalItemEdit open={openEdit} close={setOpenEdit} command={command} />
        </div>
    );
}
