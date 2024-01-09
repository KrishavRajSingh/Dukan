import { useState } from "react";

const Pagination = () => {
    const [page, setPage] = useState(1);
    return <div className="m-3 p-3 flex justify-evenly items-center">
        <div className="border-2 rounded p-1 px-3 text-sm" onClick={()=>{if(page>1)setPage(page-1)}}>Previous</div>
        <div>{page}</div>
        <div className="border-2 rounded p-1 px-3 text-sm" onClick={() => setPage(page+1)}>Next</div>
    </div>
};

export default Pagination;