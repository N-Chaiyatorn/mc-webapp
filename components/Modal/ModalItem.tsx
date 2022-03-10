import React from "react";
import { selectedCommandDataState } from "@/atoms/commandsAtom";
import { useRecoilState } from "recoil";

export default function ModalItem(props: any) {
    const { command, onClose } = props;
    const [inputValue, setInputValue] = React.useState([
        {
            id: "",
            name: "",
            value: "",
            description: "",
        },
    ]);
    const [selectedCommand, setSelectedCommand] = useRecoilState(
        selectedCommandDataState
    );

    const handleChange = (e) => {
        const { id, name, value } = e.target;
        setInputValue([...selectedCommand, { id, name, value, description: command.description }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSelectedCommand(inputValue);
        if (inputValue.length !== 0) {
            onClose(false);
        } else {
            console.log("Fail on receiving data");
        }
    };

    return (
        <div className="fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-50 ">
            <form
                onSubmit={handleSubmit}
                key={command.commandId}
                className="w-auto h-auto p-6 bg-[#eee] text-[#000] overflow-auto"
            >
                <table className="w-[680px]">
                    <tr>
                        <td className="w-[30%]">Command Id</td>
                        <td>{command.commandId}</td>
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
                    about={command.description}
                    // value={inputValue.map(item => item.value)}
                    onChange={handleChange}
                    placeholder={`Input value as a ${command.dataType}`}
                    className="w-full p-2 bg-[#c4c4c4]"
                />

                <footer className="mt-5 float-right">
                    <button
                        type="submit"
                        className="w-[140px] p-3 bg-[#A3DA8D] hover:bg-[#7FBE66]"
                    >
                        Accept
                    </button>
                    <button
                        onClick={() => onClose(false)}
                        className="w-[140px] p-3 ml-8 bg-[#c4c4c4]"
                    >
                        Cancel
                    </button>
                </footer>
            </form>
        </div>
    );
}
