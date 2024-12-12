import React, { useState } from "react";
import "./card.css";

function Expandable() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <h1>Featured</h1>
            <div className="card">
                {Array(4).fill().map((_, index) => (
                    <div className="" key={index}>

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtDK-1c7TAvllQLttg5zb6i3k3pfyDAypEw&s" alt=""></img>

                        <div>
                            <div>
                                <div className="shadow">
                                    <h2>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" > <path d="M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3z" /></svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" /></svg>

                                    </h2>

                                </div>
                                <h1>Business</h1>
                                <p>There is just enough space here for several lines of text.</p>
                                {isExpanded && (
                                    <div>
                                        <p>
                                            Here is some additional content that is shown when you click "more". You
                                            can add as much content as you like here!
                                        </p>
                                    </div>
                                )}
                                <button onClick={toggleExpand}>
                                    {isExpanded ? "Less" : "More"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Expandable;
