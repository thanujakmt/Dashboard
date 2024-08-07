
import BarChart from "./BasicBar"
import { IoMdArrowDropdown } from "react-icons/io";
import GoalsDishesMenu from "./GoalsDishesMenu";
import GoalsDishesMenuData from "../data/GoalsDishesMenuData";

function Section2() {
    return (
        <>
            <div className=' text-white w-full md:w-[400px] xl:w-[1700px] lg:w-[980px] 2xl:w-[900px] 2xl:mx-16 md:mx-7  bg-gray'>
                <div className=" flex justify-between px-16 py-2">
                    <div className="  text-white font-[700] 2xl:text-[1.6em]">Activity</div>
                    <div className=" text-white bg-very_light_grat border border-very_light_grat1 px-4 flex justify-center items-center gap-2 rounded-[35px]">
                        Weekly
                        <IoMdArrowDropdown />
                    </div>
                </div>
                <div className=''>
                    <BarChart className="" />
                </div>
            </div>
            <div className=" flex justify-center py-2 md:w-full 2xl:w-[755px]">
                <div className=' flex justify-center items-center 2xl:w-[600px] bg-gray'>
                    <div className="2xl:w-[600px]  flex flex-col gap-5">
                        {
                            GoalsDishesMenuData.map((item) => {
                                return <GoalsDishesMenu key={item.id} data={item} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2
