import question from '../assets/question.png';
import search from '../assets/search.png';

const NavBar = () => {
    return <div className="flex justify-between p-1 bg-white">
        <div className="flex items-center">
            <div className="m-2 font-bold text-lg">Payouts</div>
            <div className="m-2 text-black flex items-center">
                <img src={question} className='h-4 m-2' alt="" />
                <div className='text-xs text-gray-500'>How it works</div>
            </div>
        </div>
        {/* <div className='flex bg-gray-100 items-center'>
            <img src={search} className='h-4' alt="" />
            <input type="text" className="bg-inherit border-gray-300 outline-none" name="" id="" />
        </div> */}
        <label className="relative block flex items-center">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <img className="h-5 w-5 fill-slate-300" src={search} alt="" />
            </span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
        </label>
        <div className='flex'>
            <div>chat</div>
            <div>arrow</div>
        </div>
    </div>
};

export default NavBar;