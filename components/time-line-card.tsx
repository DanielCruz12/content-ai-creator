import { FC, useState } from "react";
import moment from "moment";
import { Button } from "./ui/button";
import { Share2Icon, SymbolIcon, TrashIcon } from "@radix-ui/react-icons";
import { TimeLineCardProps } from "@/src/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const TimeLineCard: FC<TimeLineCardProps> = ({
  date,
  category,
  title,
  shareForm,
  deleteForm,
  slug,
  status,
  id,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [action, setAction] = useState<"share" | "delete" | null>("share");

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const confirmAction = () => {
    if (action === "share") {
      shareForm(id, status);
    } else if (action === "delete") {
      deleteForm(id);
    }
    setOpen(false);
    setOpenDelete(false);
    setAction(null);
  };

  return (
    <ol className="relative border-s py-4 border-gray-200 dark:border-gray-700">
      <li className="ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-2 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"></span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          {title}
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
            {category}
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {moment(date).fromNow()}
        </time>
        <p className="pb-2">{slug}</p>
        <div className="text-xs py-5 italic font-normal dark:text-gray-300 border rounded-lg cursor-pointer">
          <div className="px-3">
            {isExpanded ? description : `${description.slice(0, 470)}...`}
            <button
              onClick={toggleExpansion}
              className="dark:text-gray-200 hover:underline dark:hover:text-gray-100 dark:hover:text-bold px-1"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
        <div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant={status ? "outline" : "default"}
                onClick={() => {
                  setAction("share");
                  setOpen(true);
                }}
                className="inline-flex my-3 items-center px-4 py-2 text-sm font-medium rounded-lg"
              >
                {status ? <SymbolIcon /> : <Share2Icon />}
                <p className="px-2">{status ? "Unshare" : "Shares"}</p>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {`Are you sure you want to ${status ? "unshare" : "share"} this
                  form?`}
                </DialogTitle>
                <DialogDescription>
                  {!status
                    ? "This will make your form visible to everyone in the community."
                    : "Only you will be able to see this result."}
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button variant="default" onClick={confirmAction}>
                  Confirm
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={openDelete} onOpenChange={setOpenDelete}>
            <DialogTrigger asChild>
              <Button
                variant={"outline"}
                onClick={() => {
                  setAction("delete");
                  setOpenDelete(true);
                }}
                className="text-red-700 mx-3 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                <TrashIcon />
                <p className="px-2">{"Delete"}</p>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Are you sure you want to delete this form?
                </DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your form.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setOpenDelete(false)}>
                  Cancel
                </Button>
                <Button variant="default" onClick={confirmAction}>
                  Confirm
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </li>
    </ol>
  );
};

export default TimeLineCard;
