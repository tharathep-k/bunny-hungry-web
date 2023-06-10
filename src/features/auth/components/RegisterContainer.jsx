import { useState } from "react";
import Modal from "../../../components/Modal";
import RegisterForm from "./RigisterForm";

export default function RegisterContainer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4">
      Do you have member ? &nbsp;&nbsp;&nbsp;
      <span
        className="underline font-semibold hover:text-red-500 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Join us !!!
      </span>
      <Modal
        title="Register"
        width="26"
        open={open}
        onClose={() => setOpen(false)}
      >
        <RegisterForm onSuccess={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
