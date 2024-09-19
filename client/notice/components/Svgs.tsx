import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Path, Defs, LinearGradient, Stop, Circle, G, Line } from 'react-native-svg';

interface SvgProps {
  width: number;
  height: number;
}

interface CombinedSvgProps extends SvgProps {
  top: number;
  left: number;
  buttonWidth: number;
  buttonHeight: number;
}
interface CombinedSvgCircleSidefluteSidebuttonsThreenotesProps extends CombinedSvgProps {
  buttonTop: number;
  buttonLeft: number;
  noteHeight: number;
  noteWidth: number;
  noteLeft: number;
  noteTop: number;
  circleLeft: number;
  circleTop: number;
  circlWidth: number;
  circleHeight: number;
}

const FluteVector: React.FC<SvgProps> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 112 402" fill="none">
      <Defs>
        <LinearGradient
          id="paint0_linear_102_4417"
          x1="3"
          y1="201"
          x2="108.911"
          y2="201"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
      </Defs>
      <Path
        d="M95.9663 115.918L106.297 127.234C107.978 129.077 108.911 131.481 108.911 133.976V143.338C108.911 146.267 107.626 149.049 105.396 150.949L95.9663 158.984M95.9663 115.918L108.122 68.0783C108.635 66.059 108.505 63.9298 107.749 61.9881L87.2674 9.37248C85.7718 5.53038 82.0715 3 77.9485 3H33.9624C29.8395 3 26.1392 5.53038 24.6436 9.37249L4.14037 62.0439C3.39803 63.951 3.25863 66.0398 3.741 68.0286L15.3563 115.918M95.9663 115.918H15.3563M95.9663 158.984V348.581M95.9663 158.984H15.3563M95.9663 348.581L105.396 356.616C107.626 358.516 108.911 361.298 108.911 364.227V384.821C108.911 388.109 107.295 391.186 104.589 393.053L98.5299 397.232C96.8604 398.383 94.8802 399 92.8521 399H18.5911C16.4882 399 14.4388 398.337 12.7343 397.105L7.1432 393.065C4.54118 391.185 3 388.17 3 384.96V364.088C3 361.239 4.21534 358.525 6.34092 356.628L15.3563 348.581M95.9663 348.581H15.3563M15.3563 348.581V158.984M15.3563 158.984L6.34093 150.937C4.21534 149.04 3 146.326 3 143.477V133.844C3 131.429 3.87405 129.095 5.46067 127.274L15.3563 115.918"
        stroke="url(#paint0_linear_102_4417)"
        strokeWidth="6"
      />
    </Svg>
  );
};
const ButtonIcons: React.FC<SvgProps> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 65 225" fill="none">
      <Defs>
        <LinearGradient
          id="paint0_linear_102_4418"
          x1="30.0542"
          y1="13.3629"
          x2="57.497"
          y2="13.4742"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_102_4418"
          x1="30.0542"
          y1="13.3629"
          x2="57.497"
          y2="13.4742"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_102_4418"
          x1="30.0531"
          y1="43.3629"
          x2="57.4959"
          y2="43.472"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_102_4418"
          x1="30.0531"
          y1="43.3629"
          x2="57.4959"
          y2="43.472"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_102_4418"
          x1="30.0531"
          y1="73.3629"
          x2="57.4959"
          y2="73.472"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear_102_4418"
          x1="30.0531"
          y1="73.3629"
          x2="57.4959"
          y2="73.472"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear_102_4418"
          x1="30.0531"
          y1="103.363"
          x2="57.4959"
          y2="103.472"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient
          id="paint7_linear_102_4418"
          x1="30.0531"
          y1="103.363"
          x2="57.4959"
          y2="103.472"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient
          id="paint8_linear_102_4418"
          x1="30.0531"
          y1="133.363"
          x2="57.4959"
          y2="133.472"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient
          id="paint9_linear_102_4418"
          x1="30.0531"
          y1="133.363"
          x2="57.4959"
          y2="133.472"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient
          id="paint10_linear_102_4418"
          x1="15.0531"
          y1="163.363"
          x2="42.4959"
          y2="163.472"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient
          id="paint11_linear_102_4418"
          x1="15.0531"
          y1="163.363"
          x2="42.4959"
          y2="163.472"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient
          id="paint12_linear_102_4418"
          x1="46.2082"
          y1="162.569"
          x2="64.87"
          y2="162.643"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient
          id="paint13_linear_102_4418"
          x1="46.2082"
          y1="162.569"
          x2="64.87"
          y2="162.643"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient
          id="paint14_linear_102_4418"
          x1="0.0530938"
          y1="211.393"
          x2="27.4959"
          y2="211.502"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient
          id="paint15_linear_102_4418"
          x1="31.2082"
          y1="210.599"
          x2="49.87"
          y2="210.673"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
      </Defs>

      {/* Draw the paths (buttons) */}
      <Path
        d="M56.497 13.4631C56.4694 20.2661 50.7764 25.8045 43.7254 25.7778C36.6745 25.7511 31.0266 20.1698 31.0542 13.3667C31.0818 6.56363 36.7748 1.02526 43.8257 1.05197C50.8767 1.07867 56.5246 6.66001 56.497 13.4631Z"
        fill="url(#paint0_linear_102_4418)"
        stroke="url(#paint1_linear_102_4418)"
        strokeWidth="2"
      />
      <Path
        d="M56.4959 43.4651C56.4688 50.2682 50.7763 55.8061 43.7254 55.7789C36.6744 55.7516 31.026 50.1698 31.0531 43.3668C31.0801 36.5637 36.7727 31.0258 43.8236 31.053C50.8746 31.0803 56.5229 36.6621 56.4959 43.4651Z"
        fill="url(#paint2_linear_102_4418)"
        stroke="url(#paint3_linear_102_4418)"
        strokeWidth="2"
      />
      <Path
        d="M56.4959 73.4651C56.4688 80.2682 50.7763 85.8061 43.7254 85.7789C36.6744 85.7516 31.026 80.1698 31.0531 73.3668C31.0801 66.5637 36.7727 61.0258 43.8236 61.053C50.8746 61.0803 56.5229 66.6621 56.4959 73.4651Z"
        fill="url(#paint4_linear_102_4418)"
        stroke="url(#paint5_linear_102_4418)"
        strokeWidth="2"
      />
      <Path
        d="M56.4959 103.465C56.4688 110.268 50.7763 115.806 43.7254 115.779C36.6744 115.752 31.026 110.17 31.0531 103.367C31.0801 96.5637 36.7727 91.0258 43.8236 91.053C50.8746 91.0803 56.5229 96.6621 56.4959 103.465Z"
        fill="url(#paint6_linear_102_4418)"
        stroke="url(#paint7_linear_102_4418)"
        strokeWidth="2"
      />
      <Path
        d="M56.4959 133.465C56.4688 140.268 50.7763 145.806 43.7254 145.779C36.6744 145.752 31.026 140.17 31.0531 133.367C31.0801 126.564 36.7727 121.026 43.8236 121.053C50.8746 121.08 56.5229 126.662 56.4959 133.465Z"
        fill="url(#paint8_linear_102_4418)"
        stroke="url(#paint9_linear_102_4418)"
        strokeWidth="2"
      />
      <Path
        d="M41.4959 163.465C41.4688 170.268 35.7763 175.806 28.7254 175.779C21.6744 175.752 16.026 170.17 16.0531 163.367C16.0801 156.564 21.7727 151.026 28.8236 151.053C35.8746 151.08 41.5229 156.662 41.4959 163.465Z"
        fill="url(#paint10_linear_102_4418)"
        stroke="url(#paint11_linear_102_4418)"
        strokeWidth="2"
      />
      <Path
        d="M63.87 162.637C63.8526 167.021 60.1428 170.622 55.5073 170.604C50.8718 170.586 47.1908 166.957 47.2082 162.573C47.2256 158.189 50.9354 154.589 55.5709 154.607C60.2064 154.625 63.8874 158.254 63.87 162.637Z"
        fill="url(#paint12_linear_102_4418)"
        stroke="url(#paint13_linear_102_4418)"
        strokeWidth="2"
      />
      <Path
        d="M26.4959 211.495C26.4688 218.298 20.7763 223.836 13.7254 223.809C6.6744 223.782 1.02605 218.2 1.05309 211.397C1.08012 204.594 6.77266 199.056 13.8236 199.083C20.8746 199.11 26.5229 204.692 26.4959 211.495Z"
        stroke="url(#paint9_linear_102_4418)"
        fill="url(#paint10_linear_102_4418)"
        strokeWidth="2"
      />
      <Path
        d="M48.87 210.668C48.8526 215.051 45.1428 218.652 40.5073 218.634C35.8718 218.616 32.1908 214.987 32.2082 210.603C32.2256 206.219 35.9354 202.619 40.5709 202.637C45.2064 202.655 48.8874 206.284 48.87 210.668Z"
        fill="url(#paint10_linear_102_4418)"
        stroke="url(#paint9_linear_102_4418)"
        strokeWidth="2"
      />
    </Svg>
  );
};

