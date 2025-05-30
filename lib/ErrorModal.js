"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FiAlertTriangle } from "react-icons/fi";

export default function ErrorModal({ message }) {
  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600">
            <FiAlertTriangle className="h-5 w-5" />
            Something went wrong
          </DialogTitle>
        </DialogHeader>

        <div className="text-sm text-gray-600 mt-2">{message}</div>

        <DialogFooter className="mt-4">
          <Button onClick={() => window.location.reload()}>Reload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
