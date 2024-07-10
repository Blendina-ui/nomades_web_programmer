/* eslint-disable react/prop-types */
import { useState } from "react";

function App() {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  return <form>
    <CGUCheckbox checked={isTermsAccepted} passedSetter={setIsTermsAccepted} />
    <button type="submit" disabled={!isTermsAccepted}>Send</button>
  </form>
}

function CGUCheckbox ({checked, passedSetter}) {
  return <div>
    <label>
      <input type="checkbox" checked={checked} onChange={() => {passedSetter(!checked)}} />
      I read and accept the conditions of use
    </label>
  </div>
}

export default App;