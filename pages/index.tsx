import Layout from "../layouts/layout";
import {useEffect, useState} from "react";

export default function Home() {
    const [message, setMessage] = useState('');
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        (
            async () => {
                try {
                   


                    setMessage(`Hi `);
                    setAuth(true);
                } catch (e) {
                    setMessage('You are not logged in');
                    setAuth(false);
                }
            }
        )();
    });

    return (
        <Layout auth={auth}>
            {message}
        </Layout>
    )
}