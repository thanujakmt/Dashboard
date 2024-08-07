
import { MdHome } from "react-icons/md";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { BsClipboardCheck } from "react-icons/bs";
import { CgToggleSquareOff } from "react-icons/cg";
import { IoBagCheckOutline } from "react-icons/io5";

const NavBarIconsData = [
    {
        'id' : 1,
        'icon' : <MdHome className=' text-very_light_grat1 hover:text-sky_blue  h-7 w-16 cursor-pointer hover:border-l-4 hover:border-sky_blue  pl-2' />
    },
    {
        'id' : 2,
        'icon' : <BiSolidBarChartSquare className=' text-very_light_grat1 hover:text-sky_blue  h-7 w-16 pl-2 cursor-pointer hover:border-l-4 hover:border-sky_blue' />
    },
    {
        'id' : 3,
        'icon' : <BsClipboardCheck className=' text-very_light_grat1 hover:text-sky_blue  h-7 w-16 pl-2 cursor-pointer hover:border-l-4 hover:border-sky_blue' />
    },
    {
        'id' : 4,
        'icon' : <CgToggleSquareOff className=' text-very_light_grat1 hover:text-sky_blue  h-7 w-16 pl-2 cursor-pointer hover:border-l-4 hover:border-sky_blue' />
    },
    {
        'id' : 5,
        'icon' : <IoBagCheckOutline className=' text-very_light_grat1 hover:text-sky_blue  h-7 w-16 pl-2 cursor-pointer hover:border-l-4 hover:border-sky_blue' />
    }
]

export default NavBarIconsData
