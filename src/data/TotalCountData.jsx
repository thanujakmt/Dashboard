
import { TbShoppingBagPlus } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { TbShoppingBagX } from "react-icons/tb";
import { TbArrowBigDownLineFilled } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const TotalCountData = [
    {
        'id' : '1',
        'icon' : <TbShoppingBagPlus className=" text-sky_blue text-[1.5em]" />,
        'totaltype' : 'Total Orders',
        'count' : '75',
        'indredecreicon' : <IoMdArrowDropup/>,
        'bgcolor' : 'bg-background_blue',
        'percentagecolor' : 'text-green'
    },
    {
        'id' : '2',
        'icon' : <TbShoppingBagCheck className = 'text-green text-[1.5em]' />,
        'totaltype' : 'Total Delivered',
        'count' : '70',
        'indredecreicon' : <IoMdArrowDropdown />,
        'bgcolor' : 'bg-backgorundgreen',
        'percentagecolor' : 'text-red'
    },
    {
        'id' : '3',
        'icon' : <TbShoppingBagX className = 'text-red text-[1.5em]'/>,
        'totaltype' : 'Total Cancelled',
        'count' : '05',
        'indredecreicon' : <IoMdArrowDropup/>,
        'bgcolor' : 'bg-backgroundred',
        'percentagecolor' : 'text-green'
    },
    {
        'id' : '4',
        'icon' : <TbArrowBigDownLineFilled className = 'text-pink text-[1.5em]'/>,
        'totaltype' : 'Total Revenue',
        'count' : '$12k',
        'indredecreicon' : <IoMdArrowDropdown />,
        'bgcolor' : 'bg-backgroundpink',
        'percentagecolor' : 'text-red'
    }
]

export default TotalCountData
