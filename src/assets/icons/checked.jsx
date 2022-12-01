import * as React from "react"

const CheckedIcon = (props) => (
    <svg
        width={22}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g filter="url(#a)">
            <path
                d="M19.643 22H2.357A2.357 2.357 0 0 1 0 19.643V2.357A2.357 2.357 0 0 1 2.357 0h17.286A2.357 2.357 0 0 1 22 2.357v17.286A2.357 2.357 0 0 1 19.643 22ZM9.59 17.185l9.036-9.036a.786.786 0 0 0 0-1.111l-1.111-1.111a.786.786 0 0 0-1.111 0l-7.37 7.369-3.44-3.44a.786.786 0 0 0-1.11 0l-1.112 1.11a.786.786 0 0 0 0 1.111l5.107 5.108a.786.786 0 0 0 1.111 0Z"
                fill="#FD5050"
            />
        </g>
        <defs>
            <filter
                id="a"
                x={0}
                y={0}
                width={22}
                height={22}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dx={2} dy={2} />
                <feGaussianBlur stdDeviation={1} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_53_45" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_53_45"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)

export default CheckedIcon
