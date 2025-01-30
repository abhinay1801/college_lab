import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const TestPDF = () => {
    const pdfRef = useRef(null);

    const generatePDF = () => {
        const element = pdfRef.current;
        if (element) {
            html2pdf().from(element).save(); // Simplest possible call
        }
    };

    return (
        <div>
            <div ref={pdfRef}>
                <h1>Hello, PDF!</h1>
                <p>This is a test.</p>
            </div>
            <button onClick={generatePDF}>Download Test PDF</button>
        </div>
    );
};

export default TestPDF;