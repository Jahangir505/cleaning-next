import bg from "@/assets/images/hero/bg.jpg";
import img1 from "@/assets/images/hero/text-img.png";
import { css } from "@emotion/css";

export const useHeroStyle = () => ({
  root: css`
    background: rgb(0, 0, 0);
    background: linear-gradient(90deg, #003aa8 0%, #007cee 100%);
    padding: 170px 160px;
    background-image: url(${bg.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .left-content {
      p {
        font-size: 48px;
        color: #ffffff;
        font-weight: 400;
        text-transform: uppercase;
      }
      .img1 {
        display: flex;
        align-items: center;
        gap: 8px;
        .img-box {
          width: 145px;
          height: 40px !important;
          background: url(${img1.src}) lightgray 50% / cover no-repeat;
          border-radius: 50px;
        }
      }

      .img2 {
        display: flex;
        align-items: center;
        gap: 8px;
        .video-box {
          width: 308px;
          height: 50px;
          border-radius: 50px;
          position: relative;
          overflow: hidden;
          video {
            left: 0;
            top: -102px;
            right: 0;
            position: absolute;
          }
        }
      }
    }

    .subtitle {
      font-size: 18px;
      color: #ffffff;
      padding: 28px 0;
    }

    .button {
      button {
        padding: 16px 30px;
        border-radius: 4px;
        position: relative;
        color: #0062d3;
        font-weight: 600;
        font-size: 18px;
        text-transform: capitalize;

        background: #ffe500;
        :before {
          content: "";
          border: 1px solid #ffffff;
          width: 100%;
          z-index: 1;
          position: absolute;
          height: 100%;
          top: 7px;
          left: 7px;
          transition: 0.2s;
          border-radius: 4px;
        }

        :hover {
          background: #ffffff;
          color: #0062d3;
          :before {
            top: 0px;
            left: 0px;
          }
        }
      }
    }

    .booking-form {
      border-radius: 40px;
      border: 1px solid #0081f4;

      background: linear-gradient(
        296deg,
        rgba(1, 45, 130, 0.48) 2.23%,
        rgba(0, 133, 255, 0.38) 89.75%
      );
      padding: 80px;

      .form-title {
        font-size: 32px;
        font-weight: 700;
        color: #ffffff;
      }

      .sort-desc {
        font-size: 14px;
        font-weight: 400;
        color: #ffffff;
      }

      .input-group {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin: 20px 0;
        input,
        select {
          width: 100%;
          border-radius: 8px;
          border: 1px solid #d0d5dd;
          background: #fff;
          padding: 10px 14px;
          /* Shadow/xs */
          box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
          color: #667085;
        }
      }
      button {
        padding: 16px 24px;
        background: #ffe500;
        border-radius: 4px;
        color: #0062d3;
        font-size: 16px;
        font-weight: 600;
      }
    }
  `
});
