import * as React from 'react';

interface EmailTemplateProps {
    heading:String;
    text:String;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    heading,
    text
}) => (
    <div>
        <h1>{heading}</h1>
        <p>{text}</p>
    </div>
);