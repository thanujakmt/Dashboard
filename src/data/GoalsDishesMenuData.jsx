
import { GoGoal } from "react-icons/go";
import { GiHamburger } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";

const GoalsDishesMenuData = [
    {
        'id' : 1,
        'icon' : <GoGoal className=" text-[1.5em] text-red" />,
        'text' : 'Goals',
        'bg_color' : 'bg-backgroundred'
    },
    {
        'id' : 2,
        'icon' : <GiHamburger className=" text-[1.5em] text-sky_blue" />,
        'text' : 'Popular Dishes',
        'bg_color' : 'bg-background_blue'
    },
    {
        'id' : 3,
        'icon' : <BiSolidDish className=" text-[1.5em] text-very_light_blue"  />,
        'text' : 'Menus',
        'bg_color' : 'bg-backgroundvery_light_blue'
    }
]

export default GoalsDishesMenuData
