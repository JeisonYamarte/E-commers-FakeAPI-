import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingContext } from "../../../Context";
import { logInAccount } from "../../../api/accounts";
import { setAuthToken } from "../../../api/axiosConfig";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function LogIn ({setRender}){
    const {
        saveSignOut,
        saveAccount,
        setEmail,
    } = React.useContext(ShoppingContext)

    const form = React.useRef(null)
    const navigate = useNavigate();
    const [showInvalidCredentials, setShowInvalidCredentials] = React.useState(false);

    const handleSignIn = async ()=>{
        saveSignOut(false);
        const formData = new FormData(form.current);
        const data = {
            email: formData.get('email').trim(),
            password: formData.get('password') 
        }

        const response = await logInAccount(data);

        if(!response){
            setShowInvalidCredentials(true);
        } else {
            saveAccount(response);
            setAuthToken(response.replace(/"/g, ''));
            setEmail(data.email);
            navigate('/');
        }
    }

    return(
        <Card className="bg-menta w-full max-w-sm text-hueso text-base">
            <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form id='logInForm' ref={form} onSubmit={(e)=>{
                    e.preventDefault();
                    handleSignIn();
                }}>
                <div className="flex flex-col gap-6 ">
                    <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        className="focus:bg-salvia"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="m@example.com"
                        required
                    />
                    </div>
                    <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a
                        href="/recovery"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline "
                        >
                        Forgot your password?
                        </a>
                    </div>
                    <Input 
                        className="focus:bg-salvia" 
                        id="password" 
                        type="password" 
                        name="password" 
                        required />
                    </div>
                </div>
                {showInvalidCredentials && <p className="text-sm text-end text-red-600">Email or password is incorrect</p>}
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" form='logInForm' className="w-full hover:bg-salvia">
                Login
                </Button>
                <Button variant="outline" className="w-full hover:bg-salvia" onClick={()=> setRender('user-create')}>
                    Sign Up
                </Button>
            </CardFooter>
        </Card>
    )
}

export {LogIn}
