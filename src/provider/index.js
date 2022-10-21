import React, { createContext, useEffect, useState } from "react";

const dataContext = createContext();

const ProviderContext = ({ children }) => {
    const [lists, setLists] = useState([]);
    const [load, setLoad] = useState(true);
    const [values, setValues] = useState(0);
    const [display, setDisplay] = useState(false);
    const [cartList, setCartList] = useState([]);
    const [qty, setQty] = useState(0);

    const condition = (data) => {
        const exits = cartList.find((item) => item.id === data.id);
        if (exits) {
            cartList.splice(cartList.indexOf(exits), 1);
        }

        const newData = {
            ...data,
            qty: values,
        };
        return newData;
    };

    // handle click add

    const handleAdd = (data) => {
        const item = condition(data);
        setCartList([...cartList, item]);
    };

    //tăng số lượng trong cart

    const increase = (data) => {
        const exits = cartList.find((item) => item.id === data.id);
        if (exits) {
            cartList.splice(cartList.indexOf(exits), 1);
        }
        setQty((prev) => +prev + 1);
        const newData = {
            ...data,
            qty,
        };
        setCartList([...cartList, newData]);
    };

    // giảm số lượng trong cart
    const decrease = (data) => {
        const exits = cartList.find((item) => item.id === data.id);
        if (exits) {
            cartList.splice(cartList.indexOf(exits), 1);
        }
        setQty((prev) => +prev - 1);
        const newData = {
            ...data,
            qty,
        };
        setCartList([...cartList, newData]);
    };

    const value = {
        display,
        setDisplay,
        lists,
        setLists,
        load,
        setLoad,
        values,
        setValues,
        handleAdd,
        cartList,
        setCartList,
        decrease,
        increase,
        qty,
        setQty,
    };

    return (
        <dataContext.Provider value={value}>{children}</dataContext.Provider>
    );
};

export { ProviderContext, dataContext };
