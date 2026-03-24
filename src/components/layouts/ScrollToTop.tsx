import React, { useEffect, useState } from "react";
import { IconChevronUp } from "@tabler/icons-react";

const ScrollToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return showButton ? (
    <div className="go-top d-grid position-fixed" onClick={scrollToTop}>
      <span className="progress-value d-flex align-items-center justify-content-center">
        <IconChevronUp size={20} />
      </span>
    </div>
  ) : null;
};

export default ScrollToTop;
