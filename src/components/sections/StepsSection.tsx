import StepCart from "../../theme/carts/StepCart";
import Flex from "../../theme/Flex";

const steps = [
  {
    id: "1",
    image: "/HIW1img.png",
    title: "Filter & Discover",
    description: "Smart filtering and suggestions make it easy to find",
  },
  {
    id: "2",
    image: "/HIW2img.png",
    title: "Add to bag",
    description: "Easily select the correct items and add them to the cart",
  },
  {
    id: "3",
    image: "/HIW3img.png",
    title: "Fast shipping",
    description: "The carrier will confirm and ship quickly to you",
  },
  {
    id: "4",
    image: "/HIW4img.png",
    title: "Enjoy the product",
    description: "Have fun and enjoy your 5-star quality products",
  },
];

const Steps = () => {
  return (
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        {steps.map((step) => {
          return <StepCart key={step.id} data={step} />;
        })}
      </Flex>
  );
};

export default Steps;
