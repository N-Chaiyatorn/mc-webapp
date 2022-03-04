import Link from "next/link";
import MondalConfirm from "./Modal/MondalConfirm";
import React from "react";

export default function Summary() {
    const [open, setOpen] = React.useState(false);

    const toggleModal = () => {
      setOpen(!open);
    }

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
                <hr className="my-6 border-[1px]" />

                <div className="flex flex-row justify-between items-center">
                    <span>
                        <p>ODC1-23512523159A</p>
                        <p>camera_rotation_angle</p>
                    </span>
                    <p>
                        {
                            "camera_rotation_angle { LEFT = 150, UP = 50, RIGHT = 0, DOWN = 0 }"
                        }
                    </p>
                    <div>
                        <button className="w-32 p-3 mb-6 bg-[#1572A1] text-[#fff]">
                            Edit
                        </button>
                        <br />
                        <button className="w-32 p-3 bg-[#D35252] text-[#fff]">
                            Delete
                        </button>
                    </div>
                </div>

                <hr className="my-6 border-[1px]" />
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <p>Total commands : 1</p>
                        <p>Satellite name : ODC1</p>
                    </div>
                    <button onClick={toggleModal} className="w-32 p-3 bg-[#eee] text-[#000]">
                        Done
                    </button>
                </div>

                <MondalConfirm open={open} modalClose={setOpen} />

                {/* <table className="w-full">
                    <tr>
                        <td>
                            <p>Command Id(s)</p>
                            <p>Command Name(s)</p>
                        </td>
                        <td className="text-center">Command Value</td>
                        <td className="text-center">Acions</td>
                    </tr>
                    <tr className="w-auto border-t-2">
                      <div className="my-6"></div>
                    </tr>
                    <tr className="border-b-2">
                        <td>
                            <p>ODC1</p>
                            <p>camera_rotation_angle</p>
                        </td>
                        <td>
                            {
                                "camera_rotation_angle { LEFT = 150, UP = 50, RIGHT = 0, DOWN = 0 }"
                            }
                        </td>
                        <td>
                          <p>
                            <button className="w-full p-3 bg-[#1572A1] text-[#fff]">
                                Edit
                            </button>
                          </p>
                            <button className="w-full p-3 bg-[#D35252] text-[#fff]">
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>ODC1</p>
                            <p>camera_rotation_angle</p>
                        </td>
                        <td>
                            {
                                "camera_rotation_angle { LEFT = 150, UP = 50, RIGHT = 0, DOWN = 0 }"
                            }
                        </td>
                        <td>
                          <p>
                            <button className="w-full p-3 bg-[#1572A1] text-[#fff]">
                                Edit
                            </button>
                          </p>
                            <button className="w-full p-3 bg-[#D35252] text-[#fff]">
                                Delete
                            </button>
                        </td>
                    </tr>
                </table> */}
            </div>
        </div>
    );
}
