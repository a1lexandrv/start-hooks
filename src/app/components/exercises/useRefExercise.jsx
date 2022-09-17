import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
const UseRefExercise = () => {
    const renderCount = useRef();

    const changeButton = () => {
        renderCount.current.style.height = "150px";
        renderCount.current.style.width = "80px";
        renderCount.current.innerText = "text";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <Divider />
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                ref={renderCount}
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <button className="btn btn-primary" onClick={changeButton}>
                    Блок
                </button>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
