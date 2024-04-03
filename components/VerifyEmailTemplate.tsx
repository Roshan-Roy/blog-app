import * as React from 'react';

interface VerifyEmailTemplateProps {
    email: string;
    emailVerificationToken: string;
}

export const VerifyEmailTemplate: React.FC<Readonly<VerifyEmailTemplateProps>> = ({
    email,
    emailVerificationToken
}) => (
    <div>
        <h1>Verify Email for {email}</h1>
        <p>To verify email click on this link :</p>
        <a href={`http://localhost:3000/auth/verify-email?token=${emailVerificationToken}`}>
            Click here to verify your Email
        </a>
    </div>
);