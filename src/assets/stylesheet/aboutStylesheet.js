import { css } from "@emotion/css";

export const useAboutStyle = () => ({
  root: css`
    padding: 100px 0;
    background: #ffffff;

    .about-content {
      padding-left: 40px;
      .top-text {
        border-radius: 6px;
        background: rgba(0, 98, 211, 0.05);
        font-size: 16px;
        color: #0062d3;
        display: inline-block;
        padding: 0 10px;
        margin-bottom: 20px;
      }

      .title {
        color: #0062d3;
        font-size: 36px;
        font-weight: 500;
        line-height: 40px;
        margin-bottom: 24px;

        small {
          font-size: 24px;
        }
      }

      p {
        color: #555;
        font-size: 16px;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
      }

      .MuiListItem-root {
        gap: 10px;
        padding-left: 0;
      }
    }
  `
});
