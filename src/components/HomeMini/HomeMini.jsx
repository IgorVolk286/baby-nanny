import { Wrap, Svg, P, WrapText, Span } from './HomeMini.styled';

export const HomeMini = () => {
  return (
    <Wrap>
      <Svg>
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          //   xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="feCheck2"
            d="M2.5 5L0 7.5L7.5 15L20 2.5L17.5 0L7.5 10L2.5 5Z"
            fill="#FBFBFB"
            fill-opacity="1.000000"
            fill-rule="evenodd"
          />
        </svg>
      </Svg>
      <WrapText>
        <P>Experienced nannies</P>
        <Span>15,000</Span>
      </WrapText>
    </Wrap>
  );
};
