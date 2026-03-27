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
  updateData?: any;
  listData?: any;
}

const CertificationForm = ({
  isOpen,
  onClose,
  updateData,
  onSubmit,
  listData,
}: ICertificationForm) => {
  const initValue = useRef<any>(null);
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isOpen && updateData) {
      initValue.current = {
        ...updateData,
      };
    } else initValue.current = {};
    reset({ ...initValue.current });
  }, [isOpen, updateData, reset]);

  console.log(listData);

  return (
    <Drawer title="Form" size="sm" isOpen={isOpen} onClose={() => onClose()}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          label="মেনুর নাম"
          placeholder="মেনুর নাম লিখুন"
          registerProperty={register("name", {
            required: "মেনুর নাম লিখুন",
          })}
          isRequired
          isError={!!errors.name}
          errorMessage={errors.name?.message as string}
        />

        <Input
          label="মেনুর টাইটেল"
          placeholder="মেনুর টাইটেল লিখুন"
          registerProperty={register("title", {})}
        />

        <Input
          label="মেনুর ধরন"
          placeholder="মেনুর ধরন লিখুন"
          registerProperty={register("type", {})}
        />

        <Input
          label="আইকন ক্লাস"
          placeholder="icon class লিখুন (e.g. home)"
          registerProperty={register("iconClass")}
        />

        <Input
          label="পাথ"
          placeholder="/dashboard এর মত লিখুন"
          isRequired
          registerProperty={register("path", {
            required: "পাথ লিখুন",
          })}
          isError={!!errors.path}
          errorMessage={errors.path?.message as string}
        />

        <Input
          label="Collapse ID"
          placeholder="collapse id লিখুন"
          registerProperty={register("collapseId")}
          isError={!!errors.collapseId}
          errorMessage={errors.collapseId?.message as string}
        />

        <Input
          label="Badge Count"
          placeholder="badge (e.g. new)"
          registerProperty={register("badgeCount")}
          isError={!!errors.badgeCount}
          errorMessage={errors.badgeCount?.message as string}
        />

        <Autocomplete
          filterProps={["nameBn", "nameEn"]}
          options={listData || []}
          label="প্যারেন্ট"
          placeholder="প্যারেন্ট বাছাই করুন"
          getOptionLabel={(op) => op?.name}
          getOptionValue={(op) => op?.id}
          name="parentDto"
          noMargin
          control={control}
          onChange={(val) => setValue("parent", val?.id)}
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
export default CertificationForm;
