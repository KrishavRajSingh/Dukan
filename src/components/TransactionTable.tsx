import search from '../assets/search.png';
import sort from '../assets/sort.png';
import download from '../assets/download.png';
import Pagination from './Pagination';

const TransactionTable = () => {
    const data = [{
        id: '#281209',
        date: '7 July, 2023',
        amt: '₹1,278.23',
        fee: '₹22'
    },{
        id: '#281209',
        date: '7 July, 2023',
        amt: '₹1,278.23',
        fee: '₹22'
    },{
        id: '#281209',
        date: '7 July, 2023',
        amt: '₹1,278.23',
        fee: '₹22'
    },{
        id: '#281209',
        date: '7 July, 2023',
        amt: '₹1,278.23',
        fee: '₹22'
    },{
        id: '#281209',
        date: '7 July, 2023',
        amt: '₹1,278.23',
        fee: '₹22'
    },{
        id: '#281209',
        date: '7 July, 2023',
        amt: '₹1,278.23',
        fee: '₹22'
    },{
        id: '#281209',
        date: '7 July, 2023',
        amt: '₹1,278.23',
        fee: '₹22'
    },{
        id: '#281209',
        date: '7 July, 2023',
        amt: '₹1,278.23',
        fee: '₹22'
    },{
        id: '#281209',
        date: '7 July, 2023',
        amt: '₹1,278.23',
        fee: '₹22'
    },{
        id: '#281209',
        date: '7 July, 2023',
        amt: '₹1,278.23',
        fee: '₹22'
    },{
        id: '#281209',
        date: '7 July, 2023',
        amt: '₹1,278.23',
        fee: '₹22'
    }
    ];
    return <div className="m-2 h-full bg-white">
        <div className='flex items-center justify-between m-2'>
            <label className="relative flex items-center w-2/6">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <img className="h-5 w-5" src={search} alt="" />
                </span>
                <input className="placeholder:text-slate-400 block bg-[#FFFFFF] w-full border rounded-md py-2 pl-9 pr-3 shadow-sm outline-none sm:text-sm h-7" placeholder="Search by Order ID..." type="text" name="search"/>
            </label>
            <div className='flex m-2 h-7'>
                <div className='flex justify-between rounded border-2 mx-2 items-center p-2'>
                    <div className='text-xs'>Sort</div>
                    <img src={sort} className='h-6 p-1' alt="" />
                </div>
                <img className='h-7 rounded p-1 border-2' src={download} alt="" />
            </div>
        </div>
        

        <div className="relative overflow-x-auto mx-3">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 bg-[#F2F2F2] ">
                    <tr>
                        <th scope="col" className="px-3 font-semibold py-3">
                            Order ID
                        </th>
                        <th scope="col" className="px-3  font-semibold  py-3">
                            Order date
                        </th>
                        <th scope="col" className="px-3 py-3  font-semibold text-right">
                            Order amount
                        </th>
                        <th scope="col" className="px-3 py-3  font-semibold text-right">
                            Transaction fees
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((obj) => {
                        return <>
                            <tr className="bg-white border-b">
                                <th scope="row" className="px-3 py-3 text-sm text-left font-normal text-[#146EB4] ">
                                    {obj.id}
                                </th>
                                <td className="px-3 py-3 font-normal text-sm text-gray-800">
                                    {obj.date}
                                </td>
                                <td className="px-3 py-3 font-normal text-sm text-gray-950 text-right">
                                    {obj.amt}
                                </td>
                                <td className="px-3 py-3 font-normal text-sm text-gray-950 text-right">
                                    {obj.fee}
                                </td>
                            </tr>
                        </>
                    })}
                </tbody>
            </table>
        </div>
        <Pagination/>
    </div>
};

export default TransactionTable;
