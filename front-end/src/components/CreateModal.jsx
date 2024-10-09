import { BACKEND_ENDPOINT } from "@/constant/constant";
import { useState } from "react";

export const CreateModal = ({ setProducts }) => {
  const [product, setProduct] = useState({
    productName: "",
    category: "",
    price: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      };
      const response = await fetch(`${BACKEND_ENDPOINT}/products`, options);
      const data = await response.json();
      setProducts((prevProducts) => [...prevProducts, data.product]);

      setProduct({
        productName: "",
        category: "",
        price: "",
      });
      document.getElementById("my_modal_1").close();
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Create product
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Create product</h3>
          <div className="flex flex-col gap-3 mt-4">
            <input
              name="productName"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="w-full input input-bordered"
              value={product.productName}
            />
            <input
              name="category"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="w-full input input-bordered"
              value={product.category}
            />
            <input
              name="price"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="w-full input input-bordered"
              value={product.price}
            />
          </div>
          <button className="mt-4 btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </dialog>
    </>
  );
};
