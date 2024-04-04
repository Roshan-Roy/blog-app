import * as React from 'react'

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
        <h3>
        <a href={`${process.env.NEXTAUTH_URL}/auth/verify-email?token=${emailVerificationToken}`}>
            Click here to verify your Email
        </a>
        </h3>
    </div>
);