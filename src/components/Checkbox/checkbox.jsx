import './styles.scss';

export const Checkbox = ({ isChecked, onChangeHandler, id }) => {
  return (
    <input
      type="checkbox"
      id={id}
      name="myCheckbox"
      checked={isChecked}
      onChange={() => {onChangeHandler(!isChecked);}}
    />
  );
};
