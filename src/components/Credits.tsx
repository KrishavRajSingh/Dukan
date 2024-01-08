import wallet from '../assets/wallet.png';

const Credits = () => {
    return <div className="bg-[#343c52] m-2 flex items-center rounded">
        <img src={wallet} alt="" className='h-7 bg-[#485164] m-3 rounded'/>
        <div>
            <div className='text-sm text-gray-300'>Available credits</div>
            <div>222.10</div>
        </div>
    </div>
}

export default Credits;