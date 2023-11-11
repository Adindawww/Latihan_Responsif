import React from "react";

export const Responsif = () => {
    return (
        <div className="h-screen p-4 space-y-4">
            <div className="flex h-[20%] justify-end md:justify-center">
                <div className="bg-red-500 h-full w-[30%] md:w-full flex items-center justify-center font-bold text-white">
                    Merah
                </div>
            </div>
            <div className="flex flex-col md:flex-col-reverse lg:flex-row w-[100%] h-[80%] gap-4">
                <div className="bg-purple-500 w-full lg:w-[40%] h-[50%] lg:h-full flex items-center justify-center font-bold text-white">
                    Ungu
                </div>
                <div className="flex flex-col-reverse md:flex-col lg:flex-col-row w-[100%] h-[100%] mb-4">
                    <div className="bg-green-500 h-[50%] flex items-center justify-center font-bold text-white">
                        Hijau
                    </div>
                    <div className="mb-4 flex flex-row h-[50%]">
                        <div className="bg-blue-500 sm:bg-pink-500 lg:bg-blue-500 w-[50%] ml-4 mt-2 mr-2 flex items-center justify-center font-bold text-white order-last md:order-first">
                            Biru
                        </div>
                        <div className="bg-pink-500 w-[50%] mt-2 ml-2 mr-2 flex items-center justify-center font-bold text-white order-first md:order-last">
                            Pink
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}