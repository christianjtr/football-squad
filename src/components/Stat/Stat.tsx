import React from 'react';

export interface StatPropsInterface {
  title: string;
  value: number;
}

function Stat(props: StatPropsInterface): JSX.Element {
  const { title, value } = props;

  return (
    <div className="stat">
      <div className="stat-title">{title}</div>
      <div className="stat-value text-primary">{value}</div>
    </div>
  );
}

export default Stat;
