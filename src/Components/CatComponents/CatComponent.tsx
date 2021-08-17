import React, { useEffect, useState } from "react";
import cat from '../../cat.png';
import popcat from '../../pop-cat.png';

interface ItemProps {
    clickNumber: number;
}

const CatComponent: React.FC<ItemProps> = props => {
    const [catImg, setCatImg] = useState(popcat);
    const { clickNumber } = props;

    useEffect(() => {
        if (catImg == cat)
            setCatImg(popcat);
        else
            setCatImg(cat);
    }, [props.clickNumber]);

    return (
        <div>
            <img src={catImg} />
        </div>
    );
};

export default CatComponent;