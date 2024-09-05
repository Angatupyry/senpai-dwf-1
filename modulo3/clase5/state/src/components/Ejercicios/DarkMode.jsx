import { useState } from "react";

export const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  const black = {
    backgroundColor: "black",
    color: "white",
    padding: "1rem",
    margin: "0.5rem",
  };

  const light = {
    backgroundColor: "white",
    color: "black",
    padding: "1rem",
    margin: "0.5rem",
  };

  return (
    <div style={isDark ? black : light}>
      <h3>ex11: dark mode</h3>
      <button onClick={() => setIsDark(!isDark)}>Change mode</button>
      <h3>Hello world</h3>
      <p>
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application, and React will efficiently update
        and render just the right components when your data changes.
      </p>
    </div>
  );
};
