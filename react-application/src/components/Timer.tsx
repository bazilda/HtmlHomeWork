
import React from "react"
import { setInterval } from "timers/promises";
export const Timer: React.FC = () => {
    const styles: React.CSSProperties = { backgroundColor: "lightblue", fontSize: "2em" }
    let col1 = "red";
    let col2 = "blue";
    setTimeout(tic, 1000);
    setTimeout(repaint, 10000);
    const [time, setTime] = React.useState(new Date());
    const [col, newCol] = React.useState(col1);
    function tic() {
        setTime(new Date());
    }
    function switchColor() {
        if (col == col1) {
            col1 = col2;
        }
        return col1;
    }
    function repaint() {
        newCol(switchColor());
    }
    return <div>
        <h2 style={{ color: col }}>Current Time</h2>
        <p style={styles}>{time.toLocaleTimeString()}</p>
    </div>
}
