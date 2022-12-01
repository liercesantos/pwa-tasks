import * as React from "react"
import {useNavigate} from "react-router-dom";

const BackIcon = (props) => {
    const navigate = useNavigate();
    return(
        <div className={"back-icon"}>
            <div onClick={() => {navigate(-1)}}>
                <svg
                    width={25}
                    height={22}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <path
                        d="M.406 7.707 9 .286c.752-.65 1.938-.123 1.938.887V5.08C18.78 5.171 25 6.743 25 14.176c0 3-1.933 5.972-4.069 7.526-.667.485-1.617-.124-1.37-.91 2.213-7.08-1.051-8.96-8.623-9.07v4.294c0 1.01-1.187 1.535-1.938.887L.406 9.48a1.172 1.172 0 0 1 0-1.774Z"
                        fill="#5093B3"
                    />
                </svg>
                <span>Voltar</span>
            </div>
        </div>
    );
}

export default BackIcon;
