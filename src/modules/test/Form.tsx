import { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import Drawer from "@/components/myComponant/Drawer/Drawer";
import { Autocomplete } from "@/components/myComponant/Select";
import Separator from "@/components/myComponant/Separator/Separator";
import Input from "@/components/myComponant/input/input";

interface ICertificationForm {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  updateData?: { data: any | null; dType: string | null; idx: number | null };
}

const CertificationForm = ({
  isOpen,
  onClose,
  updateData,
  onSubmit,
}: ICertificationForm) => {
  const initValue = useRef<any>(null);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isOpen && updateData?.data) {
      initValue.current = {
        ...updateData?.data,
      };
    } else initValue.current = {};
    reset({ ...initValue.current });
  }, [isOpen, updateData, reset]);

  return (
    <Drawer title="Form" size="sm" isOpen={isOpen} onClose={() => onClose()}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          label="নাম (ইংরেজি)"
          placeholder="নাম (ইংরেজি) লিখুন"
          registerProperty={{
            ...register("titleEn", {
              required: "নাম (ইংরেজি) লিখুন",
            }),
          }}
          // isPhone
          isRequired
          isError={!!errors?.titleEn}
          errorMessage={errors?.titleEn?.message as string}
        />

        <Autocomplete
          filterProps={["nameBn", "nameEn"]}
          options={[
            { id: 1, nameBn: "Tanvir" },
            { id: 2, nameBn: "Rabbani Vai" },
          ]}
          label="মডিউল"
          placeholder="মডিউল বাছাই করুন"
          getOptionLabel={(op) => op?.nameBn}
          getOptionValue={(op) => op?.id}
          name="module2"
          noMargin
          control={control}
          // onChange={(val) => setValue("module2Id", val?.id)}
          isRequired="মডিউল বাছাই করুন"
          isError={!!errors?.module2}
          errorMessage={errors?.module2?.message as string}
        />

          <Autocomplete
          filterProps={["nameBn", "nameEn"]}
          options={[
            { id: 1, nameBn: "Tanvir" },
            { id: 2, nameBn: "Rabbani Vai" },
          ]}
          label="মডিউল"
          placeholder="মডিউল বাছাই করুন"
          getOptionLabel={(op) => op?.nameBn}
          getOptionValue={(op) => op?.id}
          name="module"
          noMargin
          control={control}
          // onChange={(val) => setValue("moduleId", val?.id)}
          isRequired="মডিউল বাছাই করুন"
          isError={!!errors?.module}
          errorMessage={errors?.module?.message as string}
        />
        <div className="text-end mt-4">
          <Separator />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Drawer>
  );
};
export default CertificationForm;
