import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Window from "./Window";
import ITEM_TYPE from "../data/types";

const Item = ({ item, index, moveItem, status}) => {
    const ref = useRef(null);
    // A hook to use the current component as a drop target.
    const [, drop] = useDrop({
        // accept wants a string
        accept: ITEM_TYPE,
        // Callback is called when item is hovered over the component
        hover(item, monitor) {
            // If not referring to the current, break
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;   // Item's initial index
            const hoverIndex = index;       // Index of the item being dragged/ current position of item

            if (dragIndex === hoverIndex) {
                return
            }

            // getBoundingClientRect() returns the size of an element and its position relative to the viewport.
            const hoveredRect = ref.current.getBoundingClientRect();    // Size of hovered item
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;   // Midpoint of hovered item
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            // Since item is dragged from top to lower, check if item'Y < current hovering item'Y
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            // Item is dragged from bottom to top
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Item is moved
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    // A hook to use the current component as a drag-source.
    const [{ isDragging }, drag] = useDrag({
        item: { type: ITEM_TYPE, ...item, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const [show, setShow] = useState(false);

    const onOpen = () => setShow(true);    // For modal

    const onClose = () => setShow(false);

    drag(drop(ref));

    // Add if else to check status to know whether to show form or not
    // Remove window for main 

    return (
        (status === "Form") ?
        <Fragment>
            <div
                ref={ref}
                style={{ opacity: isDragging ? 0 : 1 }}
                className={"item"}
            >
                <label className={"item-title"} for={item.content}>{item.content}</label>
                <input type="text" id={item.content} name={item.content} placeholder={`Please enter your ${item.content.toLowerCase()}`} required />
            </div>
        </Fragment>
        :
        <Fragment>
            <div
                ref={ref}
                style={{ opacity: isDragging ? 0 : 1 }}
                className={"item-side"}
                onClick={onOpen}
            >
                <label className={"item-title"} for={item.content}>{item.content}</label>
            </div>
            <Window
                item={item}
                onClose={onClose}
                show={show}
            />
        </Fragment>
    );
}

export default Item;