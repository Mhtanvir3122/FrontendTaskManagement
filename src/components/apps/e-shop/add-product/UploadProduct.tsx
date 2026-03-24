import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';

import { renderToStaticMarkup } from 'react-dom/server';
import { IconCloudUpload } from '@tabler/icons-react';

registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode,
  FilePondPluginFileValidateSize,
  FilePondPluginImageExifOrientation
);

const UploadProduct: React.FC = () => {
  return (

      <FilePond
        allowMultiple={true}
        allowReorder={true}
        name="addProduct"
        className="app-file-upload addproduct cursor-pointer"
        labelIdle={`
          <span>
            ${renderToStaticMarkup(<IconCloudUpload size={28} stroke={1.5} />)}
            <div class="filepond--label-action text-decoration-none">
              Upload Your Product Images
            </div>
          </span>
        `}
      />
  );
};

export default UploadProduct;
