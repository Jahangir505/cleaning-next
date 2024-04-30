import { css } from "@emotion/css";

export const useWorkStyle = () => ({
  root: css`
    padding: 100px 0;
    background: #fff;

    .work-box {
      padding: 60px 47px;
      border-radius: 30px;
      background: #f4f9ff;
      text-align: center;

      h2 {
        font-size: 48px;
        font-weight: 500;
        line-height: 58px;
        color: #0062d3;
        padding-bottom: 30px;
      }
    }
  `,

  workCard: css`
    padding-left: 50px;
    .icon {
      background: #f4f9ff;
      padding: 13px;
      border-radius: 50%;
      height: 65px;
      width: 65px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }

      .number {
        width: 22px;
        height: 22px;
        position: absolute;
        top: 0;
        right: 0;
        border: 1px solid #0062d3;
        padding: 5px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 600;
        color: #0062d3;
      }
    }

    .content {
      padding-left: 20px;

      h3 {
        color: #0062d3;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        padding-bottom: 10px;
      }

      p {
        color: #555;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
    }
  `
});
