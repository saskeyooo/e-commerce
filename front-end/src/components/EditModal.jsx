export const EditModal = ({
  selectedProduct,
  handleSubmit,
  handleInputChange,
  setSelectedProduct,
  product,
}) => {
  const handleModalClick = () => {
    document.getElementById("my_modal_2").showModal();
    setSelectedProduct(product);
  };
  return (
    <>
      <button className="btn" onClick={handleModalClick}>
        Edit
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Edit product</h3>
          <div className="flex flex-col gap-3 mt-4">
            <input
              name="productName"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="w-full input input-bordered"
              value={selectedProduct?.productName}
            />
            <input
              name="category"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="w-full input input-bordered"
              value={selectedProduct?.category}
            />
            <input
              name="price"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="w-full input input-bordered"
              value={selectedProduct?.price}
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
