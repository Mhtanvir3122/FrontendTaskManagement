import { Button } from "react-bootstrap";

import Icon from "@/components/myComponant/Icon";
import Modal from "@/components/myComponant/Modal";
import ModalBody from "@/components/myComponant/Modal/ModalBody";
import ModalFooter from "@/components/myComponant/Modal/ModalFooter";
import ModalHeader from "@/components/myComponant/Modal/ModalHeader";
import { Autocomplete } from "@/components/myComponant/Select";
import Switch from "@/components/myComponant/Switch";
import Checkbox from "@/components/myComponant/Checkbox";

interface AgentMappingModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  data?: any;
}

export const AgentMappingModal = ({
  isOpen,
  onClose,
  data,
}: AgentMappingModalProps) => {
  return (
    <div>
      <Modal size="xl" isOpen={isOpen} handleClose={onClose} noHeader>
        <ModalHeader
          handleClose={onClose}
          className="bg-dark-light"
          title={
            <div className="d-flex gap-2">
              <h5 className="mt-1">বিস্তারিত</h5>
            </div>
          }
        />
        <ModalBody>
          <div className="  mb-3">
            <div className="">
              {" "}
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
                // control={control}
                // onChange={(val) => setValue("moduleId", val?.id)}
                isRequired="মডিউল বাছাই করুন"
                // isError={!!errors?.moduleDto}
                // errorMessage={errors?.moduleDto?.message as string}
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
                // control={control}
                // onChange={(val) => setValue("moduleId", val?.id)}
                isRequired="মডিউল বাছাই করুন"
                // isError={!!errors?.moduleDto}
                // errorMessage={errors?.moduleDto?.message as string}
              />
              <Checkbox name="ss" registerProperty={'sss'}  />
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          {" "}
          <Button>
            <Icon icon="add" />
            &nbsp;যুক্ত করুন
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
