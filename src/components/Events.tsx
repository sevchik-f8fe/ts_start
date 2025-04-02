import React, { ChangeEvent, FunctionComponent, useRef, useState } from "react";

const Events: FunctionComponent = () => {
    const [value, setValue] = useState<string>('');
    const [state, setState] = useState<boolean>(false);


    const input = useRef<HTMLInputElement>(null)

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(input.current?.value);
        // console.log(value);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setState(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setState(false);
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setState(false)
    }

    const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setState(true)
    }

    return (
        <div>
            <input ref={input} type="text" placeholder="pizda" />
            <input onChange={onChangeHandle} value={value} type="text" placeholder="ok" />
            <button onClick={onClickHandler}>pizda</button>
            <div onDrag={dragHandler} draggable style={{ background: 'red', width: '50px', height: '50px' }}></div>
            <div onDragLeave={dragLeaveHandler} onDragOver={onDragOverHandler} onDrop={dropHandler} style={{ background: state ? 'blue' : 'red', width: '50px', height: '50px', marginTop: '1em' }}></div>
        </div>
    );
}

export default Events;