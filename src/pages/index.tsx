import React from "react";
import { datadogLogs } from '@datadog/browser-logs';

const Index = () => {
  return (
    <div>
      <h1>Sample Top</h1>
      <button onClick={test}>test</button>
    </div>
  );
};

const test = () => {
  datadogLogs.logger.info('Button clicked', {name: 'buttonName', id: 123 });
}

export default Index;
