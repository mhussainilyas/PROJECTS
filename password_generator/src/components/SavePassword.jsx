import React from "react";

function SavePassword({ savePassword }) {
  return (
    <div className="w-full h-84 bg-neutral-900 rounded-xl flex flex-col gap-2 overflow-auto p-6 sm:p-8">
      {savePassword.length < 1 ? (
        <p className="text-white/40 capitalize sm:text-lg">
          saved password will display here
        </p>
      ) : (
        savePassword.map((item, index) => <p key={index}>{item}</p>)
      )}
    </div>
  );
}

export default SavePassword;
