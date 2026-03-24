import { IMeta } from "@/components/myComponent/interface/common.interface";
import { IObject, isObjectNull } from "../input/checkValidation";
interface IRequestPayload {
    meta: IMeta;
    body?: IObject;
}
export const searchParamsToObject = (searchParams :any) => {
	let params:any = {};
	searchParams.forEach(
		(item: string, key: string) =>
			item !== '' && item !== 'null' && item !== 'undefined' && (params[key]  = item)
	);
	return params;
};

type ISearchParamsToRequestBodyOptions = {
	multiFields?: Array<string>;
};

export const searchParamsToRequestBody = (
	searchObj: any,
	currentBody?: IObject,
	options?: ISearchParamsToRequestBodyOptions
): IRequestPayload => {
	searchObj = searchParamsToObject(searchObj);
	const bodyIgnore = ['page', 'limit'];
	const body: IObject = {};
	Object.keys(searchObj)?.forEach((obj) => {
		if (!bodyIgnore.includes(obj)) {
			body[obj] =
				searchObj[obj].toLowerCase() === 'true'
					? true
					: searchObj[obj].toLowerCase() === 'false'
					? false
					: options?.multiFields?.includes(obj)
					? searchObj[obj]?.split(',')
					: searchObj[obj];
		}
	});
	const reqBody: IRequestPayload = {
		meta: {
			page: +searchObj?.page || 0,
			limit: +searchObj?.limit || currentBody?.meta?.limit || 10,
			sort: currentBody?.meta?.sort || [],
		},
		body,
	};
	return reqBody;
};

export const makeBoolean = (cData:any) => {
	let data = { ...cData };
	Object.keys(data).forEach(
		(d) => (data[d] = data[d] === 'true' ? true : data[d] === 'false' ? false : data[d])
	);
	return data;
};

export const removeObjectEmptyProperty = (obj: IObject, removeEmptyObj: boolean = false) => {
	let params: IObject = {};
	const removable = ['', 'null', 'undefined', null, undefined];
	Object.keys(obj).forEach((key: string) => {
		if (removeEmptyObj && obj[key] instanceof Object) {
			if (!isObjectNull(obj[key])) params[key] = obj[key];
			else return;
		}
		if (!removable.includes(obj[key])) params[key] = obj[key];
	});
	return params;
};

export const makeFormData = (reqData: IObject) => {
  const data = { ...reqData };
  const fd = new FormData();

  Object.keys(data).forEach((key) => {
    const value = data[key];

    // Single File
    if (value instanceof File) {
      fd.append(key, value);
      delete data[key];
    }

    // Multiple Files
    else if (value instanceof FileList) {
      Array.from(value).forEach((file) => {
        fd.append(key, file);
      });
      delete data[key];
    }
  });

  fd.append("body", JSON.stringify(data));
  return fd;
};

