import bgClean from "@/assets/images/bg-clean.png";
import bg from "@/assets/images/blog/bg.png";
import { css } from "@emotion/css";

export const useCallForQuoteStyle = () => ({
  root: css`
    margin-top: -250px;
    padding: 73px 95px 50px 71px;
    border-radius: 40px;
    background: url(${bgClean.src});
    background-size: cover;
    background-repeat: no-repeat;

    .left-side {
      .title {
        font-size: 48px;
        color: #0062d3;
        font-weight: 500;
        text-transform: uppercase;
        padding-bottom: 40px;
      }

      .desc {
        font-size: 16px;
        color: #555555;
      }
    }

    .right-side {
      text-align: right;
      background-image: url(${bg.src});
      background-position: bottom right 25%;
      background-repeat: no-repeat;
      height: 100%;
      .card {
        margin-top: 40px;
        padding: 19px 30px;
        display: inline-block;
        border-radius: 8px;
        background: #0062d3;
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25);
        color: #ffe500;
        font-size: 18px;
        cursor: pointer;
      }
    }
  `
});
