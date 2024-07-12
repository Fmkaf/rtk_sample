import { useState } from 'react';
import { setName, removeName } from '../../utils/Store';
import { useDispatch } from 'react-redux';

export default function User() {
    const [userName, setUserName] = useState(' ');
    const dispatch = useDispatch();
    function onClickHandler() {
        dispatch(setName({ username: userName }));
    }
    return (
        <div className='Title'>
            <input className='Input-Box' onChange={(e) => setUserName(e.target.value)} />
            <button className='Button' id="Success" title="setName" onClick={onClickHandler}>SET</button>
            <button className='Button' id="Fail" title="removeName" onClick={() => { dispatch(removeName()) }}>UNSET</button>
        </div>
    )
}