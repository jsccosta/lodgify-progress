export function findNestedObj(entireObj, valToFind) {
  let foundObj;
  let parentNode;

  entireObj.forEach((obj) => {
    let tempParent = obj.name;

    obj.tasks.forEach((task) => {
      if (task.description === valToFind) {
        foundObj = task;
        parentNode = tempParent;
      }
    });
  });

  return {
    name: parentNode,
    task: foundObj,
  };
}

export const calculateCompletionProgress = (content) => {
  let grandTotal = 0;
  let completedTotal = 0;

  content.forEach((group) => {
    group.tasks.forEach((task) => {
      grandTotal += task.value;
      completedTotal += task.checked ? task.value : 0;
    });
  });

  return `${Math.floor((completedTotal / grandTotal) * 100)}%`;
};
