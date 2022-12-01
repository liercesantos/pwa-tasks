import * as React from "react"

const RoundUncheckedIcon = (props) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle
            cx={12}
            cy={12}
            r={11}
            fill="#FAF0DE"
            stroke="#5093B3"
            strokeWidth={2}
        />
    </svg>
)

export default RoundUncheckedIcon;
