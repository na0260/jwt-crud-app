"use client";
import React, {useState} from 'react';
import userLogin from "@/app/utils/userLogin";
import {NextResponse} from "next/server";

const LoginCard = () => {
    const [credentials, setCredentials] = useState({ email: 'test@mail.com', password: '123456' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        userLogin(credentials.email, credentials.password)
            .then(data => {
                const token = data.access_token;
                const maxAge = data.expires_in;
                if (data.token) {
                    NextResponse.json({
                        status: 200,
                        body: {
                            message: 'Login successful'
                        },
                        headers: {
                            'Set-Cookie': `token=${token}; HttpOnly; Max-Age=${maxAge}; path=/; SameSite=Strict; Secure`
                        }
                    })
                }
            }).catch(err => {
                console.error(err);
            });
    }
    return (
        <>
            <div className="container mx-auto lg:px-36">
                <h1 className="text-4xl font-bold text-center my-4">Login</h1>
                <form onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             className="w-4 h-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
                        </svg>
                        <input type="text" className="grow" placeholder="Email" value={credentials.email}
                               onChange={(e) => setCredentials({...credentials, email: e.target.value})}/>
                    </label>
                    <br/>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             className="w-4 h-4 opacity-70">
                            <path fillRule="evenodd"
                                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                  clipRule="evenodd"/>
                        </svg>
                        <input type="password" className="grow" placeholder="Password" value={credentials.password}
                               onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
                    </label>
                    <br/>
                    <div className="form-control float-end">
                        <button type="submit" className="btn btn-accent">Login</button>
                    </div>
                </form>
            </div>

        </>
    );
};

export default LoginCard;
