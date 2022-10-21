import React, { useContext } from "react";
import { dataContext } from "../../provider";

const CartDetail = () => {
    const { cartList, decrease, increase } = useContext(dataContext);
    const newCart = cartList.filter((item) => +item.qty !== 0);

    const total = newCart.reduce((curr, prev) => {
        return +curr + +prev.qty * +prev.price;
    }, 0);

    const renderCart = newCart.map((item) => {
        return (
            <div>
                <div className="cart__item">
                    <div>
                        <h3>{item.name}</h3>
                        <div className="detail">
                            <div className="cart__item--price">
                                {item.price} $
                            </div>
                            <div className="cart__item--qty">x {item.qty}</div>
                        </div>
                    </div>
                    <div className="btn">
                        <button
                            onClick={() => increase(item)}
                            className="btn-up"
                        >
                            +
                        </button>
                        <button
                            onClick={() => decrease(item)}
                            className="btn-down"
                        >
                            -
                        </button>
                    </div>
                </div>
                <hr />
            </div>
        );
    });

    return (
        <div className="cart">
            {cartList == "" ? (
                <div className="cart__emtry">
                    <img
                        src="https://loanrotary.com/default/template/img/cart-empty.png"
                        width="350"
                    />
                    <span>Giỏ hàng trống</span>
                </div>
            ) : (
                <div className="list">
                    {renderCart}
                    <div>
                        <h6>
                            total: <span>{total.toFixed(2)} $</span>
                        </h6>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartDetail;
