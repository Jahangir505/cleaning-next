import { css } from "@emotion/css";
import bg from "@/assets/images/blog/bg.png";

export const useFooterStyle = () => ({
  root: css`
    padding: 100px;
    background: #0062D3;
    
    .logo-box{
        .logo{
            display: flex;
            align-items: center;
            gap: 10px;
            padding-bottom: 30px;

            h5{
                font-family: "Inter" sans-serif;
                font-weight: 300;
                letter-spacing: .3rem;
                color: #ffffff;
                text-decoration: none;
                font-size: 32px;
            }

        }

        p{
            color: #ffffff;
        }
    }

    .footer-menu{
        h4{
            color: #ffffff;
            text-edge: cap;
            font-family: "Inter" sans-serif;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            text-transform: uppercase;
        }

        hr{
            width: 30%;
            margin-top: 16px;
            height: 3px;
            background-color: #ffffff;
        }

        .icon-list{
            margin-top: 24px;

            .single{
                display: flex;
                align-items: center;
                gap: 10px;
                padding-bottom: 20px;

                svg{
                    background: #046CE3;
                    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.10));
                    border-radius: 50px;
                    color: #fff;
                    padding: 8px;
                    font-size: 36px;
                }

                p{
                    color: #99C8FF;
                    font-size: 16px;
                    font-weight: 400;
                }
            }

            
        }

        .s-list{
            margin-top: 24px;
            display: flex;
            flex-direction: column;
            gap: 8px;

            a{
                color: #99C8FF;
            }
        }

        .time{
            margin-top: 24px;
            .single-time {
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: #99C8FF;
            }
        }
    }
  `,

  
  
});
