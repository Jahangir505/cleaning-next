import img1 from "@/assets/images/hero/text-img.png";
import img2 from "@/assets/images/hero/text-img2.png";
import { css } from "@emotion/css";

export const useHeroStyle = () => ({
  root: css`
    background: rgb(0, 0, 0);
    background: linear-gradient(90deg, #003aa8 0%, #007cee 100%);
    padding: 140px 0;

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
        .img-box2 {
          width: 308px;
          height: 40px !important;
          background: url(${img2.src}) lightgray 50% / cover no-repeat;
          border-radius: 50px;
          background-position: center bottom;
        }
      }
    }
  `,
});
