import React from "react";
import Header from "./header";
import Bottom from "./bottom";

const Container = (props) => {
    return (
        <div className="App">
            <div className={"container"}>
                <Header title={props.title} />

                {props.component}

                <Bottom />
            </div>
        </div>
    );
}

export default Container;
