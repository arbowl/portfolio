import React, { Component } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import resume from './subcomponents/resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Resume</h2>
                <Document
                    file={resume}
                    onLoadError={console.error}
                    style={{ width: '50vw', height: 'auto' }}
                >
                    <Page pageIndex={0}/>
                </Document>
            </div>
        );
    }
}
