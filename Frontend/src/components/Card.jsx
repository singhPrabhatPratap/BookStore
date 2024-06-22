import React from "react";

export default function Card({ item }) {
//   console.log(item);
  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:border dark:text-white">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.Category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-end"></div>
          <button className="btn btn-primary">PRICE: {item.price} RS</button>
          <button className="btn btn-primary">BUY</button>
        </div>
      </div>
    </div>
  );
}
