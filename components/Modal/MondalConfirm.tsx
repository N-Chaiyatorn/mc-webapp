import React from "react";

export default function MondalConfirm(props: any) {
    const { open, modalClose } = props;

    return (
        open && (
            <div className="fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                <div className="w-[500px] h-auto z-50 p-6 bg-[#eee] text-[#000]">
                    <h1 className="text-5xl text-center">Confirmation</h1>
                    <hr className="my-6 border-black" />
                    <p className="my-6 text-center">
                        Are you sure you want to send the data?
                    </p>

                    <div className="text-center">
                        <button className="w-[11em] p-3 bg-[#A3DA8D] text-[#000]">
                            Send
                        </button>
                        <button
                            onClick={() => modalClose(!open)}
                            className="w-[11em] p-3 ml-8 bg-[#c4c4c4] text-[#000]"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}
