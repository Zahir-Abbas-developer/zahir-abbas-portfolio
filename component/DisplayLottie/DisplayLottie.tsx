import React, { Suspense } from "react";
import Lottie from "lottie-react";
import Loading from "../Loading/Loading";

interface DisplayLottieProps {
  animationData: any; // You can specify a more precise type if known
}

const DisplayLottie: React.FC<DisplayLottieProps> = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Suspense fallback={<Loading />}>
      <Lottie
        animationData={defaultOptions.animationData}
        loop={defaultOptions.loop}
      />
    </Suspense>
  );
};

export default DisplayLottie;