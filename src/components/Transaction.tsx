import TransactionTable from "./TransactionTable";

const Transaction = () => {
    return <div className="row-span-9 bg-slate-100 p-3">
        <div className="text-lg font-semibold m-2">Transaction | This Month</div>
        <TransactionTable />
    </div>
};

export default Transaction;