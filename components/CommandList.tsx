import { commandDataState, errorDataState } from "@/atoms/commandsAtom";

import CommandItem from "./CommandItem";
import Link from "next/link";
import React from "react";
import Select from "react-select";
import { useRecoilValue } from "recoil";

const customSelect = {
    option: (styles, { isFocused }) => {
        return {
            ...styles,
            backgroundColor: isFocused ? "#ffffff" : "#2C3333",
            color: isFocused ? "#2C3333" : "#ffffff",
        };
    },
    control: (base, state) => {
        return {
            ...base,
            background: "#000000",
            color: "#ffffff",
            borderColor: state.isFocused ? "#ffffff" : "#2C3333",
        };
    },
    singleValue: (provided) => {
        return {
            ...provided,
            color: "#ffffff",
        };
    },
};

function CommandList() {
    const [itemList, setItemList] = React.useState([]);
    const [commandId, setCommandId] = React.useState(null);
    const [commandList, setCommandList] = React.useState([]);
    const error = useRecoilValue(errorDataState);
    const commands = useRecoilValue(commandDataState);

    const handleSelect = (opt) => {
        setCommandId(opt.value);
    };

    // React.useEffect(() => {
    //     if (!commands) return;
    //     if (commands.length !== 0 && commandList.length === 0) {
    //         let commandOptions = [];

    //         commands.forEach((command) => {
    //             let commandObject = {
    //                 value: command.commandId,
    //                 label: <p>{command.commandId} - {command.name}</p>,
    //             };
    //             commandOptions.push(commandObject);
    //         });
    //         setItemList(commandOptions);
    //     }
    // }, [commands]);

    // React.useEffect(() => {
    //     if (!commands) return;
    //     if (commands.length !== 0) {
    //         const item = commands.filter(
    //             (command) => command.commandId === commandId
    //         );
    //         console.log(item);

    //         try {
    //             setCommandList(item[0]);
    //         } catch (error) {
    //             console.log(error);
    //             setCommandList([]);
    //         }
    //     }
    // }, [commands, commandId]);

    return (
        <div className="flex-col items-center w-auto h-[80%] p-10 text-lg text-gray-200">
            {commands.length === 0 ? (
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-5xl mb-5">No command data</h1>
                    <h2>Please select a satellite on header</h2>
                </div>
            ) : (
                <div className="w-full pb-5">
                    <Select
                        placeholder="Select or type the name of a satellite"
                        options={itemList}
                        styles={customSelect}
                        onChange={(opt) => handleSelect(opt)}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                        })}
                    />
                </div>
            )}

            {error && (
                <div className="ml-3 text-sm text-red-900">
                    Error fetching the satellites metadata
                </div>
            )}

            <div className="flex flex-row flex-wrap justify-between items-start">
                {commands.map((command, index) => (
                    <CommandItem key={index} command={command} />
                ))}
            </div>

            <div className="float-right">
                <button className="w-[140px] p-3 bg-[#eeeeee] text-[#000000]">
                    Reset
                </button>

                <Link href="/CommandList/Summary">
                    <button className="w-[140px] p-3 ml-8 bg-[#c4c4c4] text-[#000000]">
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default CommandList;
