import { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";

import { FilePondFile } from "filepond";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";

// Register FilePond plugins
registerPlugin(
  FilePondPluginFileEncode,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview
);

const FileUploader = () => {
  const [files, setFiles] = useState<FilePondFile[]>([]);

  return (
    <FilePond
      files={files.map((file) => file.file)}
      onupdatefiles={setFiles}
      allowMultiple={true}
      maxFiles={5}
      name="files"
      className="filelight file-light-secondary post-upload"
      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      acceptedFileTypes={["image/*", "application/pdf"]}
      maxFileSize="5MB"
    />
  );
};

export default FileUploader;
