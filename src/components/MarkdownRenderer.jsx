import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ file }) => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        if (file) {

            fetch(file)
                .then((response) => response.text())
                .then((text) => {
                    const modifiedText = text.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, url) => {
                        const modifiedUrl = `./posts/${url}`;
                        return `![${alt}](${modifiedUrl})`;
                    });
                    setMarkdown(modifiedText);
                });
        }
    }, [file]);


    return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default MarkdownRenderer;