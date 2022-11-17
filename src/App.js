import "./styles.css";

import { NumberFormatBase } from "react-number-format";
import { useState } from "react";

function MyCustomNumberFormat(props) {
  const format = (numStr, locale) => {
    if (!Number(numStr)) return "";

    const amount = new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2
    }).format(Number(numStr) / 100);

    return `${amount}`;
  };

  return <NumberFormatBase {...props} format={(num) => format(num, "pt-BR")} />;
}

export default function App() {
  const [valuesObj, setValuesObj] = useState({});

  return (
    <div className="App">
      <h3>
        Demo for <code>Custom Numeric Formalt</code>
        <h5>To see the value change, type something in the input field</h5>
      </h3>

      <p>
        <MyCustomNumberFormat
          value={111}
          onValueChange={(values, sourceInfo) => {
            setValuesObj(values);
          }}
        />
      </p>
      <hr />
      <code>{JSON.stringify(valuesObj)}</code>
      <hr />
    </div>
  );
}
