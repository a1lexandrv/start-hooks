import React from "react";
import CardWrapper from "../../common/Card";

const withFunction = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth", "token");
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        localStorage.setItem("auth", "token");
    };
    return (
        <CardWrapper>
            <Component
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
                {...props}
            />
        </CardWrapper>
    );
};

export default withFunction;
