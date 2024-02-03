import { type ReactNode } from "react";

type InfoBoxProp = {
  mode: 'hint' | 'warning';
  severity?: 'low' | "medium" | 'high';
  children: ReactNode;
}

export default function InfoBox({mode, severity, children}: InfoBoxProp) {
  if(mode === 'hint'){
    return (
     <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  } 

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      {mode === 'warning' ? <h2>Warning</h2> : null}
      <p>{children}</p>
    </aside>
  )
}
