// --------------------
// Type Utilities
// --------------------
export interface IObject {
  [key: string]: any;
}

export const isObject = (value: any): value is IObject => {
  return value !== null && typeof value === "object" && !Array.isArray(value);
};

export const isObjectNull = (value: any): boolean => {
  return value === null || value === undefined;
};

export const notNullOrUndefined = <T>(value: T | null | undefined): value is T =>
  value !== null && value !== undefined;


// --------------------
// Regex
// --------------------
export const DECIMAL_NUMERIC_REGEX = /^(\d+)?(\.)?(\d{0,2})?$/;
export const BN_EN_NUMERIC_REGEX = /^[\d\u09E6-\u09EF]+$/;
export const EN_NUMERIC_REGEX = /^[\d]+$/;
export const BN_EN_DECIMAL_NUMERIC_REGEX =
  /^(\.|[0-9\u09E6-\u09EF]+(\.[0-9\u09E6-\u09EF]+)?)$/;

export const BD_PHONE_REGEX = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
export const BD_PHONE_BANGLA_REGEX = /^(\+?৮৮০|০)?১[৩-৯][০-৯]{8}$/;

export const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const EN_SP_TEXT_REGEX = /^[A-Za-z0-9_!@#$&():\\-`.+,/"'\-\s+]+$/;

// --------------------
// Route Active Checker
// --------------------
export const checkIsActive = (pathname: string, url: string): boolean => {
  const current = pathname.split(/[?#]/)[0];
  if (!current || !url) return false;
  return current === url || current.includes(url);
};

// --------------------
// Required File Checker
// --------------------
type FieldName = string;

interface ReturnObj {
  hasError: boolean;
  fields: FieldName[];
}

export const checkRequiredFiles = (fields: any[], data: any): ReturnObj => {
  const returnObj: ReturnObj = { hasError: false, fields: [] };

  fields.forEach((f: any) => {
    if (Array.isArray(f)) {
      if (
        !(data?.[f[0]] instanceof File) &&
        (!data?.[f[1]] || !Object.keys(data?.[f[1]]).length)
      ) {
        returnObj.fields.push(f[0]);
      } else if (data?.[f[0]] instanceof File) {
        data[f[1]] = null;
      }
    } else {
      if (
        !(data?.[f] instanceof File) &&
        (!data?.[f] || !Object.keys(data?.[f]).length)
      ) {
        returnObj.fields.push(f);
      }
    }
  });

  returnObj.hasError = returnObj.fields.length > 0;
  return returnObj;
};

// --------------------
// Form Value Change Checker
// --------------------
export const isFormValueChanged = (
  initValues: any,
  currentValues: any,
  dirtyFields: any
): boolean => {
  let isChanged = false;

  Object.keys(dirtyFields).forEach((df) => {
    if (isChanged) return;

    const cv = currentValues?.[df] ?? null;
    let iv = initValues?.[df] ?? null;

    if (typeof iv === "object" && isObjectNull(iv)) iv = null;

    if (typeof cv === "object") {
      isChanged = JSON.stringify(cv) !== JSON.stringify(iv);
    } else if (notNullOrUndefined(cv) && notNullOrUndefined(iv)) {
      isChanged = cv.toString() !== iv.toString();
    } else {
      isChanged = cv !== iv;
    }
  });

  return isChanged;
};

// --------------------
// Phone Number Checker
// --------------------
export const phoneNumberEnglishAndBanglaValidation = (data: string) => {
  if (data && data.length > 0 && data.charCodeAt(1) > 57)
    return BD_PHONE_BANGLA_REGEX;
  return BD_PHONE_REGEX;
};

// --------------------
// Validation Helpers
// --------------------
export const numericCheck = (val: string) => {
  return notNullOrUndefined(val)
    ? BN_EN_NUMERIC_REGEX.test(val)
      ? true
      : "NUMERIC_ONLY"
    : true;
};

export const decimalCheck = (val: string) => {
  return notNullOrUndefined(val)
    ? BN_EN_DECIMAL_NUMERIC_REGEX.test(val)
      ? true
      : "NUMERIC_ONLY"
    : true;
};

export const enCheck = (val: string) => {
  return notNullOrUndefined(val)
    ? EN_SP_TEXT_REGEX.test(val)
      ? true
      : "EN_ONLY"
    : true;
};

// --------------------
// English → Bangla Number Converter
// --------------------
export const numEnToBn = (input: string | number): string => {
  const enToBnMap: Record<string, string> = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
  };

  return input
    .toString()
    .split("")
    .map((ch) => enToBnMap[ch] ?? ch)
    .join("");
};

// --------------------
// Universal Null Checker
// --------------------
export const isNull = (
  val: string | null | undefined | any[] | IObject
): boolean => {
  return (
    val === null ||
    val === undefined ||
    val === "" ||
    val === "null" ||
    val === "undefined" ||
    (Array.isArray(val) && val.length === 0) ||
    (isObject(val) && Object.keys(val).length === 0)
  );
};
