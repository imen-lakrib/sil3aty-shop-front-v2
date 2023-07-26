import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import CustomIconButton from "../../theme/CustomIconButton";
import Badge from "@mui/material/Badge";
import Flex from "../../theme/Flex";
import MobileMenu from "./MobileMenu";
import Logo from "../../theme/Logo";
import CartPapover from "./CartPapover";
import UserPapover from "./UserPapover";
import { selectCartItems } from "../../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const Navbar= () => {
  const navigate= useNavigate()
 

  const searchbtn = () => {
    // Handle button click event here
    navigate("/shop")

  };
  const [bgColor, setBgColor] = useState("transparent");
  const [divider, setDivider] = useState("0");
  const [fixed, setFixed] = useState("static");
  const [height, setHeight] = useState("0");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setBgColor("primary.main");
        setDivider("1px solid #94a2af");
        setFixed("fixed");
        setHeight("60px");
      } else {
        setBgColor("primary.main");
        setFixed("relative");
        setDivider("0");
        setHeight("0");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // user papover
  const [openUser, setOpenUser] = useState(null);

  const handleOpenUser = (event: any) => {
    setOpenUser(event.currentTarget);
  };

   // cart papover
   const [open, setOpen] = useState(null);

   const handleOpen = (event: any) => {
     setOpen(event.currentTarget);
   };


   const cartItems = useSelector(selectCartItems);


  return (
    <>
      <Box
        sx={{
          backgroundColor: bgColor,
          position: fixed,
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          transition:
            "background-color 0.1s ease-in-out, height 0.5s ease-in-out",
          borderBottom: divider,
          height: height, // add the height property to the styles
          overflow: "hidden",
          p: "5px 20px",
        }}
      >
        <Flex justifyContent="space-around" alignItems="center">
          <MobileMenu />
          <Logo />
          <MenuItems />

          <Flex>
            <Box
              sx={{
                display: { xs: "none", sm: "block", md: "block", lg: "block" },
              }}
            >
              <CustomIconButton
                color="secondary"
                onClick={searchbtn}
                icon={<SearchIcon />}
              />
            </Box>
            <CustomIconButton
              color="secondary"
              onClick={handleOpenUser}
              icon={<PersonOutlineOutlinedIcon />}
            />

            <Badge
              badgeContent={cartItems.length}
              color="info"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <CustomIconButton
                color="secondary"
                onClick={handleOpen}
                icon={<ShoppingBasketOutlinedIcon />}
              />
            </Badge>
          </Flex>
        </Flex>
      </Box>
      <UserPapover openUser={openUser} setOpenUser={setOpenUser} />
      <CartPapover open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
