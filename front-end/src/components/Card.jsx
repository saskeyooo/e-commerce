import { BACKEND_ENDPOINT } from "@/constants/constant";

export const Card = ({
  product,
  selectedProduct,
  setSelectedProduct,
  setProducts,
}) => {
  const { productName, price } = product;

  return (
    <div class="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{productName}</h2>
        <div className="flex justify-between">
          <p>{price}$</p>
        </div>
      </div>
      <div className="justify-end p-4 pt-0 card-actions">
        <button onClick={() => handleDelete(product?.id)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};
