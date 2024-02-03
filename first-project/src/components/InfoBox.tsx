import { type ReactNode } from "react";

// Discriminated Union
type HintBoxProps = {
  mode: 'hint';
  children: ReactNode;
};

type WarningBoxProps = {
  mode: 'warning';
  severity: 'low' | "medium" | 'high';
  children: ReactNode;
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const {mode, children} = props;
  if(mode === 'hint'){
    return (
     <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  } 

  const {severity} = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      {mode === 'warning' ? <h2>Warning</h2> : null}
      <p>{children}</p>
    </aside>
  )
}
