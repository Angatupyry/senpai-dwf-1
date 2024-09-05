import { useState } from "react";

export function DisableButton() {
  const [value, setValue] = useState("");

  function disableButton(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input type='text' onChange={disableButton} />
      <button disabled={value.length < 5}>Submit</button>
    </>
  );
}
