import { useEffect, useState } from "react";
import classes from "./Timer.module.css";
import Switch from "./UI/Switch";
import Card from "./UI/Card";

const Timer = (props) => {
  const initialDate = new Date();

  const [isformatPM, setIsFormatPm] = useState(false);

  const changeFormat = () => {  
    setIsFormatPm(!isformatPM);
  };

  const [time, setTime] = useState(
    initialDate.toLocaleTimeString("en-US", { hour12: isformatPM })
  );
  useEffect(() => {
    const initialDate = new Date();
    setTime(initialDate.toLocaleTimeString("en-US", {hour12: isformatPM}));
    const intervalId = setTimeout(() => {
      const newDate = new Date();
      setTime(newDate.toLocaleTimeString("en-US", { hour12: isformatPM }));
    }, 1000);
    return () => {
      clearTimeout(intervalId);
    };
  }, [time, isformatPM]);

  return (
    <Card>
      <h1 className={classes.timer}>{time}</h1>
      <Switch onClick={changeFormat}></Switch>
    </Card>
  );
};

export default Timer;
