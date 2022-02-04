import { useEffect, useState } from "react";
import Select from "react-select";
import useFetch from "../hooks/useFetch";
import CommandItem from "./CommandItem";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: "black",
    backgroundColor: state.isSelected && "gray",
    "&:hover": {
      backgroundColor: "gray",
    }
  }),
}

function CommandList() {
  const { data, isError } = useFetch(
    "http://localhost:3165/satellites"
  );

  const [targetId, setTargetId] = useState(null);
  const [commands, setCommands] = useState(null);
  const [itemList, setItemList] = useState([]);

  const handleFormChange = (option) => {
    setTargetId(option.value);
  };

  useEffect(() => {
    if (data.length !== 0 && itemList.length === 0) {
      let satalliteIdOptions = [];
      data.forEach((satellite) => {
        let satelliteIdObject = {
          value: satellite.satelliteId,
          label: satellite.satelliteId,
        };
        satalliteIdOptions.push(satelliteIdObject);
      });
      setItemList(satalliteIdOptions);
    }
  }, [data]);

  useEffect(() => {
    if (data.length !== 0) {
      const target = data.filter((satellite) => {
        return satellite.satelliteId === targetId;
      });
      try {
        setCommands(target[0].commands);
      } catch {
        setCommands(null);
      }
    }
  }, [data, targetId]);

  return (
    <div className="flex-col p-10 items-center text-lg text-gray-200">

      <Select
        instanceId="asd4s8a6d4q"
        value={itemList.filter(function(option) {
          return option.value === targetId;
        })}
        options={itemList}
        onChange={(option) => handleFormChange(option)}
        styles={customStyles}
      />

      {isError && (
        <div className="ml-3 text-sm text-red-900">
          Error fetching the satellites metadata
        </div>
      )}

      {commands && (
        <div className="flex-col w-full my-auto text-left text-sm lg:text-base py-2 px-2">
          <div
            className="flex items-center text-base lg:text-lg text-left
          text-ellipsis overflow-hidden whitespace-nowrap h-[4rem]"
          >
            <div className="basis-1/3 lg:basis-1/4">Command ID</div>
            <div className="basis-1/3 lg:basis-1/4">Name</div>
            <div className="basis-1/3 lg:basis-1/4">Significance Level</div>
            <div className="basis-1/3 hidden lg:basis-1/4 lg:table-cell">
              Description
            </div>
          </div>
          {commands.length != 0 ? (
            <div>
              {commands.map((command) => (
                <CommandItem
                  key={command.commandId}
                  command={command}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center py-5 text-xl">
              Target ID: {targetId} has no commands
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CommandList;
