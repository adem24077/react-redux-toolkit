import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownDivider,
  Label,
  MenuItem,
  Icon,
  LabelDetail,
} from "semantic-ui-react";

type Props = {};

const Navbar = (props: Props) => {
  const cartState = useSelector((state: any) => state.cart.items);
  //console.log(cartState);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Ana Sayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/product-add"}>
                Ürün Ekle
              </Link>
            </li>
            {cartState.length > 0 && (
              <li className="nav-item">
                <Dropdown item text="Cart Details">
                  <DropdownMenu>
                    {cartState.map((cartItem: any) => (
                      <Label className="mt-7" key={cartItem.product.id}>
                        <Icon name="cart" />
                        {cartItem.product.title}
                        <LabelDetail>{cartItem.quantity}</LabelDetail>
                      </Label>
                    ))}

                    <DropdownDivider />

                    <Dropdown.Item>
                      <Link className="nav-link" to={"/product-cart"}>
                        Go to Cart
                      </Link>
                    </Dropdown.Item>
                  </DropdownMenu>
                </Dropdown>
              </li>
            )}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
