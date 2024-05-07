import { useHeaderStyle } from "@/assets/stylesheet/headerStylesheet";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";

// const pages = ['Home', 'About Us', 'Service', 'Portfolio', 'Blog'];
const pages = [
  { title: "Home", class: "active", link: "/" },
  { title: "About Us", class: "", link: "#about-us" },
  { title: "Service", class: "", link: "#service" },
  { title: "Features", class: "", link: "#portfolio" },
  { title: "Faq", class: "", link: "#faqs" },
  { title: "Contact Us", class: "", link: "#contact-us" }
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const classes = useHeaderStyle();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" className={classes.root}>
      {/* <Container> */}
      <Toolbar disableGutters>
        <Box sx={{ display: { xs: "none", md: "flex" }, paddingRight: "10px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="40"
            viewBox="0 0 38 40"
            fill="none"
          >
            <g clip-path="url(#clip0_7_10884)">
              <path
                d="M36.8595 18.4072C36.8595 19.9902 36.3589 21.2393 35.3441 22.2566C31.1648 26.4496 26.9973 30.6524 22.7808 34.8081C20.8394 36.723 18.0695 36.8408 15.9122 35.1499C15.39 34.7414 15.1211 34.8592 14.6971 35.2049C12.8126 36.7309 10.7063 37.9308 8.69616 39.2761C8.16811 39.6296 7.7657 39.5629 7.32009 39.1131C5.0214 36.7878 2.70898 34.4723 0.37888 32.1784C-0.125614 31.6815 -0.0922429 31.275 0.280729 30.729C1.75103 28.5766 2.7875 26.2316 3.36266 23.6785C3.48437 23.1404 3.45099 22.7927 3.05839 22.3744C0.783261 19.945 0.842151 16.9834 3.19973 14.6129C7.19053 10.6006 11.1912 6.59805 15.1996 2.60536C17.6181 0.197562 20.6705 0.207381 23.0949 2.61125C24.628 4.13134 26.1454 5.66715 27.6765 7.18724C28.4205 7.92568 28.978 7.76857 29.2352 6.75713C29.4354 5.96567 29.6081 5.16634 29.8064 4.37487C29.9104 3.95851 30.0204 3.50681 30.5838 3.52645C31.0882 3.54216 31.1943 3.96048 31.2904 4.34148C31.4985 5.16438 31.7243 5.9853 31.8715 6.81998C31.9598 7.32471 32.215 7.52896 32.6783 7.64877C33.6264 7.89622 34.5608 8.18689 35.4991 8.47166C35.8466 8.57771 36.2058 8.71322 36.2333 9.15511C36.2647 9.65788 35.8839 9.81892 35.4972 9.9348C34.498 10.2372 33.491 10.5161 32.4898 10.8166C31.8715 11.0032 31.7773 11.3096 32.2621 11.7848C33.2888 12.7923 34.3056 13.8116 35.3146 14.8368C36.3236 15.862 36.8497 17.0934 36.8595 18.4014V18.4072ZM21.6344 12.5351C21.9151 12.3131 22.1722 12.0519 22.4785 11.8732C23.3501 11.3645 24.2275 11.3979 25.0579 11.9734C25.8333 12.5115 26.1768 13.5033 25.951 14.3969C25.7999 14.9959 25.4407 15.4554 24.9911 15.8423C24.6064 16.1742 24.5573 16.3471 25.0461 16.6868C25.9589 17.3192 26.2161 18.3032 25.9334 19.2753C25.7704 19.8331 25.3091 20.1787 25.0481 20.6579C26.8207 22.0307 26.9031 23.325 25.3229 24.9079C22.5256 27.7085 19.7401 30.5169 16.9094 33.2841C16.3774 33.8046 16.5129 34.0108 17.0331 34.3407C18.5446 35.2991 20.4546 35.1479 21.8268 33.8694C22.7592 33.0013 23.6406 32.0763 24.5416 31.1729C27.7551 27.9579 30.9744 24.7488 34.18 21.524C35.6287 20.0668 35.9703 18.1716 34.975 16.6142C34.0975 15.2433 32.7706 14.2751 31.581 12.9887C31.4593 13.4365 31.3925 13.684 31.3238 13.9314C31.2001 14.3674 31.1432 14.9016 30.5288 14.878C29.9261 14.8545 29.8849 14.3203 29.777 13.8804C29.5885 13.1203 29.3706 12.3642 29.2371 11.5924C29.1508 11.0916 28.9034 10.8795 28.4362 10.7557C27.4272 10.4886 26.432 10.1685 25.4328 9.86606C25.0893 9.76197 24.8557 9.54986 24.8773 9.161C24.8949 8.82124 25.1285 8.6602 25.4191 8.53843C25.794 8.38132 26.2357 8.3931 26.6361 8.04155C25.158 6.5686 23.7054 5.11528 22.2488 3.66785C20.2132 1.64499 18.0499 1.65088 16.0045 3.69338C12.0941 7.59967 8.18774 11.5099 4.28331 15.424C3.96138 15.7461 3.63944 16.0839 3.39014 16.461C2.35367 18.0282 2.61279 20.0864 4.01634 21.2844C4.55617 19.3794 5.09207 17.5019 5.61816 15.6204C6.09321 13.9275 7.22979 13.1183 8.67064 13.464C10.1782 13.8254 10.8535 15.1019 10.4707 16.8302C10.2862 17.6649 9.97605 18.4819 9.97016 19.3951C10.3804 19.2832 10.5532 18.9866 10.777 18.7627C12.9323 16.6161 15.0799 14.4617 17.2313 12.3112C18.8999 10.6438 20.1366 10.7047 21.6363 12.5311L21.6344 12.5351ZM9.26347 15.9779C9.23207 15.2924 8.90817 14.8623 8.28197 14.7641C7.64399 14.6659 7.20428 15.0037 7.02564 15.6106C6.61733 16.9893 6.2581 18.3817 5.83998 19.7565C4.67984 23.5881 4.09486 27.6319 1.69999 31.0079C1.45657 31.3496 1.65288 31.5323 1.86881 31.7464C3.81415 33.6887 5.7595 35.6291 7.69503 37.5812C7.98555 37.8739 8.21719 37.9917 8.61568 37.7285C11.0439 36.1279 13.5801 34.6667 15.6727 32.6125C18.6624 29.6803 21.6089 26.7029 24.5769 23.7472C25.0422 23.2837 25.3327 22.7593 24.7929 22.2173C24.2295 21.6517 23.6759 21.9109 23.1793 22.4117C21.8896 23.7138 20.5901 25.0061 19.2964 26.3023C18.9961 26.6028 18.6997 26.9092 18.3915 27.2018C18.101 27.4767 17.7731 27.5946 17.4355 27.2843C17.0684 26.9445 17.1489 26.589 17.4532 26.2532C17.6298 26.0588 17.8183 25.8781 18.0028 25.6935C20.06 23.6333 22.1173 21.5712 24.1784 19.5149C24.6731 19.022 24.9558 18.4681 24.3905 17.8986C23.8369 17.3428 23.2715 17.5647 22.769 18.0714C21.4322 19.4187 20.0875 20.7561 18.7448 22.0995C17.9577 22.885 17.1764 23.6765 16.3814 24.4562C16.0987 24.7351 15.7571 24.8588 15.4234 24.5544C15.0661 24.2264 15.129 23.8592 15.4254 23.5174C15.5746 23.3446 15.7434 23.1875 15.9043 23.0264C18.5407 20.3889 21.179 17.7513 23.8153 15.1118C24.0234 14.9036 24.2432 14.7033 24.4258 14.4754C24.7556 14.065 24.7713 13.6192 24.4199 13.2244C24.0391 12.7943 23.5581 12.7806 23.0968 13.0889C22.8554 13.2499 22.661 13.4817 22.453 13.6899C19.7224 16.4197 16.9938 19.1516 14.2652 21.8815C13.9099 22.2369 13.5114 22.6631 13.0305 22.1545C12.5731 21.6694 12.9657 21.2668 13.3289 20.9054C14.65 19.5895 15.9672 18.2698 17.2843 16.948C18.2089 16.0211 19.1414 15.1039 20.0502 14.1612C20.4742 13.7213 20.5037 13.2028 20.0502 12.7688C19.6419 12.376 19.1571 12.4094 18.7173 12.7531C18.5112 12.9121 18.3365 13.1105 18.152 13.2951C15.3292 16.1173 12.5083 18.9414 9.68552 21.7636C9.501 21.9482 9.31648 22.1348 9.12803 22.3175C8.89835 22.5414 8.6255 22.6435 8.32319 22.5001C7.97181 22.3351 7.91292 22.015 7.97181 21.6674C8.00911 21.4415 8.06996 21.2216 8.121 20.9977C8.50379 19.3087 8.88658 17.6197 9.26151 15.9739L9.26347 15.9779ZM30.5739 7.53682C30.3894 8.94693 29.0408 8.66216 28.2124 9.23956C29.1508 9.68145 30.3462 9.55968 30.5975 10.9011C30.6858 9.41239 32.1444 9.8091 32.8294 9.16886C32.0325 8.6543 30.7388 8.98425 30.5739 7.53486V7.53682Z"
                fill="white"
              />
              <path
                d="M34.5314 35.6487C34.5353 36.9665 33.4655 38.0388 32.1699 38.0133C30.9116 37.9897 29.8712 36.9351 29.8633 35.6742C29.8555 34.3643 30.9194 33.3175 32.2425 33.3332C33.5361 33.3489 34.5274 34.3505 34.5314 35.6487ZM33.1828 35.578C33.0886 35.0281 32.7784 34.6648 32.1385 34.7021C31.5515 34.7355 31.2257 35.1106 31.2257 35.6585C31.2257 36.2634 31.6124 36.6582 32.2189 36.6464C32.8196 36.6346 33.1592 36.2497 33.1828 35.578Z"
                fill="#FFE600"
              />
              <path
                d="M1.96299 4.48288C1.48009 4.48288 1.25042 4.50055 1.02664 4.47895C0.655627 4.4436 0.416139 4.20596 0.400435 3.85049C0.380805 3.43806 0.645812 3.19649 1.05412 3.14936C1.2779 3.12383 1.50757 3.12972 1.73332 3.13365C2.27315 3.14347 3.00143 3.01188 3.02106 3.78371C3.04265 4.65178 2.2653 4.4652 1.96299 4.48288Z"
                fill="#FFE600"
              />
              <path
                d="M5.68491 4.48681C5.48861 4.48681 5.29035 4.50252 5.09601 4.48288C4.68181 4.4436 4.42466 4.22364 4.43448 3.78764C4.44233 3.39682 4.70145 3.18471 5.05675 3.15329C5.4788 3.11401 5.90673 3.12579 6.33075 3.14347C6.73905 3.15918 7.03154 3.3595 7.03743 3.79746C7.04332 4.29041 6.72727 4.48091 6.27382 4.49073C6.07752 4.49466 5.88122 4.49073 5.68491 4.49073C5.68491 4.49073 5.68491 4.48681 5.68491 4.48484V4.48681Z"
                fill="#FFE600"
              />
              <path
                d="M4.42072 5.86942C4.41287 6.25435 4.49924 6.67856 4.17534 6.96923C3.87108 7.24221 3.52166 7.2265 3.2331 6.90834C2.95042 6.59608 2.99557 4.95815 3.29199 4.68712C3.57663 4.42788 3.88286 4.42788 4.15964 4.67927C4.52084 5.00725 4.39913 5.45699 4.42072 5.86942Z"
                fill="#FFE600"
              />
              <path
                d="M3.0741 1.79621C3.0741 1.57036 3.06232 1.34254 3.07606 1.11865C3.09962 0.737649 3.3234 0.529471 3.69441 0.501976C4.07524 0.474481 4.33436 0.694442 4.3795 1.04599C4.43643 1.4918 4.43054 1.9494 4.40306 2.39915C4.37754 2.83318 4.15768 3.15134 3.67086 3.11402C3.24096 3.08063 3.0741 2.78211 3.06821 2.37754C3.06429 2.18311 3.06821 1.99065 3.06821 1.79621C3.07018 1.79621 3.07214 1.79621 3.0741 1.79621Z"
                fill="#FFE600"
              />
              <path
                d="M38 29.6469C37.9725 30.0593 37.7664 30.348 37.362 30.3873C36.8948 30.4325 36.6219 30.1634 36.6102 29.696C36.6003 29.2737 36.8379 29.0263 37.2678 29.0145C37.6937 29.0027 37.9156 29.2502 38 29.6469Z"
                fill="#FFE600"
              />
            </g>
            <defs>
              <clipPath id="clip0_7_10884">
                <rect
                  width="38"
                  height="39"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "#ffffff",
            textDecoration: "none",
            fontSize: 24
          }}
        >
          Cleaning
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" }
            }}
          >
            {pages.map((page, index) => (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page.title}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" }, paddingRight: "10px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M40 20C40 23.9556 38.827 27.8224 36.6294 31.1114C34.4318 34.4004 31.3082 36.9638 27.6537 38.4776C23.9991 39.9913 19.9778 40.3874 16.0982 39.6157C12.2186 38.844 8.65491 36.9392 5.85786 34.1421C3.06081 31.3451 1.156 27.7814 0.384294 23.9018C-0.38741 20.0222 0.00865672 16.0009 1.52241 12.3463C3.03616 8.69181 5.59961 5.56824 8.8886 3.37061C12.1776 1.17298 16.0444 -4.71704e-08 20 0V16C19.2089 16 18.4355 16.2346 17.7777 16.6741C17.1199 17.1136 16.6072 17.7384 16.3045 18.4693C16.0017 19.2002 15.9225 20.0044 16.0769 20.7804C16.2312 21.5563 16.6122 22.269 17.1716 22.8284C17.731 23.3878 18.4437 23.7688 19.2196 23.9231C19.9956 24.0775 20.7998 23.9983 21.5307 23.6955C22.2616 23.3928 22.8864 22.8801 23.3259 22.2223C23.7654 21.5645 24 20.7911 24 20H40Z"
              fill="#7755FF"
            />
            <path
              d="M31.5441 20.1471C31.5441 26.4415 26.4415 31.5441 20.1471 31.5441C13.8526 31.5441 8.75 26.4415 8.75 20.1471C8.75 13.8526 13.8526 8.75 20.1471 8.75C26.4415 8.75 31.5441 13.8526 31.5441 20.1471Z"
              fill="white"
            />
            <path
              d="M26 20C26 23.3137 23.3137 26 20 26C16.6863 26 14 23.3137 14 20C14 16.6863 16.6863 14 20 14C23.3137 14 26 16.6863 26 20Z"
              fill="#FFC448"
            />
          </svg>
        </Box>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "#ffffff",
            textDecoration: "none"
          }}
        >
          Cleaning
        </Typography>
        <Box
          className="nav-bar"
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
            marginRight: "30px"
          }}
        >
          {pages.map((page, index) => (
            <Link key={index} href={page.link} className={page.class}>
              {page.title}
            </Link>
          ))}
        </Box>

        <Link href="tel:+012-345-677-890" className="contact-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
          >
            <path
              d="M3.16667 0.5C1.41777 0.5 0 1.91777 0 3.66667V6.2C1.26667 12.8834 6.96667 18.55 13.3 19.5H15.8333C17.5822 19.5 19 18.0822 19 16.3333V14.5828C19 13.8632 18.5934 13.2053 17.9497 12.8834L14.8895 11.3533C13.8554 10.8363 12.603 11.355 12.2373 12.4519L11.8602 13.5834C11.7168 14.0134 11.2758 14.2693 10.8314 14.1804C8.05002 13.6241 5.87587 11.45 5.31959 8.66855C5.23071 8.22417 5.48664 7.78315 5.91657 7.63985L7.32083 7.17176C8.2627 6.8578 8.80406 5.87162 8.56327 4.90844L7.82095 1.93918C7.6095 1.09336 6.84953 0.5 5.97768 0.5H3.16667Z"
              fill="#FFE600"
            />
          </svg>
          +012-345-677-890
        </Link>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
};

export default Header;
