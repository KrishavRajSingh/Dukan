import Box from './Box';
const Overview = () => {
    return <div className="row-span-3 p-3">
        <div className="flex justify-between m-2">
            <div className="text-lg font-semibold">Overview</div>
            <div className='flex items-center border-2 border-gray-300 bg-white p-1 rounded'>
                <select className='text-xs outline-none'>
                    <option>This Month</option>
                    <option>Last Month</option>
                    <option>Last's Last Month</option>
                    <option>The One Before that one</option>
                </select>
            </div>
        </div>
        <div className='flex h-1/5'>
            <Box heading='Online Orders' value='231' />
            <Box heading='Amount Received' value={'₹23,92,312.19'} />
        </div>
    </div>
}

export default Overview;