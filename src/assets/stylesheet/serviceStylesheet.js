import { css } from "@emotion/css";

export const useServiceStyle = () => ({
  root: css`
    padding: 100px 0;
    background: #f4f9ff;

    .content-box {
      width: 50%;
      margin: 0 auto;
      text-align: center;
      padding-bottom: 40px;

      h2 {
        font-size: 48px;
        color: #0062d3;
        font-weight: 500;
        line-height: 40px;
        padding-bottom: 10px;
      }

      p {
        color: #333;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
    }
  `,

  serviceBox: css`
    padding: 16px 19px 30px 19px;
    background: #ffffff;
    border-radius: 30px;
    border: 1px solid #0062d3;
    transition: 0.5s;
    img {
      width: 100%;
      border-radius: 30px;
      cursor: pointer;
    }

    .title {
      padding-top: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-size: 24px;
        font-weight: 600;
        line-height: 24px;
        text-transform: capitalize;
      }

      svg {
        background: rgba(51, 51, 51, 0.1);
        width: 36px;
        height: 36px;
        padding: 10px;
        border-radius: 50%;
      }
    }

    :hover {
      background: #0062d3;

      .title {
        cursor: pointer;
        h3 {
          color: #ffffff;
        }

        svg {
          background: #ffffff;
        }
      }
    }
  `
});
