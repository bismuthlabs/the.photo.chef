import React, { useContext } from "react";
import LoginModal from "./LoginModal";
import { Context } from "@/app/Context/context";

const ProtectedPage = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const onClose = () => setIsOpen(false);
  const { currentUser } = useContext(Context);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {currentUser ? null : <LoginModal />}
      {children}
    </div>
  );
};

export default ProtectedPage;
