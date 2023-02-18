import classes from "./Switch.module.css";

const Switch = (props) => {
  return (
    <div className={classes.container}>
      <label className={classes.switch}>
        <input type="checkbox" id="checkbox" onClick={props.onClick} />
        <span className={`${classes.slider} ${classes.round}`}></span>
      </label>
      <label htmlFor="checkbox" className={classes.label}>
        12hr
      </label>
    </div>
  );
};

export default Switch;
