"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [selectProducts, setselectProducts] = useState({});

  return (
    <div className="flex justify-center w-full p-6">
      <div className="max-w-[1200px]">
        <div className="flex justify-end"></div>
        <div>{/* <CreateModals setProducts={setProducts} /> */}</div>
        <div className="grid grid-cols-3 gap-6 mt-6">
          {products?.map((product) => {
            return <Card product={product} setProducts={setProducts} />;
          })}
        </div>
      </div>
    </div>
  );
}
