import React from "react";
import { useDrop } from "react-dnd";
import ITEM_TYPE from "../data/types";
import { statuses } from "../data";

const DropWrapper = ({ onDrop, children, status }) => {
    const [{ isOver }, drop] = useDrop({
        accept: ITEM_TYPE,

        // Specify whether the drop target is able to accept the item
        canDrop: (item, monitor) => {
            const itemIndex = statuses.findIndex(si => si.status === item.status);
            const statusIndex = statuses.findIndex(si => si.status === status);
            return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
        },

        //Called when a compatible item is dropped on the target.
        drop: (item, monitor) => {
            onDrop(item, monitor, status);
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    // Passes prop(true or false) to Homepage.jsx
    // True indicates element can be dropped onto it
    return (
        <div ref={drop} className={"drop-wrapper"}>
            {React.cloneElement(children, { isOver })}
        </div>
    )
};

export default DropWrapper;