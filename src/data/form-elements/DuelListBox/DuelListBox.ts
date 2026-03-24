export const options = [
  { value: "1", label: "One" },
  { value: "2", label: "Two" },
  { value: "3", label: "Three" },
];
export const options2 = [
  { value: "1", label: "One" },
  { value: "2", label: "Two" },
  { value: "3", label: "Three" },
  { value: "4", label: "Four" },
  { value: "5", label: "Five" },
  { value: "6", label: "Six" },
  { value: "7", label: "Seven" },
  { value: "8", label: "Eight" },
  { value: "9", label: "Nine" },
];
export const allOptions = [
  ["draggable", "true", "boolean", "If the list items should be draggable."],
  [
    "showSortButtons",
    "false",
    "boolean",
    "If the sort buttons should be shown. (up and down)",
  ],
  [
    "enableDoubleClick",
    "true",
    "boolean",
    "If double clicking a list items should change column.",
  ],
  ["showAddButton", "true", "boolean", 'If the "add" button should be shown.'],
  [
    "showRemoveButton",
    "true",
    "boolean",
    'If the "remove" button should be shown.',
  ],
  [
    "showAddAllButton",
    "true",
    "boolean",
    'If the "add all" button should be shown.',
  ],
  [
    "showRemoveAllButton",
    "true",
    "boolean",
    'If the "remove all" button should be shown.',
  ],
  [
    "availableTitle",
    '"Available options"',
    "string",
    'Title shown above the "Available options"',
  ],
  [
    "selectedTitle",
    '"Selected options"',
    "string",
    'Title shown above the "Selected options"',
  ],
  ["addButtonText", '"add"', "string", 'Text displayed in the "add" button.'],
  [
    "removeButtonText",
    '"remove"',
    "string",
    'Text displayed in the "remove" button.',
  ],
  [
    "addAllButtonText",
    '"add all"',
    "string",
    'Text displayed in the "add all" button.',
  ],
  [
    "removeAllButtonText",
    '"remove all"',
    "string",
    'Text displayed in the "remove all" button.',
  ],
  ["searchPlaceholder", '"Search"', "string", 'Text in the "search" fields.'],
  [
    "upButtonText",
    '"up"',
    "string",
    'Text in the "up" button (if sorting enabled)',
  ],
  [
    "downButtonText",
    '"down"',
    "string",
    'Text in the "down" button (if sorting enabled)',
  ],
  [
    "options",
    "undefined",
    "Array<{ text, value, selected, order }>",
    "Options list that overwrites <select>.",
  ],
  [
    "sortFunction",
    "Function",
    "Function",
    "Custom function to override default sorting.",
  ],
];
export const publicFunctions = [
  [
    "changeOrder",
    "liItem, newPosition",
    "Change the order of the given list element.",
  ],
  ["addOptions", "options", "Add multiple options to the options list."],
  [
    "addOption",
    "option, index (optional)",
    "Add a single option, optionally at an index.",
  ],
  ["addEventListener", "eventName, callback", "Add an event listener."],
  ["changeSelected", "listItem", "Toggle selected state of the item."],
  ["actionAllSelected", "event (optional)", "Mark all items as selected."],
  ["actionAllDeselected", "event (optional)", "Deselect all items."],
  ["redraw", "", "Redraw the lists."],
];
