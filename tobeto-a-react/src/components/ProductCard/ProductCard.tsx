import React from "react";
import { ProductModel } from "../../models/responses/ProductModel";
import { Link } from "react-router-dom";
import ProductService from "../../services/productService";
import { HttpStatusCode } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../features/cart/cartSlice";

type Props = {
  product: ProductModel;
  onDelete: (id: number) => void;
  title?: string; // (opsiyonel)
};
// Formik - YUP
const ProductCard = (props: Props) => {
  const deleteProduct = async () => {
    try {
      let response = await ProductService.delete(250);
      if (response.status == HttpStatusCode.Ok) {
        props.onDelete(props.product.id);
        alert("Veri başarıyla silindi.");
      }
    } catch (e) {
      alert("Veri silinemedi");
    }
  };

  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(addItem(props.product));
  };

  const selector = useSelector((state: any) => state.cart.items);
  const deleteProductFromCart = (id: any) => {
    dispatch(removeItem(id));
  };

  console.log(selector.id);

  return (
    <div className="card" key={selector.id}>
      <img src={props.product.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <p>{props.product.price}₺</p>
        <Link
          to={"/product-detail/" + props.product.id}
          className="btn btn-primary"
        >
          Details
        </Link>
        <button className="btn btn-secondary" onClick={addProductToCart}>
          Sepete Ekle
        </button>
        <button
          onClick={() => {
            deleteProductFromCart(selector.id);
          }}
          className="btn btn-danger"
        >
          Sil
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
