import { useState } from 'react';

export function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <p>
            {isLoggedIn ? (
                <Counter text="Welcome!" key="logged_in" />
            ) : (
                <Counter text="Log in" key="not_logged_in" />
            )}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Log out" : "Submit"}
            </button>
        </p>
    );
}

function Counter({ text, key }) {
    return (
        <>
            {text}  {key}
        </>
    );
}