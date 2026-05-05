import React, { useState, useEffect, useContext, useRef } from 'react';

export default function CheckDemage() {
    const [inputs,setInputs] = useState({szumi:false, stukot: false})
    const [view,setView] = useState("none")

    const handleChange = (e) => {
        const { name, checked } = e.target;
        setInputs(v => ({ ...v, [name]: checked }));
    };

    const handleCheck = (e) => {
        e.preventDefault();
        if (inputs.szumi && inputs.stukot) setView('oba');
        else if (inputs.szumi) setView('szum');
        else if (inputs.stukot) setView('stukot');
        else setView('none');
    }

    return (
        <div className="grzejnik ">
            <h4>GRZEJNIK</h4>
            <link rel="Forum" href="link do forum" />
            <h4>Jak sprawdzić?</h4>
            <div className="video">
                <video width="640" height="360" controls poster="miniatura.jpg">
                    <source src="twoj-film.mp4" type="video/mp4"/>
                    <source src="twoj-film.webm" type="video/webm"/>
                </video>
            </div>
            <div className="checkbox">
                <label>Szumi:
                    <input
                        type="checkbox"
                        name="szumi"
                        checked={inputs.szumi}
                        onChange={handleChange}
                    />
                </label>
                <label>Stukot:
                    <input
                        type="checkbox"
                        name="stukot"
                        checked={inputs.stukot}
                        onChange={handleChange}
                        onClick={handleChange}
                    />
                </label>
                <button onClick={handleCheck}>send</button>

                <div className="wynik">
                    {view === 'szum' && <ProblemSzum />}
                    {view === 'stukot' && <ProblemStukot />}
                    {view === 'oba' && <ProblemOba />}
                    {view === 'none' && <p>Wybierz opcje i kliknij przycisk</p>}
                </div>
            </div>
        </div>
    );
}