import React, { useEffect, useRef, useState } from "react";
import SavePassword from "./components/SavePassword";
import NumCharPassword from "./components/NumCharPassword";
import LengthRange from "./components/LengthRange";
import CopyResetSavePassword from "./components/CopyResetSavePassword";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumAllow, setIsNumAllow] = useState(false);
  const [isCharAllow, setIsCharAllow] = useState(false);
  const [savePassword, setSavePassword] = useState([]);
  const passwordRef = useRef(null);

  function generatePassword() {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumAllow) str += "0123456789";
    if (isCharAllow) str += "~!#@$%^&*()_|/.,";
    let pass = "";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }

  useEffect(() => {
    generatePassword();
  }, [length, isNumAllow, isCharAllow]);

  return (
    <div className="w-full px-5 py-10">
      <div className="flex flex-col gap-5 max-w-160 mx-auto">
        <h1 className="text-4xl capitalize text-center max-sm:text-3xl max-sm:font-semibold">
          Password Generator
        </h1>

        <input
          type="text"
          readOnly={true}
          value={password}
          ref={passwordRef}
          className="outline-none border border-white/10 py-2 px-4 text-lg rounded-lg bg-neutral-700 mt-5"
        />

        <CopyResetSavePassword
          setLength={setLength}
          setIsNumAllow={setIsNumAllow}
          setIsCharAllow={setIsCharAllow}
          password={password}
          passwordRef={passwordRef}
          setSavePassword={setSavePassword}
        />

        <LengthRange length={length} setLength={setLength} />

        <NumCharPassword
          isNumAllow={isNumAllow}
          isCharAllow={isCharAllow}
          setIsNumAllow={setIsNumAllow}
          setIsCharAllow={setIsCharAllow}
        />

        <SavePassword savePassword={savePassword} />
      </div>
    </div>
  );
}

export default App;
