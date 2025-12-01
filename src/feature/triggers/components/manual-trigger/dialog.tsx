"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Prpos {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export const ManualTriggerDialog = ({ open, onOpenChange }: Prpos) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Manual Trigger</DialogTitle>
          <DialogDescription>
            Configure settings for the Manual Trigger node.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {/* Add configuration options here */}
          <p className="text-sm text-muted-foreground">
            Used to manually trigger the workflow ,no configuration is needed.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
