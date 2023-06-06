import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export const Redirect = () => {
    const navigate = useNavigate();
    const [time, setTime] = useState(3);
    const timeout = useRef(0);

    useEffect(() => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            setTime((t) => t - 1);
        }, 1000);

        if(time < 0) navigate('/', {
            state: `This is the state: ${Math.random()}`
        });
        
        return () => {
            clearTimeout(timeout.current);
        }
    })

    return(
        <div>
            <h1>Get out of here in: {(time == 0) ? 'Redirecting...' : time}</h1>
        </div>
    );
}