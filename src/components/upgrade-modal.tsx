"use client"

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger} from "@/components/ui/alert-dialog";
import {Button} from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

interface UpgardeModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};
export const UpgradeModal = ({open, onOpenChange}: UpgardeModalProps) => {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Upgrade Required</AlertDialogTitle>
                    <AlertDialogDescription>
                        To access this feature, please upgrade your account.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() =>authClient.checkout({slug: "pro"})}>
                        Upgrade Now
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
                        
}