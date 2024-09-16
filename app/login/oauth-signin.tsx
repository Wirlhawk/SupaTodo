"use client"
import { Button } from "@/components/ui/button"
import { Provider } from "@supabase/supabase-js"
import { GithubIcon } from "lucide-react"
import { oAuthSignIn } from "./action"

type OAuthProvider = {
    name: Provider,
    displayName: string,
    icon? : JSX.Element
}

export function OAuthButtons() {
    const oAuthProvider: OAuthProvider[] = [
        {
            name: "github",
            displayName: "GitHub",
            icon: <GithubIcon className="size-5" />,
        },
        {
            name: "google",
            displayName: "Google",
            icon: <GithubIcon className="size-5" />,
        },
    ];

    return (
        <>
            {oAuthProvider.map((provider) => (
                <Button
                    className="w-full flex items-center justify-center gap-2" 
                    variant="outline"
                    onClick={async () => {
                        await oAuthSignIn(provider.name )
                    }}
                >
                    {provider.icon}
                    Login with {provider.displayName}
                </Button>
            ))}
        </>
    )
}