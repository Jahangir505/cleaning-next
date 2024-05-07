import { css } from "@emotion/css";
import bg from "@/assets/images/blog/bg.png";

export const useCallForQuoteStyle = () => ({
  root: css`
    margin-top: 100px;
    padding: 73px 95px 50px 71px;
    border-radius: 40px;
    background: linear-gradient(90deg, #E1EFFF 0%, rgba(255, 255, 255, 0.00) 100%);
    

    
    
    .left-side {
        .title{
            font-size: 48px;
            color: #0062D3;
            font-weight: 500;
            text-transform: uppercase;
            padding-bottom: 40px;
        }

        .desc{
            font-size: 16px;
            color: #555555;
        }
    }

    .right-side{
        text-align: right;
        background-image: url(${bg.src});
        background-position: bottom right 25%;
        background-repeat: no-repeat;
        height: 100%;
        .card{
            margin-top: 40px;
            padding: 19px 30px;
            display: inline-block;
            border-radius: 8px;
            background: #0062D3;
            box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25);
            color: #FFE500;
            font-size: 18px;
            cursor: pointer;
        }
    }

        


    
  `,

  
  
});