const OneNote: React.FC<SvgProps> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 19 38" fill="none">
      <Defs>
        <LinearGradient
          id="paint0_linear_101_3564"
          x1="9"
          y1="0"
          x2="9.83527"
          y2="38.151"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
      </Defs>
      <Path
        d="M16.6599 29.0412L16.5555 27.9623C16.2437 26.6508 15.6558 25.421 14.8309 24.3549L14.6634 24.1384V5.57798V3.48624L19 0H10.8347V2.00459V4.00917V5.40367V10.633V22.4654L9.50417 22.1602C9.00348 22.0454 8.49144 21.9874 7.97774 21.9874C7.23665 21.9874 6.5005 22.1081 5.79818 22.3446L5.43965 22.4654L4.58582 22.8352C4.05381 23.0656 3.55554 23.3672 3.10468 23.7316C2.77013 24.0021 2.46367 24.3056 2.18997 24.6375L1.78515 25.1284C1.54144 25.4239 1.32082 25.7377 1.12525 26.0671L1.11532 26.0839C0.845586 26.5381 0.626031 27.0204 0.460526 27.5221C0.311537 27.9738 0.206396 28.4447 0.148009 28.9167C0.0507478 29.703 0.0783884 30.5093 0.232209 31.2865L0.236507 31.3082L0.367394 31.8372C0.593485 32.7511 0.988404 33.6147 1.53181 34.3834C1.77156 34.7226 2.03888 35.0415 2.33105 35.3367L2.51929 35.5269C2.88858 35.9001 3.2939 36.2358 3.72932 36.5291C4.23716 36.8713 4.78279 37.1536 5.35539 37.3706L5.37965 37.3798C6.04746 37.6328 6.74553 37.7974 7.45606 37.8692L7.55041 37.8787C8.34611 37.9591 9.14937 37.9194 9.93327 37.761L10.2923 37.6884C10.8398 37.5778 11.3742 37.4101 11.8868 37.1881C12.4744 36.9336 13.0293 36.6096 13.5396 36.2228L13.6132 36.167C14.3083 35.6402 14.9088 34.9991 15.3891 34.2712C15.8483 33.5751 16.1913 32.809 16.4048 32.0029L16.4252 31.9258C16.6742 30.9858 16.7537 30.009 16.6599 29.0412Z"
        fill="url(#paint0_linear_101_3564)"
      />
    </Svg>
  );
};
const ThreeNotes: React.FC<SvgProps> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 137 121" fill="none">
      <Defs>
        <LinearGradient
          id="cf4e7717"
          x1="116.405"
          y1="35.3608"
          x2="105.603"
          y2="121.975"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.84883" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient
          id="d3e4e1fd"
          x1="73.4383"
          y1="0.563417"
          x2="62.6362"
          y2="87.1774"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.84883" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient
          id="4cfad939"
          x1="22.0193"
          y1="28.2432"
          x2="11.2171"
          y2="114.857"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.84883" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
      </Defs>

      <G opacity="0.6">
        {/* First path */}
        <Path
          d="M131.752 100.685L131.517 98.2295C130.818 95.254 129.496 92.4605 127.639 90.0328L127.274 89.555V47.451V42.7059L137 34.7974H118.686V39.3447V43.8921V47.0555V58.9183V85.7599L115.701 85.0675C114.579 84.8071 113.431 84.6756 112.278 84.6756C110.617 84.6756 108.966 84.949 107.393 85.4849L106.586 85.7599L104.68 86.5949C103.481 87.1201 102.359 87.8065 101.346 88.6351C100.597 89.2468 99.9129 89.9324 99.3022 90.6813L98.3925 91.7971C97.8438 92.47 97.3476 93.184 96.908 93.9327L96.89 93.9634C96.2831 94.9973 95.7895 96.0936 95.4177 97.2333C95.0841 98.2565 94.8484 99.3243 94.7178 100.393C94.4997 102.176 94.5613 104.007 94.9063 105.77L94.916 105.82L95.2133 107.035C95.718 109.098 96.6013 111.05 97.8182 112.791C98.3579 113.564 98.9604 114.29 99.6194 114.964L100.042 115.396C100.866 116.238 101.772 116.997 102.746 117.661C103.888 118.439 105.116 119.081 106.405 119.575L106.448 119.592C107.948 120.167 109.517 120.541 111.116 120.704L111.319 120.725C113.104 120.907 114.907 120.817 116.665 120.458L117.464 120.295C118.696 120.043 119.898 119.661 121.05 119.157C122.365 118.58 123.606 117.848 124.746 116.974L124.901 116.855C126.471 115.651 127.826 114.19 128.907 112.533C129.933 110.959 130.699 109.23 131.175 107.413L131.227 107.215C131.784 105.086 131.962 102.876 131.752 100.685Z"
          fill="url(#cf4e7717)"
        />

        {/* Second path */}
        <Path
          d="M88.7857 65.8875L88.5507 63.4321C87.8513 60.4567 86.5296 57.6631 84.6725 55.2354L84.307 54.7576V12.6536V7.90849L94.0334 0H75.7198V4.54738V9.09477V12.2582V24.1209V50.9626L72.7349 50.2701C71.6125 50.0097 70.464 49.8783 69.3117 49.8783C67.65 49.8783 65.9996 50.1517 64.4266 50.6876L63.6194 50.9626L61.7132 51.7975C60.5142 52.3227 59.3925 53.0091 58.3791 53.8377C57.6309 54.4495 56.9463 55.135 56.3357 55.884L55.426 56.9997C54.8773 57.6726 54.381 58.3866 53.9414 59.1354L53.9234 59.1661C53.3165 60.1999 52.8229 61.2962 52.4512 62.4359C52.1175 63.4591 51.8819 64.5269 51.7512 65.5952C51.5332 67.3784 51.5948 69.2096 51.9398 70.9726L51.9495 71.0223L52.2467 72.2373C52.7514 74.3009 53.6347 76.2528 54.8516 77.9941C55.3914 78.7665 55.9938 79.4931 56.6528 80.1666L57.0752 80.5983C57.8996 81.4409 58.8056 82.1997 59.7799 82.8636C60.9212 83.6412 62.149 84.2836 63.4386 84.7779L63.481 84.7942C64.9812 85.3692 66.5509 85.7432 68.1492 85.9066L68.3527 85.9274C70.1377 86.1098 71.9401 86.0198 73.698 85.6605L74.497 85.4971C75.7291 85.2453 76.9311 84.8639 78.0829 84.3593C79.3985 83.7831 80.6396 83.0502 81.7794 82.1765L81.9349 82.0573C83.5049 80.8538 84.8592 79.3924 85.94 77.7355C86.9664 76.1618 87.7324 74.4329 88.2083 72.6153L88.2601 72.4178C88.8176 70.2888 88.9955 68.0782 88.7857 65.8875Z"
          fill="url(#d3e4e1fd)"
        />

        {/* Third path */}
        <Path
          d="M37.3667 93.5672L37.1316 91.1119C36.4323 88.1364 35.1106 85.3429 33.2535 82.9152L32.888 82.4374V40.3333V35.5882L42.6144 27.6797H24.3008V32.2271V36.7745V39.9379V51.8007V78.6423L21.3159 77.9499C20.1934 77.6895 19.0449 77.558 17.8927 77.558C16.2309 77.558 14.5806 77.8314 13.0076 78.3673L12.2004 78.6423L10.2942 79.4773C9.09517 80.0025 7.97342 80.6889 6.96002 81.5175C6.21189 82.1292 5.5273 82.8147 4.91662 83.5637L4.00692 84.6795C3.45825 85.3524 2.96196 86.0664 2.5224 86.8151L2.50439 86.8458C1.89747 87.8797 1.40387 88.976 1.03216 90.1157C0.698472 91.1388 0.462859 92.2067 0.332213 93.2749C0.114125 95.0581 0.17574 96.8893 0.520737 98.6524L0.530452 98.702L0.827661 99.9171C1.33241 101.981 2.21567 103.933 3.43258 105.674C3.97235 106.446 4.57478 107.173 5.23376 107.846L5.65614 108.278C6.4806 109.121 7.38659 109.879 8.36082 110.543C9.50213 111.321 10.7299 111.963 12.0195 112.458L12.062 112.474C13.5622 113.049 15.1319 113.423 16.7302 113.586L16.9336 113.607C18.7186 113.79 20.521 113.7 22.279 113.34L23.0779 113.177C24.31 112.925 25.512 112.544 26.6639 112.039C27.9794 111.463 29.2206 110.73 30.3604 109.856L30.5158 109.737C32.0859 108.534 33.4402 107.072 34.5209 105.415C35.5474 103.842 36.3134 102.113 36.7893 100.295L36.841 100.098C37.3985 97.9686 37.5765 95.758 37.3667 93.5672Z"
          fill="url(#4cfad939)"
        />
      </G>
    </Svg>
  );
};

