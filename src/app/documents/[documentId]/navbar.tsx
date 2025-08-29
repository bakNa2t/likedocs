"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { BsFilePdf } from "react-icons/bs";
import { useTranslations } from "next-intl";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import {
  BoldIcon,
  FileIcon,
  FileJsonIcon,
  FilePenIcon,
  FilePlusIcon,
  FileTextIcon,
  GlobeIcon,
  ItalicIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  TextIcon,
  TrashIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { RemoveDialog } from "@/components/remove-dialog";
import { DocumentInput } from "./document-input";
import { Avatars } from "./avatars";
import { Inbox } from "./inbox";

import { api } from "../../../../convex/_generated/api";
import { Doc } from "../../../../convex/_generated/dataModel";
import { useEditorStore } from "@/store/use-editor-store";
import { RenameDialog } from "@/components/rename-dialog";
import { AdvancedMenu } from "@/components/advanced-menu";

interface NavbarProps {
  data: Doc<"documents"> | null;
}

export const Navbar = ({ data }: NavbarProps) => {
  const router = useRouter();
  const t = useTranslations("Navbar");
  const toastT = useTranslations("Toast");
  const { editor } = useEditorStore();

  const mutate = useMutation(api.documents.create);

  const onAddNewDocument = () => {
    mutate({
      title: t("title"),
      initialContent: "",
    })
      .catch(() => toast.error(toastT("somethingWentWrong")))
      .then((id) => {
        toast.success(toastT("documentCreated"));
        router.push(`/documents/${id}`);
      });
  };

  const insertTable = ({ rows, cols }: { rows: number; cols: number }) => {
    editor
      ?.chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow: false })
      .run();
  };

  const onDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
  };

  const onSaveJSON = () => {
    if (!editor) return;

    const content = editor.getJSON();
    const blob = new Blob([JSON.stringify(content)], {
      type: "application/json",
    });

    onDownload(blob, `${data?.title}.json`);
  };

  const onSaveHTML = () => {
    if (!editor) return;

    const content = editor.getHTML();
    const blob = new Blob([content], {
      type: "text/html",
    });

    onDownload(blob, `${data?.title}.html`);
  };

  const onSaveText = () => {
    if (!editor) return;

    const content = editor.getText();
    const blob = new Blob([content], {
      type: "text/plain",
    });

    onDownload(blob, `${data?.title}.txt`);
  };
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={36} height={36} />
        </Link>

        <div className="flex flex-col">
          <DocumentInput title={data?.title} id={data?._id} />

          <div className="flex flex-col">
            <Menubar className="h-auto p-0 border-none shadow-none bg-transparent">
              {/* File menu */}
              <MenubarMenu>
                <MenubarTrigger className="h-auto text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted">
                  {t("file")}
                </MenubarTrigger>
                <MenubarContent className="print:hidden">
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <FileIcon className="size-4 mr-2" />
                      {t("fileSave")}
                    </MenubarSubTrigger>

                    <MenubarSubContent>
                      <MenubarItem onClick={onSaveJSON}>
                        <FileJsonIcon className="size-4 mr-2" />
                        JSON
                      </MenubarItem>
                      <MenubarItem onClick={onSaveHTML}>
                        <GlobeIcon className="size-4 mr-2" />
                        HTML
                      </MenubarItem>
                      <MenubarItem onClick={() => window.print()}>
                        <BsFilePdf className="size-4 mr-2" />
                        PDF
                      </MenubarItem>
                      <MenubarItem onClick={onSaveText}>
                        <FileTextIcon className="size-4 mr-2" />
                        Text
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>

                  <MenubarItem>
                    <FilePlusIcon
                      onClick={onAddNewDocument}
                      className="size-4 mr-2"
                    />
                    {t("fileNewDocument")}
                  </MenubarItem>

                  <MenubarSeparator />

                  {data?._id && (
                    <RenameDialog
                      documentId={data?._id}
                      initialTitle={data.title}
                    >
                      <MenubarItem
                        onClick={(e) => e.stopPropagation()}
                        onSelect={(e) => e.preventDefault()}
                      >
                        <FilePenIcon className="size-4 mr-2" />
                        {t("fileRename")}
                      </MenubarItem>
                    </RenameDialog>
                  )}

                  {data?._id && (
                    <RemoveDialog documentId={data?._id}>
                      <MenubarItem
                        onClick={(e) => e.stopPropagation()}
                        onSelect={(e) => e.preventDefault()}
                      >
                        <TrashIcon className="size-4 mr-2" />
                        {t("fileRemove")}
                      </MenubarItem>
                    </RemoveDialog>
                  )}

                  <MenubarSeparator />

                  <MenubarItem onClick={() => window.print()}>
                    <PrinterIcon className="size-4 mr-2" />
                    {t("filePrint")} <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              {/* Edit menu */}
              <MenubarMenu>
                <MenubarTrigger className="h-auto text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted">
                  {t("edit")}
                </MenubarTrigger>

                <MenubarContent>
                  <MenubarItem
                    onClick={() => editor?.chain().focus().undo().run()}
                  >
                    <Undo2Icon className="size-4 mr-2" />
                    {t("editUndo")} <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>

                  <MenubarItem
                    onClick={() => editor?.chain().focus().redo().run()}
                  >
                    <Redo2Icon className="size-4 mr-2" />
                    {t("editRedo")} <MenubarShortcut>⌘Y</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              {/* Insert menu */}
              <MenubarMenu>
                <MenubarTrigger className="h-auto text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted">
                  {t("insert")}
                </MenubarTrigger>

                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>{t("insertTable")}</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem
                        onClick={() => insertTable({ rows: 1, cols: 1 })}
                      >
                        1 x 1
                      </MenubarItem>
                      <MenubarItem
                        onClick={() => insertTable({ rows: 2, cols: 2 })}
                      >
                        2 x 2
                      </MenubarItem>
                      <MenubarItem
                        onClick={() => insertTable({ rows: 3, cols: 3 })}
                      >
                        3 x 3
                      </MenubarItem>
                      <MenubarItem
                        onClick={() => insertTable({ rows: 4, cols: 4 })}
                      >
                        4 x 4
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>

              {/* Format menu */}
              <MenubarMenu>
                <MenubarTrigger className="h-auto text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted">
                  {t("format")}
                </MenubarTrigger>

                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <TextIcon className="size-4 mr-2" />
                      {t("formatText")}
                    </MenubarSubTrigger>

                    <MenubarSubContent>
                      <MenubarItem
                        onClick={() =>
                          editor?.chain().focus().toggleBold().run()
                        }
                      >
                        <BoldIcon className="size-4 mr-2" />
                        {t("formatTextBold")}{" "}
                        <MenubarShortcut>⌘B</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem
                        onClick={() =>
                          editor?.chain().focus().toggleItalic().run()
                        }
                      >
                        <ItalicIcon className="size-4 mr-2" />
                        {t("formatTextItalic")}{" "}
                        <MenubarShortcut>⌘I</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem
                        onClick={() =>
                          editor?.chain().focus().toggleUnderline().run()
                        }
                      >
                        <UnderlineIcon className="size-4 mr-2" />
                        {t("formatTextUnderline")}{" "}
                        <MenubarShortcut>⌘U</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem
                        onClick={() =>
                          editor?.chain().focus().toggleStrike().run()
                        }
                      >
                        <StrikethroughIcon className="size-4 mr-2" />
                        {t("formatTextStrikethrough")}&nbsp;{" "}
                        <MenubarShortcut>⌘S</MenubarShortcut>
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>

                  <MenubarItem
                    onClick={() =>
                      editor?.chain().focus().unsetAllMarks().run()
                    }
                  >
                    <RemoveFormattingIcon className="size-4 mr-2" />
                    {t("formatRemoveFormatting")}
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 pl-6">
        <Avatars />
        <Inbox />

        <OrganizationSwitcher
          afterCreateOrganizationUrl="/"
          afterLeaveOrganizationUrl="/"
          afterSelectOrganizationUrl="/"
          afterSelectPersonalUrl="/"
          appearance={{
            elements: {
              organizationSwitcherTrigger:
                "p-2 dark:text-white dark:bg-neutral-600/60 dark:hover:bg-neutral-100/40",
            },
          }}
        />
        <UserButton />

        <AdvancedMenu />
      </div>
    </nav>
  );
};
