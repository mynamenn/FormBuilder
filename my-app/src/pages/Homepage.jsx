import React, { useState } from "react";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
import { data } from "../data";

const Homepage = ({ status }) => {
    const [items, setItems] = useState(data);

    // onDrop is executed when a draggable element is dropped into it
    const onDrop = (item, monitor, status) => {
        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status });
            return [...newItems];
        });
        console.log(items);
    };

    // Move the element to dragged index
    // New items doesn't contain the dragged element
    // Dragged item is added to newItems according to hoverIndex
    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return [...newItems];
        });
        
    };

    return (
        (status === "Sidebar") ?
            <DropWrapper onDrop={onDrop} status={status}>
                <Col>
                    {items.filter(i => i.status === status)  // Put field in either main or side
                        .map((i, idx) =>
                            <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={status} />
                        )
                    }
                </Col>

            </DropWrapper>

            :

            <div key={status} className={"col-wrapper"}>
                <DropWrapper onDrop={onDrop} status={status}>
                    <Col>
                        {items.filter(i => i.status === status)  // Put field in either main or side
                            .map((i, idx) =>
                                <div>
                                    <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={status} />
                                </div>
                            )
                        }
                    </Col>
                </DropWrapper>
            </div>

    );
};

export default Homepage;