const SideFlute: React.FC<SvgProps> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 142 146" fill="none">
      <Defs>
        <LinearGradient
          id="paint0_linear_93_328"
          x1="2.5"
          y1="72.25"
          x2="140"
          y2="72.25"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
      </Defs>
      <Path
        d="M2.5 112.158L7.62117 107.41L9.81938 105.282C11.6846 103.476 14.1788 102.467 16.7749 102.467H20.1314M20.1314 102.467L77.7041 44.3184M20.1314 102.467L42.4711 125.492M77.7041 44.3184L77.0314 41.8701C76.3323 39.3258 76.9093 36.6006 78.5797 34.558V34.558C80.1262 32.6669 82.44 31.57 84.883 31.57H88.8101M77.7041 44.3184L98.2566 66.4329M88.8101 31.57L93.2449 16.8335C94.15 13.826 96.4154 11.4184 99.3623 10.3323L118.559 3.25652C122.28 1.88521 126.459 2.84164 129.213 5.69456L135.949 12.6735C138.452 15.2669 139.366 19.0069 138.341 22.4626L132.958 40.6057C132.158 43.3022 130.26 45.5371 127.728 46.7625L111.278 54.7252M88.8101 31.57L111.278 54.7252M111.278 54.7252L111.546 56.6819C111.937 59.5232 110.882 62.3717 108.736 64.2738V64.2738C107.166 65.6649 105.141 66.4329 103.043 66.4329H98.2566M98.2566 66.4329L42.4711 125.492M42.4711 125.492V129.659C42.4711 132.009 41.6438 134.284 40.1343 136.084L33.9169 143.5"
        stroke="url(#paint0_linear_93_328)"
        strokeWidth="5"
      />
    </Svg>
  );
};
const SideButtons: React.FC<SvgProps> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 54 53" fill="none">
      <Defs>
        <LinearGradient id="grad1" x1="44" y1="5" x2="54" y2="5" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient id="grad2" x1="35" y1="13" x2="45" y2="13" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient id="grad3" x1="26" y1="22" x2="36" y2="22" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient id="grad4" x1="17" y1="31" x2="27" y2="31" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient id="grad5" x1="9" y1="39" x2="19" y2="39" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
        <LinearGradient id="grad6" x1="0" y1="48" x2="10" y2="48" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
      </Defs>

      <Circle cx="49" cy="5" r="4" fill="url(#grad1)" stroke="url(#grad1)" strokeWidth="2" />
      <Circle cx="40" cy="13" r="4" stroke="url(#grad2)" strokeWidth="2" />
      <Circle cx="31" cy="22" r="4" stroke="url(#grad3)" strokeWidth="2" />
      <Circle cx="22" cy="31" r="4" stroke="url(#grad4)" strokeWidth="2" />
      <Circle cx="14" cy="39" r="4" stroke="url(#grad5)" strokeWidth="2" />
      <Circle cx="5" cy="48" r="4" stroke="url(#grad6)" strokeWidth="2" />
    </Svg>
  );
};
const EmptyGradientCircle: React.FC<SvgProps> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 236 235" fill="none">
      <Defs>
        <LinearGradient
          id="grad1"
          x1="12"
          y1="113.5"
          x2="224"
          y2="113.5"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#7011BA" />
          <Stop offset="0.659159" stopColor="#485CEA" />
          <Stop offset="1" stopColor="#4CC6EF" />
        </LinearGradient>
      </Defs>

      {/* DropShadow not supported, skipping the filter */}

      <Path
        d="M118 223C178.733 223 228 173.993 228 113.5C228 53.007 178.733 4 118 4C57.2665 4 8 53.007 8 113.5C8 173.993 57.2665 223 118 223Z"
        stroke="url(#grad1)"
        strokeWidth="8"
      />
    </Svg>
  );
};

