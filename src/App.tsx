import './App.css';
import React, { useState } from 'react';
import Plotly from 'plotly.js';
import PlotlyEditor from 'react-chart-editor';
import 'react-chart-editor/lib/react-chart-editor.css';

const dataSources = {
  col1: [1, 2, 3], // eslint-disable-line no-magic-numbers
  col2: [4, 3, 2], // eslint-disable-line no-magic-numbers
  col3: [17, 13, 9], // eslint-disable-line no-magic-numbers
};

const dataSourceOptions = Object.keys(dataSources).map((name) => ({
  value: name,
  label: name,
}));

const config = { editable: true };

function App() {
  const [data, setData] = useState([]);
  const [layout, setLayout] = useState({});
  const [frames, setFrames] = useState([]);

  const handleUpdate = (newData, newLayout, newFrames) => {
    setData(newData);
    setLayout(newLayout);
    setFrames(newFrames);
  };

  return (
    <div className="app">
      <PlotlyEditor
        data={data}
        layout={layout}
        config={config}
        frames={frames}
        dataSources={dataSources}
        dataSourceOptions={dataSourceOptions}
        plotly={Plotly}
        onUpdate={handleUpdate}
        useResizeHandler
        debug
        advancedTraceTypeSelector
      />
    </div>
  );
}

export default App;