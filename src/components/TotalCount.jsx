
function TotalCount(props) {
    return (
        <>
            <div className=' bg-gray m-5 p-3 w-[80%] xl:w-40 md:w-48 2xl:w-48'>
                <div className={`h-16 w-16 ${props.data.bgcolor} flex justify-center items-center rounded-[15px]`}>
                    {props.data.icon}
                </div>
                <div className=' text-very_light_grat2 font-[600]'>{props.data.totaltype}</div>
                <div className=' flex justify-between'>
                    <span className=' text-white text-[2em] font-[600]'>{props.data.count}</span>
                    <span className={`flex justify-center ${props.data.percentagecolor} items-center`} >{props.data.indredecreicon}3%</span>
                </div>
            </div>
        </>
    )
}

export default TotalCount
