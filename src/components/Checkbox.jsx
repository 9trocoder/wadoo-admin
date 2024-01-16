import React, { useState } from "react";

function Checkbox({ label, onChange }) {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  };
  return (
    <div className="custom-checkbox">
      
      <input
        type='checkbox'
        id='mycheckbox'
        checked={checked}
        onChange={handleChecked}
      /><label for='mycheckbox' className=''></label>
      <span>{label}</span>
    </div>
  );
}

export default Checkbox;
