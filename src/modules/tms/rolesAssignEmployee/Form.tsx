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
  roleData?:any
}

const RoleForm = ({
  isOpen,
  onClose,
  updateData,
  onSubmit,
  listData,roleData
}: IRoleForm) => {
  const {
    register,
    handleSubmit,
    reset,
    control,watch,
    setValue,
    formState: { errors },
  } = useForm();

   useEffect(() => {
    if (isOpen && updateData) {
      reset({
        ...updateData
      });
    } else reset({ updateData });

    // eslint-disable-next-line
  }, [isOpen, updateData, reset]);

  console.log(watch('roles'));

  return (
    <Drawer title="Form" size="sm" isOpen={isOpen} onClose={() => onClose()}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          label="রোলের নাম"
          placeholder="রোলের নাম লিখুন"
          viewOnly={updateData?.username}
          registerProperty={register("username", {
            required: "রোলের নাম লিখুন",
          })}
          isRequired
          isError={!!errors.username}
          errorMessage={errors.username?.message as string}
        />


 <Autocomplete
          filterProps={["nameBn", "nameEn"]}
          options={roleData || []}
          isMulti
          label="প্যারেন্ট"
          placeholder="প্যারেন্ট বাছাই করুন"
          getOptionLabel={(op) => op?.name}
          getOptionValue={(op) => op?.id}
          name="roles"
          noMargin
          control={control}
          onChange={(val) => setValue("parent", {id:val?.id})}
          // isRequired="প্যারেন্ট বাছাই করুন"
          // isError={!!errors?.parent}
          // errorMessage={errors?.parent?.message as string}
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
