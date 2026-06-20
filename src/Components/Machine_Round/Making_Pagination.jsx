import React, { useEffect, useState } from "react";
import "../../styles/making_pagination.css";

const ProductCard = ({ image, title }) => {
  return (
    <div className="product_card">
      <img src={image} alt={title} className="product_image" />
      <span>{title}</span>
    </div>
  );
};

const Making_Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const totalProducts = products?.length;
  const pageSize = 10;
  const totalPages = Math.ceil(totalProducts / pageSize);
  const start = currentPage * pageSize;
  const end = start + pageSize;

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products/?limit=500");
    const json = await res.json();
    setProducts(json?.products);
  };

  const handlePageChange = (n) => {
    console.log("page no -> ", n);
    setCurrentPage(n);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (products?.length === 0) {
    return <div> No Data Available</div>;
  }
  console.log("total no of pages -> ",totalPages)

  return (
    <div className="product_component">
      <h1>Pagination Component</h1>
      <div className="pagination_container">
        <button
          className="page_number"
          disabled={currentPage === 0}
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
          }}
          className="left_arrow"
        >
          ⬅️
        </button>
        {[...Array(totalPages).keys()].map((n, index) => (
          <span
            key={n}
            style={{
              backgroundColor: currentPage === index ? "lightcyan" : "",
            }}
            className="page_number"
            onClick={() => handlePageChange(n)}
          >
            {n}
          </span>
        ))}
        <button
          disabled={currentPage === totalPages-1}
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
        >
          ➡️
        </button>
      </div>
      <div className="product_container">
        {products?.slice(start, end).map((product) => (
          <ProductCard
            key={product.id}
            image={product.thumbnail}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Making_Pagination;
