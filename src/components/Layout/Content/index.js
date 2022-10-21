import React from "react";
import ListProducts from "../../ListProducts";

const Content = () => {
    return (
        <div className="content">
            <div className="content__header">
                <h2>Delicious Food, Delivered To You</h2>
                <p>
                    Choose your meal from our broad selection of available meals
                    and enjoy a delicious lunch or dinner at home.
                </p>
                <p>
                    All our meals are cooked with high-quality ingredients,
                    just-in-time and of course by experienced chefs!
                </p>
            </div>

            <ListProducts />
        </div>
    );
};

export default Content;
