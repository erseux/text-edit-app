import AppShell from "../components/AppShell"
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (user) {
        return (
            <>
                <div className="mt-10 font-normal text-xl px-2">
                    Welcome, <i>{user.email}</i>
                </div>
                <div className="mt-10 px-4">
                    Choose a document to edit
                </div>
            </>
        )
    }
    return <a href="/api/auth/login">Login</a>;
}