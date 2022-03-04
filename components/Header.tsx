import { BiMenu, BiNetworkChart } from "react-icons/bi";
import {
    commandDataState,
    errorDataState,
    sidebarToggleState,
} from "../atoms/commandsAtom";

import React from "react";
import Select from "react-select";
import useFetch from "../hooks/useFetch";
import { useRecoilState } from "recoil";

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
            borderColor: state.isFocused ? "#ffffff" : "#000000",
        };
    },
    singleValue: (provided) => {
        return {
            ...provided,
            color: "#ffffff",
        };
    },
};

interface Satellite {
    satelliteId: string;
    satelliteName: string;
    description?: string;
    commands?: any[];
    telemetry?: any[];
}

function Header() {
    const [itemId, setItemId] = React.useState(null);
    const [itemList, setItemList] = React.useState([]);
    const [dateTime, setdDateTime] = React.useState(new Date());
    const [, setError] = useRecoilState(errorDataState);
    const [, setCommands] = useRecoilState(commandDataState);
    const [open, setOpen] = useRecoilState(sidebarToggleState);
    const { data, isError } = useFetch<Satellite[]>(
        "http://localhost:3165/satellites"
    );

    const toggleOpen = () => {
        setOpen(!open);
    };

    const handleSelect = (opt) => {
        setItemId(opt.value);
    };

    React.useEffect(() => {
        setInterval(() => setdDateTime(new Date()), 1000);
    });

    // Set the satellite data to state
    // by loop through every arrays
    React.useEffect(() => {
        if (!data) return;
        if (isError) {
            setError(isError);
        }

        // Check if the length of data is not equal to zero
        // and if the length of itemList (initial value is null) is equal to zero
        if (data.length !== 0 && itemList.length === 0) {
            let satelliteIdOptions = [];

            // Use Id as the value to use for further step
            // and use name for label to show in search
            data.forEach((satellite) => {
                let satelliteIdObject = {
                    value: satellite.satelliteId,
                    label: satellite.satelliteName,
                } 
                satelliteIdOptions.push(satelliteIdObject);
            });
            setItemList(satelliteIdOptions);
        }
    }, [data]);

    // Set commands of satellite to global state
    React.useEffect(() => {
        if (!data) return null;
        if (data.length !== 0) {
            // Filter out the array of command by comparing satellite ID and item ID from handleSelect
            const item = data.filter(
                (satellite) => satellite.satelliteId === itemId
            );
            console.log(item)

            try {
                setCommands(item[0].commands);
            } catch {
                setCommands([]);
            }
        }
    }, [data, itemId]);

    return (
        <header
            className="flex w-auto h-[9vh] bg-[#2C3333] pl-5 pr-10 items-center shadow-lg
    justify-between text-gray-200"
        >
            <button className="lg:text-[2rem]" onClick={toggleOpen}>
                <BiMenu />
            </button>

            <ul className="flex justify-between items-center w-5/12 lg:text-[1.2rem]">
                <li className="block w-1/3">
                    <Select
                        styles={customSelect}
                        options={itemList}
                        onChange={(opt) => handleSelect(opt)}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                        })}
                    />
                </li>
                <li className="block">
                    <BiNetworkChart />
                </li>
                <li className="block cursor-default">
                    <p className="text-base">
                        {dateTime.toLocaleString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                        })}
                    </p>
                    <p className="text-base">
                        {dateTime.toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                        })}
                    </p>
                </li>
            </ul>
        </header>
    );
}

export default Header;
