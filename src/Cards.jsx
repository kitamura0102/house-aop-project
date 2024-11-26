import React from "react";
export default function Cards(props) {
  return (
    
    <section className="card-container flex justify-center items-center	flex-col  h-largo">
        
      <div className="card-title flex justify-between  w-2/3 items-center h-20">
        <div className="main-text">
          <h2 className="mb-2">Homes For You</h2>
          <p>Based on homes you recently viewed</p>
        </div>
        <div className="title-btn">
          <button> {"<"} </button>
          <button>{">"}</button>
        </div>
      </div>
      <div className="card w-1/5 rounded shadow-2xl">
        <div className="card-img">
          <img
            src="./src/assets/imagenRandom1.jpg"
            alt=""
            className="w-screen h-56 rounded-t"
          />
        </div>
        <div className="card-info ml-2 p-1">
          <h3 className=" mt-1 text-lg font-bold"> $ 499,900.00</h3>
          <div className="house-info mt-1">
            <ul className="flex gap-3">
              <li>
                <span className="font-bold">3</span> beds |
              </li>
              <li>
                <span className="font-bold">2</span> bath |
              </li>
              <li>
                <span className="font-bold">1232</span> sqft{" "}
              </li>
            </ul>
          </div>
          <h4 className="address mt-2"> 277 Skyline Dr, Staten Island, NY 10304</h4>
          <p className="house-type mt-1">
            Single Family Residence, Residential, Townhouse
          </p>
        </div>
      </div>
    </section>
  );
}
