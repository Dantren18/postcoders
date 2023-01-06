import { useEffect, useState } from "react";
import { getAreaData } from "./api";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [outcodeSearch, setOutcodeSearch] = useState("");
  const [placeholderText, setPlaceholderText] = useState(
    "Type in the postcode you wish to search here"
  );
  const [renderedOutcode, setRenderedOutcode] = useState("");

  const load = async () => {
    try {
      const areaData = await getAreaData(outcodeSearch);
      setAreas(areaData);
      setRenderedOutcode(outcodeSearch);
    } catch (error) {
      window.alert("todo: fix app");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let outcodeRegEx = /[A-Z]{1,2}[0-9]{1,2}/i;

    if (outcodeSearch === "") {
      setPlaceholderText("You must type some text before submitting!");
      return;
    }

    if (outcodeSearch.length > 4) {
      setOutcodeSearch("");
      setPlaceholderText(
        "The postcode you entered should have a max of 4 characters."
      );
      return;
    }

    if (!outcodeRegEx.test(outcodeSearch)) {
      setOutcodeSearch("");
      setPlaceholderText(
        "The postcode you entered is in an incorrect format. Please try again."
      );
      return;
    }
    load();
  };

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <p>
        Please enter the first part of the postcode you want to search, (e.g.
        “M1” rather than the full “M1 7ED”)
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={outcodeSearch}
            placeholder={placeholderText}
            onChange={(e) => setOutcodeSearch(e.target.value)}
            className="outcodeEntry"
          />
        </label>
        <br />
        <input type="submit" value="submit" />
      </form>
      {renderedOutcode ? (
        <h2>
          {`Areas for ${renderedOutcode.toUpperCase()}: ${areas.length}`}{" "}
        </h2>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
