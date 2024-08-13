interface Props {
  className?: string;
}

export function LogoWhite(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="20px"
      height="20px"
      className="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
    >
      <g>
        <path d="M -0.5,-0.5 C 128.833,-0.5 258.167,-0.5 387.5,-0.5C 448.144,69.147 508.811,138.814 569.5,208.5C 630.906,139.431 691.573,69.7639 751.5,-0.5C 881.167,-0.5 1010.83,-0.5 1140.5,-0.5C 1140.5,344.833 1140.5,690.167 1140.5,1035.5C 1310.17,1035.5 1479.83,1035.5 1649.5,1035.5C 1649.5,1122.83 1649.5,1210.17 1649.5,1297.5C 1350.5,1297.5 1051.5,1297.5 752.5,1297.5C 752.667,1013.83 752.5,730.166 752,446.5C 693.657,513.673 635.157,580.673 576.5,647.5C 513.676,575.874 450.843,504.207 388,432.5C 387.5,720.833 387.333,1009.17 387.5,1297.5C 258.167,1297.5 128.833,1297.5 -0.5,1297.5C -0.5,864.833 -0.5,432.167 -0.5,-0.5 Z" />
      </g>
    </svg>
  );
}
