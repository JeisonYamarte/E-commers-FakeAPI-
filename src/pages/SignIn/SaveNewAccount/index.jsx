import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingContext } from "../../../Context";
import { setAuthToken } from "../../../api/axiosConfig";
import { createAccount } from "../../../api/accounts";
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


function SaveNewAccount ({setRender}){
    const {
        saveAccount,
        saveSignOut,
        setEmail
    } = React.useContext(ShoppingContext)

    const form = React.useRef(null); 
    const navigate = useNavigate();

    const saveNewAccount = async ()=>{
    
        const formData = new FormData(form.current);
        const data = {
            name: formData.get('name').trim(),
            lastName: formData.get('lastName').trim(),
            address: formData.get('address').trim(),
            phone: formData.get('phone').trim(),
            user: {
                email: formData.get('email').trim(),
                password: formData.get('password') 
            }
        }
        
        const response = await createAccount(data)
        
        
        saveAccount(response);
        saveSignOut(false);
        setAuthToken(response);
        setEmail(data.user.email);
        navigate('/');
    }

    return (
        <Card className="bg-menta w-full max-w-sm text-hueso text-base">
            <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>Please enter your details</CardDescription>
            </CardHeader>
            <CardContent>
                <form id="createAccountForm" ref={form} onSubmit={(e)=>{
                    e.preventDefault(),
                    saveNewAccount()
                }}>
                    <div className="flex flex-col gap-6 ">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name:</Label>
                            <Input
                                className="focus:bg-salvia"
                                id="name"
                                type="text"
                                name="name"
                                placeholder="My name"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="lastName">Last Name:</Label>
                            <Input 
                                id="lastName" 
                                type="text" 
                                name="lastName"
                                className="focus:bg-salvia"
                                placeholder="My last name" 
                                required 
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="Phone">Phone:</Label>
                            <Input 
                                id="phone" 
                                type="text" 
                                name="phone"
                                className="focus:bg-salvia"
                                placeholder="My Phone" 
                                required 
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="address">Address:</Label>
                            <Input 
                                id="address" 
                                type="text" 
                                name="address"
                                className="focus:bg-salvia"
                                placeholder="My Address" 
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email:</Label>
                            <Input 
                                id="email" 
                                type="email" 
                                name="email"
                                className="focus:bg-salvia"
                                placeholder="m@example.com" 
                                required 
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="lastName">Password:</Label>
                            <Input 
                                id="password" 
                                type="password" 
                                name="password"
                                className="focus:bg-salvia" 
                                required 
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button 
                    type='submit'
                    form='createAccountForm'
                    className="w-full hover:bg-salvia"
                >Create</Button>
                <Button 
                    vartiant="ghost"
                    className="w-full bg-griscalido"
                    onClick={()=> setRender('user-info')}
                > Cancel </Button>
            </CardFooter>
        </Card>
    )
}

export {SaveNewAccount}