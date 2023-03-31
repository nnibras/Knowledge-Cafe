import React from "react";
import "./Bonus.css";

const Bonus = () => {
  return (
    <div className="bonus-container">
      <div>
        <h2 className="qa">Questions and Answers</h2>
        <h4>1- Props vs state</h4>
        <p>
          Ans: Props are used to pass data from a parent component to child
          component. Props are immutable. On the other hand, state is used to
          manage data within the component itself. State is mutable.
        </p>
      </div>
      <div>
        <h4>2- How does useState work?</h4>
        <p>
          Ans: useState is a Hook in React. This Hook enables the programmer to
          make functional components have a state. It has two components, a
          function to update the state and a value to get the current value of
          the state.
        </p>
      </div>
      <div>
        <h4>3- Purpose of useEffect other than fetching data.</h4>
        <p>
          Ans: Other than fetching data, useEffect is also used for managing the
          lifecycle of component when it is mounted or unmounted. Moreover, it
          is used for scheduling updates to the component state and finally it
          is used for optimizing performance.
        </p>
      </div>
      <div>
        <h4>4- How Does React work?</h4>
        <p>
          Ans: As we all know, React is a JS library, not a framework. React
          uses 6 main concepts. <br />
          i- Component hierarchy: React has a component hierarchy structure by
          separation of components. <br />
          ii- Virtual DOM: React creates a copy of the original DOM and edits
          the copied DOM to update UI. <br />
          iii- JSX: React used JSX which allows developers to write HTML inside
          JS. <br />
          iv- State management: React uses a unidirectional data flow to manage
          the state of the UI components. <br />
          v- Reconciliation: React uses reconciliation to determine which parts
          of the UI need to be updated based on changes to the state. This
          increases efficiency.It uses an algorithm called diff to perform this
          task. <br />
          vi-Rendering: Once the virtual DOM has been reconciled, React updates
          the actual DOM to reflect the changes in the UI components.
        </p>
      </div>
    </div>
  );
};

export default Bonus;
