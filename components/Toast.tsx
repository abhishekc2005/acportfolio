import { toast as sonnerToast } from "sonner";
import Toast from "./ToastLayout";

export default function toast(toast: { title: string; description: string }) {
  return sonnerToast.custom((id) => (
    <Toast id={id} title={toast.title} description={toast.description} />
  ));
}
