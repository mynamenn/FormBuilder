import React, { useState } from "react";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
import { data, statuses } from "../data";

const Homepage = ({status}) => {
    const [items, setItems] = useState(data);

    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status);

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon });
            return [...newItems];
        });
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return [...newItems];
        });
    };

    return (

        // Put this whole div in main 
        <div key={window.status} className={"col-wrapper"}>
            <DropWrapper onDrop={onDrop} status={status}>
                <Col>
                    {items
                        .filter(i => i.status === status)
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