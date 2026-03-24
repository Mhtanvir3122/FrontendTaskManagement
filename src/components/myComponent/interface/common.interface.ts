import { FC, useEffect, useState } from 'react';

export type IColors =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'warning'
	| 'info'
	| 'dark'
	| 'light'
	| 'link';
	
export type IColorsLight =
	| 'light-primary'
	| 'light-secondary'
	| 'light-success'
	| 'light-danger'
	| 'light-warning'
	| 'light-info'
	| 'light-dark'
	| 'light-light'
	| 'light-link';

export type ISizes = 'lg' | 'md' | 'sm';

export interface IObject {
	[key: string]: string | number | boolean | any;
}

export interface IMetaSort {
	field?: string;
	order?: 'asc' | 'desc';
}

export interface IMeta {
	page?: number;
	prevOffset?: number;
	nextOffset?: number;
	limit?: number;
	totalRecords?: number;
	resultCount?: number;
	totalPageCount?: number;
	sort?: Array<IMetaSort>;
}

export interface IAppRoutes {
	link: string;
	element?: FC;
	params?: IObject;
	childrens?: IAppRoutes[];
	redirect?: string;
	routeKey?: string;
	isPrivate?: boolean;
}

export interface ISiteMap {
	id: string;
	createdBy: string;
	isDeleted: boolean;
	nameEn: string;
	nameBn: string;
	routeKey: string;
}

export interface IFile {
	bucketName?: string;
	filePath?: string;
	fileName?: string;
	fileType: string;
	originalFileName?: string;
	previewUrl: string;
	isDeleted?: boolean;
}

export interface IMetaKeyResponse {
	id: string;
	titleEn: string;
	titleBn: string;
	metaTypeEn: string;
	metaTypeBn: string;
	metaKey: string;
	isDefault: boolean;
	serial: number;
	isActive: boolean;
}

export interface IRequestPayload {
	meta: {
		page: number;
		limit: number;
		sort?: Array<IMetaSort>;
	};
	body?: IObject;
}

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
	const handler = setTimeout(() => {
	  setDebouncedValue(value);
	}, delay);

	return () => {
	  clearTimeout(handler);
	};
  }, [value, delay]);

  return debouncedValue;
}