type Props = {
    pagination: {
        page: number;
        totalPages: number;
        total: number;
    }
    setPage: (page: number) => void;
}

const TableFooter = ({ pagination, setPage }: Props) =>{
    return (
        <div className="flex justify-between text-xs items-center">
            <p className="">
  Showing {(pagination.page - 1) * 10 + 1} to {Math.min(pagination.page * 10, pagination.total)} of {pagination.total} results (Page {pagination.page} of {pagination.totalPages})
</p>
            <div className=" flex space-x-1">
                {Array.from({ length: pagination.totalPages }, (_, i) => {
                    const pageNum = i + 1;
                    return (
                        <button
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`px-2 py-1 rounded border border-[#4b9bbf] ${
                            pagination.page === pageNum
                            ? "bg-[#4b9bbf] text-white"
                            : "bg-[white] hover:bg-gray-300"
                        }`}
                        >
                        {pageNum}
                        </button>
                    );
                    })}
            </div>
        </div>
    )
}

export default TableFooter;