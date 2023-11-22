import './styles.scss';

import React, { useRef } from "react";

import arrowUp from "../../images/arrow-line-up.png";
import arrowDown from "../../images/arrow-line-down.png";
import { ReactComponent as BookingIcon } from "../../images/booking-features.svg";

const isGroupCompleted = (items) => {
  const taskCompletionSummary = items.tasks.reduce((acc, curr) => {
    acc.totalTasks += 1;

    if (curr.checked) {
      acc.completedTasks += 1;
    }
    return acc;
  }, {
    totalTasks: 0,
    completedTasks: 0
  });

  return taskCompletionSummary.completedTasks === taskCompletionSummary.totalTasks;

}

export const AccordionGroup = ({ title, isOpen, onClick, items, children }) => {
  const contentHeight = useRef();

  return (
    <div className="accordion-item-wrapper">
      <div
        className={`task-group-header ${isGroupCompleted(items) ? "all-done" : "incomplete"}`}
        onClick={onClick}
      >
        <BookingIcon className="logo" />
        <span>{title}</span>
        <div className="expand-button">
          {isOpen ? (
            <div className="expand-area">Hide <img src={arrowUp} alt="Hide content" /></div>
          ) : (
            <div className="expand-area">Expand<img src={arrowDown} alt="Show content" /></div>
          )}
        </div>
      </div>

      <div
        ref={contentHeight}
        className="group-container"
        style={{ height: isOpen ? contentHeight.current.scrollHeight : "0px" }}
      >
        <div className="group-content">{children}</div>
      </div>
    </div>
  );
};
