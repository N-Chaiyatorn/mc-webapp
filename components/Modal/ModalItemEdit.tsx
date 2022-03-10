import React from "react";

export default function ModalItemEdit(props: any) {
    const { open, close, command } = props;
    console.log(command)

    const handleClick = () => {
        close(!open);
    };

    return (
        open && (
            <div className="fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-50 ">
                <div className="w-auto h-auto p-6 bg-[#eee] text-[#000] overflow-auto">
                    <table className="w-[680px]">
                        <tr>
                            <td className="w-[30%]">Command Id</td>
                            <td>{command.id}</td>
                        </tr>
                        <tr>
                            <td>Command Name</td>
                            <td>{command.name}</td>
                        </tr>
                        <tr>
                            <td>Command description</td>
                            <td>{command.description}</td>
                        </tr>
                    </table>
                    <p className="mb-3">Command value</p>
                    <textarea
                        required
                        id={command.commandId}
                        name={command.name}
                        defaultValue={command.value}
                        placeholder={`Input value as a ${command.dataType}`}
                        className="w-full p-2 bg-[#c4c4c4]"
                    />

                    <footer className="mt-5 float-right">
                        <button className="p-3 bg-[#A3DA8D]">Accept</button>
                        <button
                            onClick={handleClick}
                            className="p-3 ml-8 bg-[#c4c4c4]"
                        >
                            Cancel
                        </button>
                    </footer>
                </div>
            </div>
        )
    );
}