const CombinedButtonAndFluteVector: React.FC<CombinedSvgProps> = ({
  top,
  left,
  width,
  height,
  buttonWidth,
  buttonHeight,
}) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 112 402" fill="none">
        <Defs>
          <LinearGradient
            id="paint0_linear_102_4417"
            x1="3"
            y1="201"
            x2="108.911"
            y2="201"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0" stopColor="#7011BA" />
            <Stop offset="0.659159" stopColor="#485CEA" />
            <Stop offset="1" stopColor="#4CC6EF" />
          </LinearGradient>
        </Defs>
        <Path
          d="M95.9663 115.918L106.297 127.234C107.978 129.077 108.911 131.481 108.911 133.976V143.338C108.911 146.267 107.626 149.049 105.396 150.949L95.9663 158.984M95.9663 115.918L108.122 68.0783C108.635 66.059 108.505 63.9298 107.749 61.9881L87.2674 9.37248C85.7718 5.53038 82.0715 3 77.9485 3H33.9624C29.8395 3 26.1392 5.53038 24.6436 9.37249L4.14037 62.0439C3.39803 63.951 3.25863 66.0398 3.741 68.0286L15.3563 115.918M95.9663 115.918H15.3563M95.9663 158.984V348.581M95.9663 158.984H15.3563M95.9663 348.581L105.396 356.616C107.626 358.516 108.911 361.298 108.911 364.227V384.821C108.911 388.109 107.295 391.186 104.589 393.053L98.5299 397.232C96.8604 398.383 94.8802 399 92.8521 399H18.5911C16.4882 399 14.4388 398.337 12.7343 397.105L7.1432 393.065C4.54118 391.185 3 388.17 3 384.96V364.088C3 361.239 4.21534 358.525 6.34092 356.628L15.3563 348.581M95.9663 348.581H15.3563M15.3563 348.581V158.984M15.3563 158.984L6.34093 150.937C4.21534 149.04 3 146.326 3 143.477V133.844C3 131.429 3.87405 129.095 5.46067 127.274L15.3563 115.918"
          stroke="url(#paint0_linear_102_4417)"
          strokeWidth="6"
        />
      </Svg>

      {/* Buttons inside Flute */}
      <View style={{ position: 'absolute', top: top, left: left }}>
        <ButtonIcons width={buttonWidth} height={buttonHeight} />
      </View>
    </View>
  );
};

