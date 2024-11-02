import * as React from "react";
const BgIcon = () => (
  <svg
    width={1496}
    height={1002}
    viewBox="0 0 1496 1002"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="position-absolute d-none"
    style={{
      filter: "blur(44px)",
      zIndex: 1,
      transition: "0.5s linear",
      top: "0%",
      left: "10%",
    }}
  >
    <g opacity={0.25} filter="url(#filter0_f_2_3393)">
      <ellipse
        cx={950.434}
        cy={354.266}
        rx={145.566}
        ry={143.778}
        fill="#FE8704"
      />
      <ellipse
        cx={542.566}
        cy={457.759}
        rx={145.566}
        ry={143.778}
        fill="#F020D8"
      />
      <ellipse
        cx={783.067}
        cy={457.759}
        rx={145.566}
        ry={143.778}
        fill="#91B454"
      />
      <ellipse
        cx={698.681}
        cy={275.778}
        rx={145.566}
        ry={143.778}
        fill="#FF611D"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_2_3393"
        x={-3}
        y={-268}
        width={1499}
        height={1269.54}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={200}
          result="effect1_foregroundBlur_2_3393"
        />
      </filter>
    </defs>
  </svg>
);
export default BgIcon;
