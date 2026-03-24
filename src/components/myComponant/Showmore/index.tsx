import { useState } from "react";

type IShowmore = {
  value: string;
  charLimit?: number;
  fontSize?: number;
  className?: string;
};

const Showmore = ({
  value,
  fontSize = 14,
  charLimit = 100,
  className,
}: IShowmore) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  return (
    <span
      className={`text-gray-700 ` + className}
      style={{ fontSize: fontSize }}
    >
      {showDetail ? (
        <span>
          {value}
          <span
            className="text-primary text-hover-info ms-2 cursor-pointer"
            onClick={() => setShowDetail(!showDetail)}
          >
            সংক্ষেপ করুন
          </span>
        </span>
      ) : charLimit > value?.length ? (
        value
      ) : (
        <span>
          {value.substring(0, charLimit)}
          <span
            className="text-primary text-hover-info ms-2 cursor-pointer"
            onClick={() => setShowDetail(!showDetail)}
          >
            . . . আরও দেখুন
          </span>
        </span>
      )}
    </span>
  );
};

export default Showmore;
