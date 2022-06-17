import { useState, useEffect } from 'react';

const Speedometer = () => {
    // let speed = 20;

    const [speed, setSpeed] = useState(20);

    const [counter, setCounter] = useState(0)

    function handleClick() {
        // speed += 5;
        setSpeed(speed + 5);
        console.log(speed);
    }

    useEffect(() => {
        console.log('Counter state variable has been changed...');
    }, [counter])

    useEffect(() => {
        console.log('Speed has been changed to', speed);
        return (() => {
            console.log('Speed from return', speed);
        })
    }, [speed]);

    useEffect(() => {
        console.log('Speedometer Component is Mounted');
        return (() => {
            console.log('Speedometer Component is Un-mounted');
        })
    }, []);

    useEffect(() => {
        console.log('Speed or Counter Changed', speed, counter);
        return (() => {
            console.log('Old values of Spped and Counter', speed, counter);
        })
    }, [speed, counter]);

  return (
    <div>
        <h1>Speedometer</h1>
        <h2>Speed is: {speed}</h2>
        <button onClick={handleClick}>Increase Speed by 5</button>
        <hr/>
        <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
    </div>
  );
}

export default Speedometer