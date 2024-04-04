import * as React from 'react';

interface changePasswordProps {
    email: string;
    changePasswordToken: string;
}

export const ChangePasswordTemplate: React.FC<Readonly<changePasswordProps>> = ({
    email,
    changePasswordToken
}) => (
    <div>
        <h1>Change Password for {email}</h1>
        <p>To change your password click on this link :</p>
        <h2>{process.env.NEXTAUTH_URL}</h2>
        <a href={`${process.env.NEXTAUTH_URL}/auth/forgot-password?token=${changePasswordToken}`}>
            Click here to change your password
        </a>
    </div>
);