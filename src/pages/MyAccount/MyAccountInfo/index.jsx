import React from 'react'
import { ShoppingContext } from '../../../Context'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { updateAccountData } from '../../../api/accounts';
import { getAccountData } from '../../../api/accounts';



function MyAccountInfo (){
    const {
        accountData,
        setAccountData
    } = React.useContext(ShoppingContext)

    const form = React.useRef(null)

    const saveNewAccount = async ()=>{
            const formData = new FormData(form.current);
            const data = {
                name: formData.get('name'),
                lastName: formData.get('lastName'),
                phone: formData.get('phone'),
                address: formData.get('address')
            }

            console.log(data)
    
            await updateAccountData(data, accountData?.customer?.id);
    
            const newUserInfo = await getAccountData();
    
            setAccountData(newUserInfo)
        }

    return(
        <Card className='flex flex-col w-80 h-100 bg-menta p-2'>
            <CardContent className="grid p-1">
                <span className='font-light text-sm '>Name: </span> 
                <span className='w-full bg-white/60 p-1 rounded-md '>{accountData?.customer?.name}</span>
            </CardContent>
            <CardContent className="grid p-1">
                <span className='font-light text-sm '>Last Name: </span> 
                <span className='w-full bg-white/60 p-1 rounded-md '>{accountData?.customer?.lastName}</span>
            </CardContent>
            <CardContent className="grid p-1">
                <span className='font-light text-sm '>Phone: </span> 
                <span className='w-full bg-white/60 p-1 rounded-md '>{accountData?.customer?.phone}</span>
            </CardContent>
            <CardContent className="grid p-1">
                <span className='font-light text-sm '>Address: </span> 
                <span className='w-full bg-white/60 p-1 rounded-md '>{accountData?.customer?.address}</span>
            </CardContent>
            <CardContent className="grid p-1">
                <span className='font-light text-sm'>Email: </span>
                <span className='w-full bg-white/60 p-1 rounded-md '>{accountData?.email}</span>
            </CardContent>
            <Dialog >
                <DialogTrigger asChild>
                    <Button className='border  rounded-lg mt-6 py-3 hover:bg-salvia'>
                        Edit 
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-menta text-hueso">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <form id="editAccount" ref={form} onSubmit={(e)=>{
                    e.preventDefault();
                    saveNewAccount()
                    }}>
                        <div className='grid gap-4 m-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-light text-sm' htmlFor="name">name:</Label>
                                <Input  
                                className='border  rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:bg-salvia py-2 px-4'
                                type="text" 
                                name="name" 
                                id='name'
                                defaultValue={accountData?.customer?.name || ''} 
                                placeholder={accountData?.customer?.name || ''} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-light text-sm' htmlFor="LastName">Last Name</Label>
                                <Input 
                                className='border  rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:bg-salvia py-2 px-4'
                                type="text" 
                                name="lastName" 
                                id='lastName' 
                                defaultValue={accountData?.customer?.lastName || ''}
                                placeholder={accountData?.customer?.lastName || ''} />
                                </div>
                                <div className='flex flex-col gap-1'>
                                <Label className='font-light text-sm' htmlFor="phone">Phone</Label>
                                <Input 
                                className='border  rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:bg-salvia py-2 px-4'
                                type="text" 
                                name="phone" 
                                id='phone' 
                                defaultValue={accountData?.customer?.phone || ''}
                                placeholder={accountData?.customer?.phone || ''} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-light text-sm' htmlFor="address">Address</Label>
                                <Input 
                                className='border  rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:bg-salvia py-2 px-4'
                                type="text" 
                                name="address" 
                                id='address' 
                                defaultValue={accountData?.customer?.address || ''}
                                placeholder={accountData?.customer?.address || ''} />
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <DialogClose asChild>
                                <Button form="editAccount" type="submit" className="hover:bg-salvia">Save changes</Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>   
        </Card>
    )
}

export {MyAccountInfo}