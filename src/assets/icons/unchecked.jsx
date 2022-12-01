import * as React from "react"

const UncheckedIcon = (props) => (
    <svg
        width={22}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect
            x={1}
            y={1}
            width={20}
            height={20}
            rx={1}
            fill="#FAF0DE"
            stroke="#5093B3"
            strokeWidth={2}
        />
    </svg>
)

export default UncheckedIcon;
