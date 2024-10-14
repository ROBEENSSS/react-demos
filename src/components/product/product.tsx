import React, {FC} from 'react';
import {IProductModel} from "../models/IProductModel";

type TypeProps = {item: IProductModel}

const Product:FC<TypeProps> = ({item}) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <p>{item.sku}</p>
            <p>{item.id}</p>
            <p>{item.brand}</p>
            <p>{item.availabilityStatus}</p>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <h4>Rating: {item.rating}</h4>
            <img src={item.thumbnail} alt={item.title}/>
        </div>
    );
};

export default Product;