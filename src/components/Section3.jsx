
import FeedbackData from "../data/FeedbackDta";
import OrdersData from "../data/OrdersData"
import Feedback from "./Feedback";
import Orders from "./Orders"

function Section3() {
    return (
        <>
            <div className="  my-5 flex md:flex-row flex-col justify-evenly items-center">
                <div className="bg-gray w-[350px] md:w-[380px] overflow-x-auto lg:w-[900px] lg:mr-16 p-5">
                    <table className=" text-white w-full ">
                        <thead>
                            <tr className="">
                                <th className=" text-start">Customer</th>
                                <th className=" text-start">Order No.</th>
                                <th className=" text-start">Amount</th>
                                <th className=" text-start">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                OrdersData.map((item) =>{
                                    return <Orders key={item.id} data={item} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className=" text-white bg-gray w-[350px] md:w-[270px] my-5 lg:w-[600px] h-[550px] overflow-y-auto px-5">
                    <div className=" text-[1.5em] lg:text-[2em] font-[600]">Customer's Feedback</div>
                    {
                        FeedbackData.map((item) => {
                            return <Feedback key={item.id} data={item}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Section3
