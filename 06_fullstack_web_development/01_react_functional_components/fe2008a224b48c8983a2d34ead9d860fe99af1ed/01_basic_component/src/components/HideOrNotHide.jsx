import React from "react";

export const HideOrNotHide = () => {
  const [HideOrNotHide, setHideContent] = React.useState(true);
  return (
    <div>
      <button onClick={() => setHideContent(!HideOrNotHide)}>{HideOrNotHide ? "Hide Content" : "Revel Content"}</button>
      {HideOrNotHide ? <p>Hey fanzi</p> : null}
    </div>
  );
};
