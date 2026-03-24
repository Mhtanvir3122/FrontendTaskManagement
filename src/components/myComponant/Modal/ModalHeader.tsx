import { ReactNode } from "react";
import clsx from "clsx";
import IconButton from "../IconButton";

type IModalHeaderProps = {
  title: string | ReactNode | ReactNode[] | undefined;
  titleClass?: string;
  className?: string;
  handleClose?: () => void;
  isMaximized?: boolean;
  onMaximize?: () => void;
};

const ModalHeader = ({
  title,
  titleClass,
  className,
  handleClose,
  isMaximized,
  onMaximize,
}: IModalHeaderProps) => {
  return (
    <div
      className={clsx(
        "modal-header bg-light-secondary py-2 px-3 d-flex align-items-center justify-content-between",
        className
      )}
    >
      <div className={clsx("modal-title m-0", titleClass)}>
        {typeof title === "string" ? <h3 className="m-0">{title}</h3> : title}
      </div>

      <div className="d-flex gap-2 align-items-center">
        {onMaximize && (
          <IconButton
            iconName={isMaximized ? "fullscreen_exit" : "fullscreen"}
            onClick={onMaximize}
            iconSize={15}
            className="d-none d-md-block"
            color="primary"
            rounded="circle"
          />
        )}
        <IconButton
          iconName="close"
          onClick={handleClose}
          color="danger"
          iconSize={15}
          rounded="circle"
        />
      </div>
    </div>
  );
};

export default ModalHeader;
