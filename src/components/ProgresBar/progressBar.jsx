import './styles.scss';

export const Progressbar = ({ progressValue }) => {
  return (
    <div className="animated-progress progress-bar">
      <span
        data-progress={progressValue}
        style={{ width: progressValue }}
      ></span>
    </div>
  );
};
