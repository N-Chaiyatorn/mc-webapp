import type { ChangeEvent } from "react";
import { useState } from "react";

function CommandItem({ command }) {
  const [argument, setArgument] = useState("");
  const [showPanel, setShowPanel] = useState(false);

  const handlePanel = (): void => {
    setShowPanel(!showPanel);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setArgument(e.target.value);
  };
  const sendCommand = (): void => {
    alert("Command Sent: " + argument);
  };
  const handleCancel = (): void => {
    setArgument("");
    setShowPanel(false);
  };

  return (
    <>
      <div
        className="flex items-center text-left hover:bg-gray-900 h-[4rem]"
        onClick={handlePanel}
      >
        <div className="basis-1/3 lg:basis-1/4">{command.commandId}</div>
        <div className="basis-1/3 lg:basis-1/4">{command.name}</div>
        <div className="basis-1/3 lg:basis-1/4">{command.significance}</div>
        <div className="basis-1/3 hidden lg:basis-1/4 lg:table-cell">
          {command.description}
        </div>
      </div>

      {showPanel && (
        <div className="flex-col text-base bg-gray-800 text-gray-300">
          <div className="flex justify-start items-end p-3 pr-5">
            <form className="w-full">
              <div className="flex items-center border-b border-orange-500 py-2">
                <input
                  className="bg-transparent w-full text-gray-200 mr-3 py-1 px-2 focus:outline-none"
                  type="text"
                  placeholder={"Limit range [...]" + command.dataType}
                  value={argument}
                  onChange={handleChange}
                />
                <button
                  className="flex-shrink-0 bg-orange-600 hover:bg-orange-800 border-orange-600 hover:border-orange-800 
                    text-sm border-4 text-white py-1 px-2 rounded"
                  type="button"
                  onClick={sendCommand}
                >
                  Send Command
                </button>
                <button
                  className="flex-shrink-0 border-transparent border-4 text-orange-500 
                    hover:text-orange-800 text-sm py-1 px-2 rounded"
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default CommandItem;
