import React from "react";
import Button from "./Button";

function CopyResetSavePassword({
  setLength,
  setIsCharAllow,
  setIsNumAllow,
  setSavePassword,
  password,
  passwordRef,
}) {
  function handleResetPassword() {
    setLength(8);
    setIsCharAllow(false);
    setIsNumAllow(false);
  }

  function handleSavePassword() {
    setSavePassword((prev) => {
      return [...prev, password];
    });
  }

  function handleCopyPassword() {
    navigator.clipboard.writeText(password);
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 100);
  }

  return (
    <div className="w-full flex gap-3 flex-wrap">
      <Button bgColor="bg-orange-400" func={handleCopyPassword}>
        Copy Password
      </Button>
      <Button bgColor="bg-red-500" func={handleResetPassword}>
        Reset Password
      </Button>
      <Button bgColor="bg-blue-500" func={handleSavePassword}>
        Save Password
      </Button>
    </div>
  );
}

export default CopyResetSavePassword;
