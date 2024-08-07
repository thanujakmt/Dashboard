
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineStar } from "react-icons/md";

function Feedback(props) {
    return (
        <>
            <div className=" flex flex-col gap-3 py-2">
                <div className=" flex gap-2 items-center">
                    <img className=" h-12 rounded-[50%]" src={props.data.image} alt="" />
                    <div className=" font-[600] text-[1.4em]">{props.data.name}</div>
                </div>
                <div className=" flex">
                    <MdOutlineStar className={` ${props.data.staryellow} text-[1.7em] `}/>
                    <MdOutlineStar className={` ${props.data.staryellow} text-[1.7em] `} />
                    <MdOutlineStar className={` ${props.data.staryellow} text-[1.7em] `} />
                    <MdOutlineStar className={` ${props.data.staryellow} text-[1.7em] `} />
                    <MdOutlineStar className={` ${props.data.starwhite} text-[1.7em] `} />
                </div>
                <div className=" text-very_light_grat1">{props.data.comment}</div>
            </div>
        </>
    )
}

export default Feedback
