import { useEffect } from "react";

type ToastProps = {
  messsage: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const Toast = ({ messsage, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);
  const style =
    type === "SUCCESS"
      ? "fixed top-4 right-4 z-50 py-2 px-4 bg-green-600 max-w-md border-b-4 border-blue-600"
      : "fixed top-4 right-4 z-50 py-2 px-4 bg-red-600 max-w-md border-b-4 border-blue-600";
  return (
    <div className={style}>
      <div className="flex justify-center items-center">
        <span className="text-lg text-white font-semibold">{messsage}</span>
      </div>
    </div>
  );
};

export default Toast;
