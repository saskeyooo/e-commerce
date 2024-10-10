import { BACKEND_ENDPOINT } from "@/constant/constant";
import { EditModal } from "./EditModal";

export const Card = ({
  product,
  selectedProduct,
  setSelectedProduct,
  setProducts,
}) => {
  const { productName, description, price, image_url } = product;

  const handleDelete = async (id) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        `${BACKEND_ENDPOINT}/product/${id}`,
        options
      ); // Ensure the URL is correct
      const data = await response.json();

      setProducts((prevProducts) =>
        prevProducts.filter((prod) => data?.product?.id !== prod?.id)
      );
      document.getElementById("my_modal_2").close();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedProduct),
      };
      const response = await fetch(`${BACKEND_ENDPOINT}/product`, options);
      const data = await response.json();
      setProducts(data.products);
      document.getElementById("my_modal_2").close();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  return (
    <div className="bg-white shadow-xl card w-96">
      <figure>
        <img src={image_url} alt={productName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <div className="flex justify-between">
          <p>{description}</p>
          <p>{price}$</p>
        </div>
      </div>
      <div className="justify-end p-4 pt-0 card-actions">
        <EditModal
          product={product}
          setSelectedProduct={setSelectedProduct}
          selectedProduct={selectedProduct}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
        <button onClick={() => handleDelete(product?.id)} className="btn ">
          Delete
        </button>
        <input type="" />
      </div>
    </div>
  );
};
