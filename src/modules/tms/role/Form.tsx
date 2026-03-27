import { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import Drawer from "@/components/myComponant/Drawer/Drawer";
import { Autocomplete } from "@/components/myComponant/Select";
import Separator from "@/components/myComponant/Separator/Separator";
import Input from "@/components/myComponant/input/input";

interface IRoleForm {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  updateData?: any;
  listData?: any;
}

const RoleForm = ({
  isOpen,
  onClose,
  updateData,
  onSubmit,
  listData,
}: IRoleForm) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm();
const defaultValues = {
  name: "",
  title: "",
  type: "",
  // তোমার form field অনুযায়ী দাও
};
  useEffect(() => {
    if (isOpen && updateData) {
    reset({ ...updateData})   
    } else{reset(defaultValues)};
  }, [isOpen, updateData, reset]);

  console.log(updateData);

  return (
    <Drawer title="Form" size="sm" isOpen={isOpen} onClose={() => onClose()}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          label="রোলের নাম"
          placeholder="রোলের নাম লিখুন"
          registerProperty={register("name", {
            required: "রোলের নাম লিখুন",
          })}
          isRequired
          isError={!!errors.name}
          errorMessage={errors.name?.message as string}
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
export default RoleForm;
