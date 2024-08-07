
import { MdKeyboardArrowRight } from "react-icons/md";

function GoalsDishesMenu(props) {
    return (
        <>
            <div className=" flex items-center justify-between md:gap-0 gap-2 px-10 py-5">
                <div className=" flex gap-5 justify-center items-center">
                    <div className={` ${props.data.bg_color} 2xl:h-16 2xl:w-16 h-14 w-14 rounded-[50%] flex justify-center items-center`}>
                        {props.data.icon}
                    </div>
                    <div className=" text-white text-[1.2em] 2xl:text-[1.8em] font-[600]">{props.data.text}</div>
                </div>
                <div>
                    <MdKeyboardArrowRight className=" text-white text-[2em] bg-very_light_grat rounded-[50%]" />
                </div>
            </div>
        </>
    )
}

export default GoalsDishesMenu
