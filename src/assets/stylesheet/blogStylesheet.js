import { css } from "@emotion/css";

export const useBlogStyle = () => ({
  root: css`
    padding-top: 100px;
    padding-bottom: 300px;
    background: #ffffff;

    .blog-top {
      width: 60%;
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

  blogCard: css`
    img {
      border-radius: 20px 20px 0px 0px;
    }

    .content {
      border-radius: 0px 0px 20px 20px;
      border-right: 1px solid #0062d3;
      border-bottom: 1px solid #0062d3;
      border-left: 1px solid #0062d3;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
      padding: 20px 13px;
      text-align: center;
      transition: 0.3s;

      .title {
        font-size: 24px;
        color: #555;
        font-weight: 700;
        padding-bottom: 20px;
      }

      .date {
        font-size: 20px;
        color: #9ca3af;
        padding-bottom: 20px;
      }

      .desc {
      }

      :hover {
        background: #0062d3;

        .title {
          color: #ffffff;
        }
        .date {
          color: #83acf2;
        }

        .desc {
          color: #ffffff;
        }
      }
    }
  `
});
