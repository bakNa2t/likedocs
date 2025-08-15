import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { SiGoogledocs } from "react-icons/si";
import { Building2Icon, CircleUserIcon } from "lucide-react";

import { TableCell, TableRow } from "@/components/ui/table";
import { DocumentMenu } from "./document-menu";

import { Doc } from "../../../convex/_generated/dataModel";

interface DocumentRowProps {
  document: Doc<"documents">;
}

export const DocumentRow = ({ document }: DocumentRowProps) => {
  const router = useRouter();

  const onNewTabClick = (id: string) => {
    window.open(`/documents/${id}`, "_blink");
  };

  return (
    <TableRow
      onClick={() => router.push(`/documents/${document._id}`)}
      className="cursor-pointer hover:bg-blue-100/40 dark:hover:bg-neutral-50/40"
    >
      <TableCell className="w-[50px]">
        <SiGoogledocs className="size-6 fill-blue-400" />
      </TableCell>

      <TableCell className="font-medium md:w-[45%]">{document.title}</TableCell>

      <TableCell className="hidden md:flex items-center gap-2 text-muted-foreground">
        {document.organizationId ? (
          <Building2Icon className="size-4" />
        ) : (
          <CircleUserIcon className="size-4" />
        )}
        {document.organizationId ? "Organization" : "Personal"}
      </TableCell>

      <TableCell className="hidden md:table-cell text-muted-foreground">
        {format(new Date(document._creationTime), "MMM dd, yyyy")}
      </TableCell>

      <TableCell className="flex justify-end">
        <DocumentMenu
          documentId={document._id}
          title={document.title}
          onNewTab={onNewTabClick}
        />
      </TableCell>
    </TableRow>
  );
};
