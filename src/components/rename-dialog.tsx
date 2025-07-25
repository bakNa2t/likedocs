"use client";

import { useState } from "react";
import { useMutation } from "convex/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";
import { Button } from "./ui/button";

interface RenameDialogProps {
  documentId: Id<"documents">;
  initialTitle: string;
  children: React.ReactNode;
}

export const RenameDialog = ({
  documentId,
  children,
  initialTitle,
}: RenameDialogProps) => {
  const update = useMutation(api.documents.updateById);
  const [isUpdating, setIsUpdating] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [open, setOpen] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUpdating(true);

    update({ id: documentId, title: title.trim() || "Untitled" })
      .then(() => setOpen(false))
      .finally(() => {
        setIsUpdating(false);
      });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent onClick={(e) => e.stopPropagation()}>
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Rename</DialogTitle>
            <DialogDescription>
              Enter a new name for this document
            </DialogDescription>
          </DialogHeader>

          <div className="my-4">
            <Input
              value={title}
              placeholder="Document name"
              onChange={(e) => setTitle(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="ghost"
              disabled={isUpdating}
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isUpdating}
              onClick={(e) => e.stopPropagation()}
            >
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
