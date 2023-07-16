import {
  Dialog,
  Box,
  Typography,
  Button,
  Divider,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomIconButton from "../CustomIconButton";
import Flex from "../Flex";
import StarIcon from "@mui/icons-material/Star";
import CircleIcon from "@mui/icons-material/Circle";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import CustomAccordion from "../CustomAccordion";

interface QuickViewProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: {
    _id: string;
    name: string;
    description: string;
    price: number;
    discountPrice: number;
    color: string;
    size: string;
    ratings: number;
    images: { public_id: string; url: string; _id: string }[];
    category: string;
    stock: number;
    numberOfReviews: number;
    createdAt: string;
    reviews: {
      user: string;
      rating: number;
      comment: string;
      time: string;
      _id: string;
    }[];
    __v: number;
  };
}

const QuickView: React.FC<QuickViewProps> = ({ open, setOpen, data }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ zIndex: 100000000000000 ,}}
      >
        <DialogTitle sx={{ m: 0, p: .5, backgroundColor: "primary.main" , textAlign:'right' }}>
          <CustomIconButton
            color="secondary"
            onClick={handleClose}
            icon={<CloseIcon />}
          />
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: "primary.main",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Box sx={{ backgroundColor: "primary.main" }}>
            <Box
              sx={{
                display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
                justifyContent: "space-evenly",
                alignItems: "stretch",
              }}
            >
              <Box sx={{ width: { xs: "100%" , sm: "100%" , md: "40%" , lg: "40%"  }}}>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "secondary.main",
                    height: "400px",
                    maxWidth: "400px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    textAlign: "center",
                  }}
                >
                  <img
                    style={{ width: "100%" }}
                    src={data?.images[0].url}
                    alt=""
                  />
                </Box>
                <Box sx={{ margin: "10px 0" }}>
                  <Flex justifyContent="space-between">
                    <Box
                      sx={{
                        backgroundColor: "secondary.main",
                        width: "48%",
                        borderRadius: "20px",
                        overflow: "hidden",
                        textAlign: "center",
                      }}
                    >
                      {data?.images[0] ? (
                        <img
                          style={{ width: "100%" }}
                          src={data?.images[0].url}
                          alt=""
                        />
                      ) : null}
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "secondary.main",
                        width: "48%",
                        borderRadius: "20px",
                        overflow: "hidden",
                        textAlign: "center",
                      }}
                    >
                      {data?.images[0] ? (
                        <img
                          style={{ width: "100%" }}
                          src={data?.images[0].url}
                          alt=""
                        />
                      ) : null}
                    </Box>
                  </Flex>
                </Box>
              </Box>

              <Box sx={{ color: "secondary.main",  width: { xs: "100%" , sm: "100%" , md: "40%" , lg: "40%"} }}>
                <Typography variant="h4">{data?.name}</Typography>
                <Box sx={{ margin: "20px 0" }}>
                  <Flex justifyContent="space-between" alignItems="flex-end">
                    <Button
                      variant="outlined"
                      sx={{
                        color: "success.main",
                        border: "2px #5dc65f solid",
                        borderRadius: "10px",
                        fontSize: "15px",
                        fontWeight: 600,
                        padding: "1px",
                      }}
                    >
                      ${data?.price}
                    </Button>
                    <Divider
                      sx={{
                        marginInline: "10px",
                        height: "25px",
                        border: ".05px solid white",
                      }}
                    />

                    <Flex>
                      <Box sx={{ marginInline: "2px" }}></Box>
                      <StarIcon sx={{ color: "warning.main" }} />

                      <Box sx={{ color: "secondary.contrastText" }}>
                        {`${data?.ratings} (${data?.numberOfReviews} ${
                          data?.numberOfReviews > 1 ? "reviews" : "review"
                        })`}
                      </Box>
                    </Flex>
                  </Flex>
                </Box>

                <Box sx={{ margin: "20px 0" }}>
                  <Typography variant="h6">color: {data?.color}</Typography>
                  <CircleIcon sx={{ color: data.color }} />
                </Box>

                <Box sx={{ margin: "20px 0" }}>
                  <Typography variant="h6">Size: {data?.size}</Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "info.main",
                      border: "2px #12a5e7 solid",
                      borderRadius: "10px",
                      fontSize: "15px",
                      fontWeight: 600,
                      padding: "1px",
                    }}
                  >
                    {data?.size}
                  </Button>
                </Box>

                <Box sx={{ margin: "20px 0" }}>
                  <CustomIconButton
                    backgroundColor="#ccd3d6"
                    textColor="#111827"
                    fontSize="10px"
                    color="secondary"
                    text="Add to bag"
                    icon={
                      <ShoppingBasketOutlinedIcon sx={{ fontSize: "20px" }} />
                    }
                  />
                </Box>
                <Divider
                  sx={{
                    backgroundColor: "secondary.contrastText",
                    margin: "20px 0",
                    width: "100%",
                  }}
                />

                <CustomAccordion
                  header="Description"
                  content={<Typography>Accordion Content 1</Typography>}
                />
                <CustomAccordion
                  header="Description"
                  content={<Typography>Accordion Content 1</Typography>}
                />
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions  sx={{ backgroundColor: "primary.main"}}>
         
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default QuickView;
