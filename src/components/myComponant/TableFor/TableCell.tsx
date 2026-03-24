import { FC, ReactNode } from "react";

type TableCellProps = {
  text?: ReactNode;
  subText?: ReactNode;
  children?: ReactNode;
  hasImg?: boolean;
  imgSrc?: string;
  className?: string;
};

export const TableCell: FC<TableCellProps> = ({
  text,
  subText,
  children,
  hasImg,
  imgSrc,
  className,
}) => {
  if (children) {
    return <td className={className}>{children}</td>;
  }

  return (
    <td className={`py-2 ${className}`}>
      {hasImg ? (
        <div className="d-flex align-items-center">
          <div className="avatar-30 me-2">
            <img
              src={imgSrc}
              alt="avatar"
              className="img-fluid rounded-circle w-100 h-100"
            />
          </div>
          <div>
            <div className="fw-semibold">{text}</div>
            {subText && <small className="text-muted">{subText}</small>}
          </div>
        </div>
      ) : (
        <>
          <div className="fw-semibold">{text}</div>
          {subText && <div className="text-muted small">{subText}</div>}
        </>
      )}
    </td>
  );
};
