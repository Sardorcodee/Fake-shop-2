import React, { useState } from "react";
import Header from "../Components/Header";
import useDetails from "../Hooks/useDetails";
const Details = () => {
  const [Products] = useDetails();
  
  return (
    <>
      <Header />
      <div className="container Info bg-white py-5 px-4 mb-2 border border-primary mt-5 position-relative">
        {Products.length === 0 && (
          <>
            <div className="placeholder-glow">
              <span className="placeholder col-6"></span>
              <span className="placeholder w-75"></span>
              <span className="placeholder" style={{ width: "25em" }}></span>
            </div>
          </>
        )}
        {Products.length === undefined && (
          <div className="row">
            <div className="col-12 col-md-5">
              <img
                style={{ width: "100%", height: "22em", objectFit: "contain" }}
                src={Products.image}
                alt="men's clothing"
              />
            </div>
            <div className="col-12 col-md-5 d-flex flex-column gap-3">
              <h2>{Products.title}</h2>
              <h3>
                <strong>Category:</strong>
                {Products.category}
              </h3>
              <p>
                <strong>description:</strong>
                {Products.description}
              </p>
              <div className="d-flex justify-content-between">
                <h5>
                  ⭐️{Products.rating?.rate} / {Products.rating?.count}
                </h5>
              </div>
              <h3 className="text-warning">
                <strong className="text-dark">Price:</strong>
                {Products.price}
              </h3>
            </div>
          </div>
        )}
        <a
          className="btn bg-success text-white px-4 py-3 fs-4 mt-5 m-auto position-absolute"
          href="/"
          style={{
            left: "50%",
            transform: " translate(-50%, -50%)",
            bottom: "-5em",
          }}
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i> Orqaga
        </a>
      </div>
    </>
  );
};

export default Details;
