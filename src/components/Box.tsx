const Box = ({ heading, value}: {heading: string , value: string}) => {
    return <div className="bg-white m-1 rounded p-3 w-2/4">
        <div className="text-sm text-gray-500 ">{heading}</div>
        <div className="text-[1.5rem] font-semibold">{value}</div>
    </div>
}

export default Box;