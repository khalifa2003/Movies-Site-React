import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../redux/actions/movieAction";

const MyPagination = () => {
  const [pageCount, setPageCount] = useState(0);
  const pages = useSelector((state) => state.pageCount);

  const dispatch = useDispatch();
  useEffect(() => {
    setPageCount(pages);
  }, []);

  const handlePageClick = (data) => {
    dispatch(getPage(data.selected + 1));
  };

  return (
    <div className="m-5">
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي>"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< السابق"
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default MyPagination;
