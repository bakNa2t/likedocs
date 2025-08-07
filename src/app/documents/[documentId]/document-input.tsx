import { useRef, useState } from "react";
import { useMutation } from "convex/react";
import { useStatus } from "@liveblocks/react";
import { BsCloudCheck, BsCloudSlash } from "react-icons/bs";

import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { useDebounce } from "@/hooks/use-debounce";
import { toast } from "sonner";
import { LoaderIcon } from "lucide-react";

interface DocumentInputProps {
  title?: string;
  id?: Id<"documents">;
}

export const DocumentInput = ({ title, id }: DocumentInputProps) => {
  const [value, setValue] = useState(title);

  const status = useStatus();
  const [isPending, setIsPending] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const mutate = useMutation(api.documents.updateById);

  const debounceUpdate = useDebounce((newValue: string) => {
    if (newValue === title) return;

    if (!id) {
      throw new Error("No document id");
    }

    setIsPending(true);
    mutate({ id, title: newValue })
      .then(() => toast.success("Document updated"))
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setIsPending(false));
  });

  const showLoader = isPending || status === "connecting" || "reconnecting";
  const showError = status === "disconnected";

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debounceUpdate(newValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id || !value) {
      throw new Error("No document id");
    }

    setIsPending(true);
    mutate({ id, title: value })
      .then(() => {
        toast.success("Document updated");
        setIsEditing(false);
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setIsPending(false));
  };

  return (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="relative w-fit max-w-[50ch]">
          <span className="invisible whitespace-pre px-1.5 text-lg">
            {value || " "}
          </span>

          <input
            ref={inputRef}
            value={value}
            onChange={onChange}
            onBlur={() => setIsEditing(false)}
            className="absolute inset-0 px-1.5 text-lg text-black bg-transparent truncate"
          />
        </form>
      ) : (
        <span
          onClick={() => {
            setIsEditing(true);
            setTimeout(() => {
              inputRef.current?.focus();
            }, 0);
          }}
          className="text-lg px-1.5 cursor-pointer truncate"
        >
          {title}
        </span>
      )}
      {showError && <BsCloudSlash className="size-4" />}
      {!showLoader && !showError && <BsCloudCheck className="size-4" />}
      {showLoader && (
        <LoaderIcon className="size-4 animate-spin text-muted-foreground" />
      )}
    </div>
  );
};
