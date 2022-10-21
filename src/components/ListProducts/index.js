import axios from "axios";
import React, { useContext, useEffect } from "react";
import { dataContext } from "../../provider";

const ListProducts = () => {
    const { setLists, lists, setLoad, load, setValues, handleAdd } =
        useContext(dataContext);

    //lấy api
    useEffect(() => {
        (async function () {
            const res = await axios({
                method: "GET",
                url: "https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals",
            });

            setLists(res.data);
            setLoad(!load);
        })();
    }, []);

    // render list
    const newLists = lists.slice(0, 4);
    const renderList = newLists.map((item) => {
        return (
            <div key={item.id}>
                <div className="content__product--item">
                    <div className="item__image">
                        <img src={item.image} width="150" height="96px" />
                    </div>
                    <div className="item__detail">
                        <h5>{item.name}</h5>
                        <p className="item__detail--desc">{item.description}</p>
                        <p className="item__detail--price">${item.price}</p>
                    </div>
                    <div className="item__active">
                        <div className="item__title">
                            <span>Amount: </span>
                            <input
                                defaultValue="0"
                                type="number"
                                onChange={(e) => setValues(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={() => handleAdd(item)}
                            className="btn__add"
                        >
                            + Add
                        </button>
                    </div>
                </div>
                <hr />
            </div>
        );
    });

    return (
        <div>
            {load ? (
                <h2 className="load">Loading ...</h2>
            ) : (
                <div className="content__product">{renderList}</div>
            )}
        </div>
    );
};

export default ListProducts;
