import './styles.scss';

import React, { useState } from "react";

import { AccordionGroup } from "../AccordionGroup/accordionGroup";
import { Progressbar } from "../ProgresBar/progressBar";
import { Task } from "../Task/task";

import { calculateCompletionProgress } from "../../helpers";

export const Accordion = ({ accordionTitle, content }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [taskGroupings, setTaskGroupings] = useState(content);

  return (
    <div className="container">
      <div className="header">
        <h1>{accordionTitle}</h1>
        <Progressbar
          className="progress-bar"
          progressValue={calculateCompletionProgress(taskGroupings)}
        />
      </div>
      <div className="task-wrapper">
        {taskGroupings.map((item, index) => {
          return (
            <AccordionGroup
              key={index}
              title={item.name}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
              items={item}
            >
              {item.tasks.map((task, index) => {
                return (
                  <Task
                    key={index}
                    task={task}
                    setTaskGroupings={setTaskGroupings}
                    taskGroupings={taskGroupings}
                  />
                );
              })}
            </AccordionGroup>
          );
        })}
      </div>
    </div>
  );
};
