
import TotalCount from "./TotalCount";
import TotalCountData from "../data/TotalCountData";
import { IoMdArrowDropup } from "react-icons/io";
import { CircularProgressbar } from 'react-circular-progressbar';

function Section1() {
    return (
        <>
            <div className=' md:grid grid-cols-12 place-items-center'>
                <div className=' flex flex-col items-center md:col-span-7 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 md:grid'>
                    {
                        TotalCountData.map((item) => {
                            return <TotalCount key={item.id} data={item} />
                        })
                    }
                </div>
                <div className='md:col-span-5 py-2 flex flex-row md:flex-col xl:flex-row justify-between items-center px-5 bg-gray 2xl:h-44 md:h-[360px] xl:w-[400px] xl:h-[180px] 2xl:w-[600px] md:w-[250px] w-full'>
                    <div className=' flex flex-col'>
                        <div className=' text-white'>Net Profit</div>
                        <div className=' text-white text-[1.5em] md:text-[3em] font-[600]'>$6759.25</div>
                        <div className=' text-lightgreen flex justify-start items-center text-left text-[1.2em]'>
                            <IoMdArrowDropup /> 3%
                        </div>
                    </div>
                    <div className=' flex flex-col justify-center items-center'>
                        <div style={{ width: 120, height: 120 }}>
                            <CircularProgressbar value={70} text={`70%`} />
                        </div>
                        <div className=' text-white text-center'>*The values here has been rounded off</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1