const CombinedButtonAndFluteVectorSide: React.FC<
  CombinedSvgCircleSidefluteSidebuttonsThreenotesProps
> = ({
  width,
  height,
  top,
  left,
  buttonWidth,
  buttonHeight,
  buttonTop,
  buttonLeft,
  noteHeight,
  noteWidth,
  noteLeft,
  noteTop,
  circleLeft,
  circleTop,
  circlWidth,
  circleHeight,
}) => {
  return (
    <View>
      <View style={{ position: 'absolute', top: top, left: left }}>
        <SideFlute width={width} height={height} />
      </View>
      <View style={{ position: 'absolute', top: circleTop, left: circleLeft }}>
        <EmptyGradientCircle width={circlWidth} height={circleHeight} />
      </View>
      <View style={{ position: 'absolute', top: buttonTop, left: buttonLeft }}>
        <SideButtons width={buttonWidth} height={buttonHeight} />
      </View>
      <View style={{ position: 'absolute', top: noteTop, left: noteLeft }}>
        <ThreeNotes width={noteWidth} height={noteHeight} />
      </View>
    </View>
  );
};
const Notestructure: React.FC<SvgProps> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 329 251" fill="none">
      <G id="317345c2">
        <G id="0b87ddbf">
          <Path d="M3 1H326" stroke="#485CEA" strokeWidth="2" />
          <Path d="M3 1H326" stroke="#485CEA" strokeWidth="2" />
        </G>
        <G id="954cae60">
          <Path d="M0.5 250H328.5" stroke="#485CEA" strokeWidth="2" />
          <Path d="M0.5 250H328.5" stroke="#485CEA" strokeWidth="2" />
        </G>
        <G id="c432454d">
          <Path d="M1 200H327.5" stroke="#485CEA" strokeWidth="2" />
          <Path d="M1 200H327.5" strokeWidth="2" />
        </G>
        <G id="99611175">
          <Path d="M1 150H328" stroke="#485CEA" strokeWidth="2" />
          <Path d="M1 150H328" strokeWidth="2" />
        </G>
        <G id="dcadc633">
          <Path d="M1 100H327.5" stroke="#485CEA" strokeWidth="2" />
          <Path d="M1 100H327.5" strokeWidth="2" />
        </G>
        <G id="2aadd92e">
          <Path d="M1 50H327.5" stroke="#485CEA" strokeWidth="2" />
          <Path d="M1 50H327.5" strokeWidth="2" />
        </G>
        <Path id="5b10f05d" d="M326 0V250" stroke="url(#paint0_linear)" strokeWidth="5" />
        <Path id="5c768fb7" d="M3 0L3 250" stroke="url(#paint1_linear)" strokeWidth="5" />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="325.5"
          y1="0"
          x2="325.5"
          y2="250"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#485CEA" />
          <Stop offset="0.435" stopColor="#4CC6EF" />
          <Stop offset="1" stopColor="#485CEA" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1="2.5"
          y1="0"
          x2="2.5001"
          y2="250"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#485CEA" />
          <Stop offset="0.435" stopColor="#4CC6EF" />
          <Stop offset="1" stopColor="#485CEA" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

