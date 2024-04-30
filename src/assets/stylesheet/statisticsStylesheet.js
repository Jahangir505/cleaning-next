import { css } from "@emotion/css";

export const useStatisticsStyle = () => ({
  root: css`
    padding: 100px 0;
    background: #0062d3;

    .img-box {
      border-radius: 30px;
      position: relative;
      img {
        outline: 10px solid rgba(255, 255, 255, 0.2);
        border-radius: 30px;
        outline-offset: -5px;
      }

      .play-icon {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 35%;
        left: 42%;
        cursor: pointer;
      }
    }
  `,

  statisticsCard: css`
    max-width: 350px;
    padding: 16px 30px;
    background: #ffffff;
    border-radius: 10px;

    .icon {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: #f4f9ff;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .count {
      font-size: 36px;
      font-weight: 600;
      color: #0062d3;
    }

    .title {
      font-size: 20px;
      color: #333;
    }
  `
});
