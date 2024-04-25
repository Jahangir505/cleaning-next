import { css } from "@emotion/css";

export const useHeaderStyle = () => ({
  root: css`
    background: linear-gradient(
      180deg,
      rgba(0, 124, 238, 0.3) 0%,
      rgba(0, 58, 168, 0.3) 100%
    );
    position: absolute;
    padding: 10px 160px;
    box-shadow: none;
    .nav-bar {
      display: flex;
      gap: 36px;

      a {
        font-family: "Satoshi sans-serif";
        font-size: 18px;
        color: #fff;
        font-weight: 400;
      }
      .active {
        color: #ffe500;
        font-weight: 600;
      }
    }

    .contact-btn {
      display: flex;
      align-items: center;
      gap: 10px;
      border-radius: 50px;
      background: rgba(255, 255, 255, 0.1);
      font-size: 18px;
      padding: 12px 24px;
      border-radius: 50px;
      color: #ffe500;
      font-weight: 700;
      text-transform: capitalize;
    }
  `
});
