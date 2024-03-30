import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { authorsTableData } from "@/data";
import Profile from "./profile";
import PdfCompe from "./pdf-reader";
import Check from "./check";

export function UploadedFiles() {
  return (
    <>
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Check />
      </div>
    </>
  );
}

export default UploadedFiles;
