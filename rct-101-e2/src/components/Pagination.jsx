import React,{useState, useEffect} from "react";
import axios from "axios";

const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const getTodo = async () => {
        let res = await axios.get(`http://localhost:8080/products?_page=${page}&_limit=3`);
        console.log(res);
        setTotalPage(Number(res.headers["x-total-count"]));
    };
    getTodo();
}, [page]);

  return (

    <div className='page-button'>
      <button
        disabled={page <= 1}
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
          setPage(page - 1)
        }}>
        {`Prev`}
      </button>

      <button
        disabled={totalPage < page * 3}
        onClick={() => setPage(page + 1)}>
        {`Next`}
      </button>
    </div>
  );
};

export default Pagination;