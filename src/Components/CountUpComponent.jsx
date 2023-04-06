import CountUp from "react-countup";
import { Box } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

function CountUpComponent({ endValue, isPercentage = false, ...rest }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Box {...rest} ref={ref}>
      {inView && (
        <CountUp start={0} end={endValue} duration={10} suffix={isPercentage ? "%" : ""} separator="" />
      )}
    </Box>
  );
}

export default CountUpComponent;