import { FC } from "react";

import StepData1 from "@/components/apps/e-shop/check-out/StepData1.tsx";
import StepData2 from "@/components/apps/e-shop/check-out/StepData2.tsx";
import StepData3 from "@/components/apps/e-shop/check-out/StepData3.tsx";
import StepData4 from "@/components/apps/e-shop/check-out/StepData4.tsx";
import StepData5 from "@/components/apps/e-shop/check-out/StepData5.tsx";

interface CheckoutTabsDataPops {
  currentStep: number;
}

const CheckoutTabsData: FC<CheckoutTabsDataPops> = ({ currentStep }) => {
  return (
    <>
      <div className="mt-4">
        {currentStep === 1 && <StepData1 />}

        {currentStep === 2 && <StepData2 />}

        {currentStep === 3 && <StepData3 />}

        {currentStep === 4 && <StepData4 />}
        {currentStep === 5 && <StepData5 />}
      </div>
    </>
  );
};

export default CheckoutTabsData;
