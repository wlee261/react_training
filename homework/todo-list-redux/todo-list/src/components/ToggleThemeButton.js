import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { light, dark } from '../store/slices/themeSlice';

const ToggleThemeButton = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const handleToggleThemeClick = () => {
        if(theme==="light")
            dispatch(dark());
        else if(theme==="dark")
            dispatch(light())
    }

    return(
        <button onClick={handleToggleThemeClick}>
            Toggle Theme
        </button>
    )
}

export default ToggleThemeButton;