import { toast as sonnerToast } from "sonner";
import { IconX } from "@tabler/icons-react";

interface ToastProps {
  id: string | number;
  title: string;
  description: string;
}

export default function Toast(props: ToastProps) {
  const { title, description, id } = props;

  return (
    <div className="flex flex-col rounded-lg border bg-background shadow-lg w-full md:max-w-[364px] items-center justify-center px-4 pb-4 pt-2">
      <button
        className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white cursor-pointer self-end"
        onClick={() => {
          sonnerToast.dismiss(id);
        }}
      >
        <IconX size={15} />
      </button>

      <div className="w-full">
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-0.5 text-neutral-800 dark:text-neutral-300 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
