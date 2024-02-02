import { Title, P, NavLin, ButtonGet, Wrap } from './Home.styled';
export const Home = () => {
  return (
    <Wrap>
      <Title>Make Life Easier for the Family:</Title>
      <P>Find Babysitters Online for All Occasions</P>
      <ButtonGet type="button">
        <NavLin to="/nannies"> Get started </NavLin>
        <svg
          width="13.745239"
          height="15.977783"
          viewBox="0 0 13.7452 15.9778"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Arrow 16"
            d="M0 14.7742L10.8327 0.398682L12.4299 1.60229L1.59729 15.9778L0 14.7742ZM10.7802 2.13L3.84833 3.10425C3.29376 3.18213 2.79681 2.80762 2.71887 2.25305C2.64099 1.69861 3.01544 1.20154 3.57001 1.12366L11.4921 0.0102539C12.0467 -0.067627 12.5436 0.306763 12.6216 0.861328L13.735 8.78351C13.8129 9.33807 13.4384 9.83502 12.8839 9.91296C12.3293 9.99091 11.8323 9.61639 11.7545 9.06183L10.7802 2.13Z"
            fill="#FBFBFB"
            fill-opacity="1.000000"
            fill-rule="evenodd"
          />
        </svg>
      </ButtonGet>
    </Wrap>
  );
};
