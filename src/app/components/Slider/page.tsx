'use client'
import React from 'react';

const ScrollingText = () => {
    const text = 'Lorem Ipsum ';
    const separator = '       '; 
    const repeatedText = Array.from({ length: 10 }).fill(text + separator).join('');

    return (
        <>
            <style jsx>{`
                @keyframes scrollLeft {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
            <div className="overflow-hidden relative w-full bg-white text-white border border-black p-4"
                 style={{ background: `linear-gradient(90deg, rgba(89,62,91,1) 9%, rgba(25,178,113,1) 62%)` }}>
                <pre style={{  animation: 'scrollLeft 10s linear infinite' }} className='uppercase'>
                    {repeatedText + repeatedText} 
                </pre>
            </div>
        </>
    );
};

export default ScrollingText;