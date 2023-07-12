import { useState } from "react";

const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(4);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const handlePageChange = (pageNumber, data) => {
        if (currentPage <= data/pageSize && pageNumber>0) {
            setCurrentPage(pageNumber);
        }else if(pageNumber<=0){
            setCurrentPage(Math.ceil(data/pageSize))
        }   
        else {
            setCurrentPage(1);
        }



    };


    return { startIndex, endIndex, handlePageChange, currentPage,pageSize };
}

export default usePagination;