import arrow from '../assets/arrow.png';
import Box from './Box';
const Overview = () => {
    return <div className="row-span-3 bg-slate-300 p-3">
        <div className="flex justify-between m-2">
            <div className="text-lg font-semibold">Overview</div>
            <div className='flex items-center border-2 border-gray-400 bg-white p-1 rounded'>
                <div className='text-xs'>Last Month</div>
                <img src={arrow} className='invert h-2 m-1' alt="" />
            </div>
        </div>
        <div className='flex h-1/5'>
            <Box heading='Online Orders' value='231' />
            <Box heading='Amount Received' value={'₹23,92,312.19'} />
        </div>
    </div>
}

export default Overview;