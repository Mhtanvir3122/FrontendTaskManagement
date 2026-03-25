import { toast as reactToast } from "react-toastify";

// ================= TYPES =================
export interface ToastOptions {
  duration?: number;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
}

type ToastType = "success" | "error" | "info" | "warning" | "loading";

// ================= FUNCTION =================
export const showToast = (
  type: ToastType,
  message: string,
  options?: ToastOptions
) => {
  const config = {
    autoClose: options?.duration ?? 3000,
    position: options?.position ?? "top-right",
  };

  switch (type) {
    case "success":
      return reactToast.success(message, config);
    case "error":
      return reactToast.error(message, config);
    case "info":
      return reactToast.info(message, config);
    case "warning":
      return reactToast.warning(message, config);
    case "loading":
      return reactToast.loading(message, { ...config, autoClose: false });
    default:
      return reactToast(message, config);
  }
};
