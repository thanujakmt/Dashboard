
function Orders(props) {
    return (
        <>
            <tr className="border-t border-very_light_grat">
                <td className=" flex  items-center gap-2  w-52 lg:w-52 py-4">
                    <img className=" h-12 rounded-[50%]" src={props.data.image} alt="" />
                    <div>{props.data.name}</div>
                </td>
                <td className="  w-52 pr-16 lg:w-52 py-4">{props.data.orderNo}</td>
                <td className="  w-52 pr-16 lg:w-52 py-4">{props.data.amount}</td>
                <td >
                    <div className={`${props.data.textcolor} ${props.data.bgcolor} w-52 lg:w-32 py-4 h-5 flex justify-center items-center rounded-[35px]`}>{props.data.deliverystatus}</div>
                </td>
            </tr>
        </>
    )
}

export default Orders
