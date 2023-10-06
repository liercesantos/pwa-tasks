import React from "react";
import {Bars} from "react-loader-spinner";

const AppLoader = () => {

  return(
    <div className={"app-loader"}>
      <Bars
        height="80"
        width="80"
        color="#FFF"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass="#FFF"
        visible={true}
      />
      <div className={"app-loader-description"}>
        Aguarde enquanto carregamos os recursos...
      </div>
    </div>
  );
}

export default AppLoader;
