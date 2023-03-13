import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './Loading.css';

function Loading () {
    const { loading } = useContext(AppContext);

    return (
        <>{
            loading ? 
                <div className="Loading">
                    Loading...
                </div>
            : null
        }</>
    );
}
 export default Loading;
