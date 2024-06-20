import down from "../assets/down.png"
import plus from "../assets/plus.png"

function Personal(){
    return(
        <div className="top-0 left-0 right-0 bottom-0">
            <div className="pt-[13px] pl-[10px] pr-[10px] pb-[17px] flex flex-col gap-3">
                <div className="bg-[#765555] w-full h-44 rounded-lg flex justify-start items-end">
                    <div className="text-5xl font-Jockey text-[#FFFFFF] pb-4 pl-3">
                        <p>Personal Diaries</p>
                    </div>
                </div>
                <div className="bg-[#E3DDC5] w-full h-[110vh] rounded-lg flex flex-col p-[30px]">
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <div className="border-2 pt-1 border-black font-Josefin font-semibold text-[25px] rounded-[7px] w-[161px] h-[55px] flex justify-center">
                                <button className="flex justify-center items-center w-full h-full gap-4">
                                    Category
                                    <img src={down} className="w-[15px] h-[15px]"/>
                                </button>
                            </div>
                            <div className="border-2 pt-1 border-black font-Josefin font-semibold text-[25px] rounded-[7px] w-[213px] h-[55px] flex justify-center">
                                <button className="flex justify-center items-center w-full h-full gap-4">
                                    Date Modified
                                    <img src={down} className="w-[15px] h-[15px]"/>
                                </button>
                            </div>
                        </div>
                        <div className="border-2 pt-1 border-black font-Josefin font-semibold text-[25px] rounded-[7px] w-[161px] h-[55px] flex justify-center">
                            <button className="flex justify-center items-center w-full h-full gap-4">
                                <img src={plus} className="w-[15px] h-[15px]"/>
                                Add New
                            </button>
                        </div>
                    </div>
                    <div className="mt-5 border-2 rounded-[7px] border-black w-full h-full">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal;