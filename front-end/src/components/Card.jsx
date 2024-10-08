const Card = ({ productName, price }) => {
  return (
    <div className="shadow-xl card bg-base-100 w-96">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <div className="flex justify-between">
          <p>{price}$</p>
        </div>
      </div>
      <div className="justify-end p-4 pt-0 card-actions">
        <button className="btn">Delete</button>
        {/* <button onClick={()=>}></button> */}
      </div>
    </div>
  );
};

export default Card;
