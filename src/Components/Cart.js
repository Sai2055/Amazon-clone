import cartImg from "../images/fridge.jpg";
import pairImg from "../images/ac.jpg";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
export default function Cart() {
  return (
    <div className="shopping-main-container">
      <div className="Shopping-cart-container">
        <div className="cart-items">
          <div className="cart-header">
            <div className="heading">Shopping Cart</div>
            <div className="des-section">
              <span className="description">No item selected.</span>
              <span className="description2">Select all the items</span>
            </div>
            <span className="price-heading">Price</span>
          </div>
          <div className="cart-body">
            <div className="cart-item1">
              <div className="check-option">
                <input type="checkbox" />
              </div>
              <div className="img-section">
                <img src={cartImg} alt="" />
              </div>
              <div className="item-content">
                <div className="item-header">
                  <div className="heading-section">
                    Pigeon Aster Gas Stove 2 Burner with High
                  </div>
                  <div className="price-section">₹1,499.00</div>
                </div>
                <div className="item-body">
                  <div className="stock-section">In stock</div>
                  <div className="shipping-section">
                    Eligible for FREE Shipping
                  </div>
                  <div className="gift-section">
                    <input type="checkbox" className="checkbox-styl" />
                    <div className="gift-section">This will be a gift</div>
                    <div className="more-section">Learn more</div>
                  </div>
                </div>
                <div className="item-footer">
                  <div className="item-quantity">
                    <div className="delete-icon">
                      <DeleteOutlinedIcon className="iconstyles" />
                    </div>
                    <div className="quantity-value">5</div>
                    <div className="plus-icon">
                      <AddOutlinedIcon className="iconstyles" />
                    </div>
                  </div>
                  <div className="item-delete">Delete</div>
                  <div className="item-save">Save for later</div>
                  <div className="item-more"> See more like this</div>
                </div>
              </div>
              <div className="price-section"></div>
            </div>
            <div className="cart-item1">
              <div className="check-option">
                <input type="checkbox" />
              </div>
              <div className="img-section">
                <img src={cartImg} alt="" />
              </div>
              <div className="item-content">
                <div className="item-header">
                  <div className="heading-section">
                    Pigeon Aster Gas Stove 2 Burner with High
                  </div>
                  <div className="price-section">₹1,499.00</div>
                </div>
                <div className="item-body">
                  <div className="stock-section">In stock</div>
                  <div className="shipping-section">
                    Eligible for FREE Shipping
                  </div>
                  <div className="gift-section">
                    <input type="checkbox" className="checkbox-styl" />
                    <div className="gift-section">This will be a gift</div>
                    <div className="more-section">Learn more</div>
                  </div>
                </div>
                <div className="item-footer">
                  <div className="item-quantity">
                    <div className="delete-icon">
                      <DeleteOutlinedIcon className="iconstyles" />
                    </div>
                    <div className="quantity-value">5</div>
                    <div className="plus-icon">
                      <AddOutlinedIcon className="iconstyles" />
                    </div>
                  </div>
                  <div className="item-delete">Delete</div>
                  <div className="item-save">Save for later</div>
                  <div className="item-more"> See more like this</div>
                </div>
              </div>
              <div className="price-section"></div>
            </div>
            <div className="cart-item1">
              <div className="check-option">
                <input type="checkbox" />
              </div>
              <div className="img-section">
                <img src={cartImg} alt="" />
              </div>
              <div className="item-content">
                <div className="item-header">
                  <div className="heading-section">
                    Pigeon Aster Gas Stove 2 Burner with High
                  </div>
                  <div className="price-section">₹1,499.00</div>
                </div>
                <div className="item-body">
                  <div className="stock-section">In stock</div>
                  <div className="shipping-section">
                    Eligible for FREE Shipping
                  </div>
                  <div className="gift-section">
                    <input type="checkbox" className="checkbox-styl" />
                    <div className="gift-section">This will be a gift</div>
                    <div className="more-section">Learn more</div>
                  </div>
                </div>
                <div className="item-footer">
                  <div className="item-quantity">
                    <div className="delete-icon">
                      <DeleteOutlinedIcon className="iconstyles" />
                    </div>
                    <div className="quantity-value">5</div>
                    <div className="plus-icon">
                      <AddOutlinedIcon className="iconstyles" />
                    </div>
                  </div>
                  <div className="item-delete">Delete</div>
                  <div className="item-save">Save for later</div>
                  <div className="item-more"> See more like this</div>
                </div>
              </div>
              <div className="price-section"></div>
            </div>
            <div className="cart-item1">
              <div className="check-option">
                <input type="checkbox" />
              </div>
              <div className="img-section">
                <img src={cartImg} alt="" />
              </div>
              <div className="item-content">
                <div className="item-header">
                  <div className="heading-section">
                    Pigeon Aster Gas Stove 2 Burner with High
                  </div>
                  <div className="price-section">₹1,499.00</div>
                </div>
                <div className="item-body">
                  <div className="stock-section">In stock</div>
                  <div className="shipping-section">
                    Eligible for FREE Shipping
                  </div>
                  <div className="gift-section">
                    <input type="checkbox" className="checkbox-styl" />
                    <div className="gift-section">This will be a gift</div>
                    <div className="more-section">Learn more</div>
                  </div>
                </div>
                <div className="item-footer">
                  <div className="item-quantity">
                    <div className="delete-icon">
                      <DeleteOutlinedIcon className="iconstyles" />
                    </div>
                    <div className="quantity-value">5</div>
                    <div className="plus-icon">
                      <AddOutlinedIcon className="iconstyles" />
                    </div>
                  </div>
                  <div className="item-delete">Delete</div>
                  <div className="item-save">Save for later</div>
                  <div className="item-more"> See more like this</div>
                </div>
              </div>
              <div className="price-section"></div>
            </div>
            <div className="cart-item1">
              <div className="check-option">
                <input type="checkbox" />
              </div>
              <div className="img-section">
                <img src={cartImg} alt="" />
              </div>
              <div className="item-content">
                <div className="item-header">
                  <div className="heading-section">
                    Pigeon Aster Gas Stove 2 Burner with High
                  </div>
                  <div className="price-section">₹1,499.00</div>
                </div>
                <div className="item-body">
                  <div className="stock-section">In stock</div>
                  <div className="shipping-section">
                    Eligible for FREE Shipping
                  </div>
                  <div className="gift-section">
                    <input type="checkbox" className="checkbox-styl" />
                    <div className="gift-section">This will be a gift</div>
                    <div className="more-section">Learn more</div>
                  </div>
                </div>
                <div className="item-footer">
                  <div className="item-quantity">
                    <div className="delete-icon">
                      <DeleteOutlinedIcon className="iconstyles" />
                    </div>
                    <div className="quantity-value">5</div>
                    <div className="plus-icon">
                      <AddOutlinedIcon className="iconstyles" />
                    </div>
                  </div>
                  <div className="item-delete">Delete</div>
                  <div className="item-save">Save for later</div>
                  <div className="item-more"> See more like this</div>
                </div>
              </div>
              <div className="price-section"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="payment&pair-section">
        <div className="final-payment-section">
          <div className="delivery-note">
            <div className="tick-icon">
              <CheckCircleRoundedIcon />
            </div>
            <div className="deliver-description">
              <p>Part of your order qualifies for FREE Delivery</p>. Choose{" "}
              <span className="for-green">FREE Delivery </span>
              option at checkout.
            </div>
          </div>
          <div className="payment-amount">
            <div className="payment-styl">
              <p> Subtotal (29 items):</p>
              <span className="amount-value">&#8377;16,800.00</span>
            </div>
            <div className="gift-des-section">
              <input type="checkbox" />
              <div className="des">This order contains a gift</div>
            </div>
            <div className="proceed-btn">
              <button>Proceed to Buy</button>
            </div>
            <div className="Emi-sect">EMI Available</div>
          </div>
        </div>
        <div className="paring-section">
          <div className="pair-heading">Pair with your cart</div>
          <div className="pair-content">
            <div className="pair-img">
              <img src={pairImg} alt="" />
            </div>
            <div className="pair-aside">
              <div className="pair-description">
                Butterfly Curve 3 Litres Pressure Cooker | Outer Lid Quality
                Stainless Steel | Induction and Gas Stove Compatible | ISI Certi
                Butterfly Curve 3 Litres Pressure Cooker | Oute
              </div>
              <div className="pair-rating">
                <div className="pair-stars">★★★★☆</div>
                <div className="pair-rating-count"> 18,086</div>
              </div>
              <div className="pair-price">&#8377;16,800</div>
              <div className="pair-addCart-btn">Add to cart</div>
            </div>
          </div>
          {/* *****************************second item******************** */}
          <div className="pair-content">
            <div className="pair-img">
              <img src={pairImg} alt="" />
            </div>
            <div className="pair-aside">
              <div className="pair-description">
                Butterfly Curve 3 Litres Pressure Cooker | Outer Lid Quality
                Stainless Steel | Induction and Gas Stove Compatible | ISI Certi
                Butterfly Curve 3 Litres Pressure Cooker | Oute
              </div>
              <div className="pair-rating">
                <div className="pair-stars">★★★★☆</div>
                <div className="pair-rating-count"> 18,086</div>
              </div>
              <div className="pair-price">&#8377;16,800</div>
              <div className="pair-addCart-btn">Add to cart</div>
            </div>
          </div>

          <div className="pair-content">
            <div className="pair-img">
              <img src={pairImg} alt="" />
            </div>
            <div className="pair-aside">
              <div className="pair-description">
                Butterfly Curve 3 Litres Pressure Cooker | Outer Lid Quality
                Stainless Steel | Induction and Gas Stove Compatible | ISI Certi
                Butterfly Curve 3 Litres Pressure Cooker | Oute
              </div>
              <div className="pair-rating">
                <div className="pair-stars">★★★★☆</div>
                <div className="pair-rating-count"> 18,086</div>
              </div>
              <div className="pair-price">&#8377;16,800</div>
              <div className="pair-addCart-btn">Add to cart</div>
            </div>
          </div>

          <div className="pair-content">
            <div className="pair-img">
              <img src={pairImg} alt="" />
            </div>
            <div className="pair-aside">
              <div className="pair-description">
                Butterfly Curve 3 Litres Pressure Cooker | Outer Lid Quality
                Stainless Steel | Induction and Gas Stove Compatible | ISI Certi
                Butterfly Curve 3 Litres Pressure Cooker | Oute
              </div>
              <div className="pair-rating">
                <div className="pair-stars">★★★★☆</div>
                <div className="pair-rating-count"> 18,086</div>
              </div>
              <div className="pair-price">&#8377;16,800</div>
              <div className="pair-addCart-btn">Add to cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
