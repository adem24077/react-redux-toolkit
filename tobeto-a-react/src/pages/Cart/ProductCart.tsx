import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CardMeta,
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
} from "semantic-ui-react";
import { removeItem } from "../../features/cart/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const ProductCart = () => {
  const cart = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const handleDeleteFromCart = (id: any) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="container pb-5 mb-2">
      <div className="alert alert-info alert-dismissible fade show text-center mb-30">
        <span className="alert-close" data-dismiss="alert"></span>
        <i className="fe-icon-award"></i>&nbsp;&nbsp;With this purchase you will
        earn <strong>2,549</strong> Reward Points.
      </div>
      {cart.map((cartItem: any) => (
        <div
          className="cart-item d-md-flex justify-content-between"
          key={cartItem.product.id}
        >
          <span className="remove-item">
            <button onClick={() => handleDeleteFromCart(cartItem.product.id)}>
              <FontAwesomeIcon icon={faTrash} style={{ color: "#cf4d07" }} />
            </button>
          </span>
          <div className="px-3 my-3">
            <a className="cart-item-product" href="#">
              <div className="cart-item-product-thumb">
                <img src={cartItem.product.thumbnail} alt="Product" />
              </div>
              <div className="cart-item-product-info">
                <h4 className="cart-item-product-title">
                  {cartItem.product.title}
                </h4>
                <span>
                  <strong>Brand:</strong> {cartItem.product.brand}
                </span>
                <span>
                  <strong>Description:</strong> {cartItem.product.description}
                </span>
              </div>
            </a>
          </div>
          <div className="px-3 my-3 text-center">
            <div className="cart-item-label">QUANTITY</div>
            <div className="count-input">
              <select className="form-control">
                <option>{cartItem.quantity}</option>
              </select>
            </div>
          </div>
          <div className="px-3 my-3 text-center">
            <div className="cart-item-label">Price</div>
            <span className="text-xl font-weight-medium">
              ${cartItem.product.price}
            </span>
          </div>
          <div className="px-3 my-3 text-center">
            <div className="cart-item-label">Discount</div>
            <span className="text-xl font-weight-medium">$35.00</span>
          </div>
        </div>
      ))}

      <div className="d-sm-flex justify-content-between align-items-center text-center text-sm-left">
        <form className="form-inline py-2">
          <label className="sr-only">Coupon code</label>
          <input
            className="form-control form-control-sm my-2 mr-3"
            type="text"
            placeholder="Coupon code"
          />
          <button
            className="btn btn-style-1 btn-secondary btn-sm my-2 mx-auto mx-sm-0"
            type="submit"
          >
            Apply Coupon
          </button>
        </form>
        <div className="py-2">
          <span className="d-inline-block align-middle text-sm text-muted font-weight-medium text-uppercase mr-2">
            Subtotal:
          </span>
          <span className="d-inline-block align-middle text-xl font-weight-medium">
            $188.50
          </span>
        </div>
      </div>

      <hr className="my-2" />
      <div className="row pt-3 pb-5 mb-2">
        <div className="col-sm-6 mb-3">
          <a className="btn btn-style-1 btn-secondary btn-block" href="#">
            <i className="fe-icon-refresh-ccw"></i>&nbsp;Update Cart
          </a>
        </div>
        <div className="col-sm-6 mb-3">
          <a
            className="btn btn-style-1 btn-primary btn-block"
            href="checkout-address.html"
          >
            <i className="fe-icon-credit-card"></i>&nbsp;Checkout
          </a>
        </div>
      </div>
    </div>
  );
};
