import { useState } from "react";

function App() {
    return (
        <div className="flex">
            <div className="w-16 navbar">
                <img src="logo.png" className="logo" alt="" />
                <div className="group top-group">
                    <div className="circular-btn">h</div>
                    <div className="circular-btn-active">f</div>
                    <div className="circular-btn">h</div>
                </div>
                <div className="group mid-group">
                    <div className="circular-btn">h</div>
                    <div className="circular-btn">h</div>
                    <div className="circular-btn">h</div>
                    <div className="circular-btn">h</div>
                    <div className="circular-btn">h</div>
                </div>
                <div className="group bottom-group">
                    <div className="circular-btn">h</div>
                    <div className="circular-btn">h</div>
                </div>
            </div>
            <div className="main w-full">main</div>
        </div>
    );
}

export default App;
