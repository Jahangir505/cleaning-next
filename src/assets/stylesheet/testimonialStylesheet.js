import { css } from "@emotion/css";

export const useTestimonialStyle = () => ({
  root: css`
    padding: 73px 95px 50px 71px;
    background: #f4f9ff;
    z-index: -1;

    .testimonial {
      padding-top: 100px;
      .content {
        p {
          border-radius: 6px;
          background: rgba(0, 98, 211, 0.05);
          font-size: 16px;
          color: #0062d3;
          display: inline-block;
          padding: 0 10px;
          margin-bottom: 20px;
        }

        h2 {
          color: #0062d3;
          font-size: 48px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: -1.2px;
          text-transform: uppercase;
        }
      }
    }
  `
});
