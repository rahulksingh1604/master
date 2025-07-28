import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import EmployeeDetails from './EmployeeDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
let breakElement = React.createElement("br", {});
let HWElement = React.createElement("div",{},"Hello World!");
let NoteElement = React.createElement("label", { style: { color: "red", fontWeight: "bold" } }, "Note: Hello World using React.");
root.render(<div>
  <EmployeeDetails />
  { breakElement }
  { HWElement }
  { NoteElement }
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