const MusicNotes: React.FC<SvgProps> = ({ width, height }) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 316 352" fill="none">
        <G id="e14b8ea4">
          {/* First Note */}
          <G id="49f8876a">
            <Circle id="c8118234" cx="30" cy="328" r="23.5" fill="#485CEA" stroke="#485CEA" />
            <Line id="0b99bd46" y1="327.5" x2="59" y2="327.5" stroke="#485CEA" strokeWidth="3" />
            <Path
              id="26b34918"
              d="M45 107C45 105.895 44.1046 105 43 105C41.8954 105 41 105.895 41 107H45ZM45 329.012V107H41V329.012H45Z"
              fill="#485CEA"
            />
            <Path
              id="2189cc1a"
              d="M36.1973 332.861H39.5723C39.3965 334.479 38.9336 335.926 38.1836 337.203C37.4336 338.48 36.373 339.494 35.002 340.244C33.6309 340.982 31.9199 341.352 29.8691 341.352C28.3691 341.352 27.0039 341.07 25.7734 340.508C24.5547 339.945 23.5059 339.148 22.627 338.117C21.748 337.074 21.0684 335.826 20.5879 334.373C20.1191 332.908 19.8848 331.279 19.8848 329.486V326.938C19.8848 325.145 20.1191 323.521 20.5879 322.068C21.0684 320.604 21.7539 319.35 22.6445 318.307C23.5469 317.264 24.6309 316.461 25.8965 315.898C27.1621 315.336 28.5859 315.055 30.168 315.055C32.1016 315.055 33.7363 315.418 35.0723 316.145C36.4082 316.871 37.4453 317.879 38.1836 319.168C38.9336 320.445 39.3965 321.928 39.5723 323.615H36.1973C36.0332 322.42 35.7285 321.395 35.2832 320.539C34.8379 319.672 34.2051 319.004 33.3848 318.535C32.5645 318.066 31.4922 317.832 30.168 317.832C29.0312 317.832 28.0293 318.049 27.1621 318.482C26.3066 318.916 25.5859 319.531 25 320.328C24.4258 321.125 23.9922 322.08 23.6992 323.193C23.4062 324.307 23.2598 325.543 23.2598 326.902V329.486C23.2598 330.74 23.3887 331.918 23.6465 333.02C23.916 334.121 24.3203 335.088 24.8594 335.92C25.3984 336.752 26.084 337.408 26.916 337.889C27.748 338.357 28.7324 338.592 29.8691 338.592C31.3105 338.592 32.459 338.363 33.3145 337.906C34.1699 337.449 34.8145 336.793 35.248 335.938C35.6934 335.082 36.0098 334.057 36.1973 332.861Z"
              fill="white"
            />
          </G>

          {/* Second Note */}
          <G id="3b4f6eb4">
            <Circle id="3065867d" cx="94" cy="302" r="23.5" fill="#BA1111" stroke="#BA1111" />
            <Path
              id="b1d1d212"
              d="M117 74C117 72.8954 116.105 72 115 72C113.895 72 113 72.8954 113 74H117ZM117 296.012V74H113V296.012H117Z"
              fill="#BA1111"
            />
            <Path
              id="ff5aea69"
              d="M92.584 314H87.2402L87.2754 311.24H92.584C94.4121 311.24 95.9355 310.859 97.1543 310.098C98.373 309.324 99.2871 308.246 99.8965 306.863C100.518 305.469 100.828 303.84 100.828 301.977V300.412C100.828 298.947 100.652 297.646 100.301 296.51C99.9492 295.361 99.4336 294.395 98.7539 293.609C98.0742 292.812 97.2422 292.209 96.2578 291.799C95.2852 291.389 94.166 291.184 92.9004 291.184H87.1348V288.406H92.9004C94.5762 288.406 96.1055 288.688 97.4883 289.25C98.8711 289.801 100.061 290.604 101.057 291.658C102.064 292.701 102.838 293.967 103.377 295.455C103.916 296.932 104.186 298.596 104.186 300.447V301.977C104.186 303.828 103.916 305.498 103.377 306.986C102.838 308.463 102.059 309.723 101.039 310.766C100.031 311.809 98.8125 312.611 97.3828 313.174C95.9648 313.725 94.3652 314 92.584 314ZM89.0508 288.406V314H85.6582V288.406H89.0508Z"
              fill="white"
            />
          </G>

          {/* Third Note */}
          <G id="7f0d2ce9">
            <Circle id="315137ed" cx="161" cy="278" r="23.5" fill="#11BA93" stroke="#11BA93" />
            <Path
              id="fd30c0f7"
              d="M182 50C182 48.8954 181.105 48 180 48C178.895 48 178 48.8954 178 50H182ZM182 272.012V50H178V272.012H182Z"
              fill="#11BA93"
            />
            <Path
              id="a97224f9"
              d="M169.5 287.24V290H155.947V287.24H169.5ZM156.633 264.406V290H153.24V264.406H156.633ZM167.707 275.41V278.17H155.947V275.41H167.707ZM169.324 264.406V267.184H155.947V264.406H169.324Z"
              fill="white"
            />
          </G>

          {/* Fourth Note */}
          <G id="49a5fedc">
            <Circle id="fa092020" cx="223" cy="252" r="23.5" fill="#485CEA" stroke="#485CEA" />
            <Path
              id="fc6ff21b"
              d="M244 24C244 22.8954 243.105 22 242 22C240.895 22 240 22.8954 240 24H244ZM244 246.012V24H240V246.012H244Z"
              fill="#485CEA"
            />
            <Path
              id="712eb935"
              d="M218.914 238.406V264H215.521V238.406H218.914ZM229.637 249.92V252.697H218.176V249.92H229.637ZM231.377 238.406V241.184H218.176V238.406H231.377Z"
              fill="white"
            />
          </G>

          {/* Fifth Note */}
          <G id="0505d0cb">
            <Circle id="1742e54d" cx="292" cy="230" r="23.5" fill="#485CEA" stroke="#485CEA" />
            <Path
              id="95f44dd9"
              d="M313 2C313 0.895432 312.105 0 311 0C309.895 0 309 0.895432 309 2H313ZM313 224.012V2H309V224.012H313Z"
              fill="#485CEA"
            />
            <Path
              id="ece206c1"
              d="M301.115 229.256V238.625C300.799 239.094 300.295 239.621 299.604 240.207C298.912 240.781 297.957 241.285 296.738 241.719C295.531 242.141 293.973 242.352 292.062 242.352C290.504 242.352 289.068 242.082 287.756 241.543C286.455 240.992 285.324 240.195 284.363 239.152C283.414 238.098 282.676 236.82 282.148 235.32C281.633 233.809 281.375 232.098 281.375 230.188V228.201C281.375 226.291 281.598 224.586 282.043 223.086C282.5 221.586 283.168 220.314 284.047 219.271C284.926 218.217 286.004 217.42 287.281 216.881C288.559 216.33 290.023 216.055 291.676 216.055C293.633 216.055 295.268 216.395 296.58 217.074C297.904 217.742 298.936 218.668 299.674 219.852C300.424 221.035 300.904 222.383 301.115 223.895H297.723C297.57 222.969 297.266 222.125 296.809 221.363C296.363 220.602 295.725 219.992 294.893 219.535C294.061 219.066 292.988 218.832 291.676 218.832C290.492 218.832 289.467 219.049 288.6 219.482C287.732 219.916 287.018 220.537 286.455 221.346C285.893 222.154 285.471 223.133 285.189 224.281C284.92 225.43 284.785 226.725 284.785 228.166V230.188C284.785 231.664 284.955 232.982 285.295 234.143C285.646 235.303 286.145 236.293 286.789 237.113C287.434 237.922 288.201 238.537 289.092 238.959C289.994 239.381 290.99 239.592 292.08 239.592C293.287 239.592 294.266 239.492 295.016 239.293C295.766 239.082 296.352 238.836 296.773 238.555C297.195 238.262 297.518 237.986 297.74 237.729V231.998H291.816V229.256H301.115Z"
              fill="white"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
};

const MusicnotesOnStructure: React.FC<Omit<CombinedSvgProps, 'top' | 'left'>> = ({
  width,
  height,
  buttonWidth,
  buttonHeight,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.noteStructure}>
        <Notestructure width={width} height={height} />
      </View>
      <View style={styles.musicNotes}>
        <MusicNotes width={buttonWidth} height={buttonHeight} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noteStructure: {
    position: 'absolute',
  },
  musicNotes: {
    position: 'absolute',
  },
});

export {
  FluteVector,
  ButtonIcons,
  CombinedButtonAndFluteVector,
  OneNote,
  SideFlute,
  SideButtons,
  EmptyGradientCircle,
  ThreeNotes,
  CombinedButtonAndFluteVectorSide,
  Notestructure,
  MusicNotes,
  MusicnotesOnStructure,
};
