import React from "react";
import { Dropdown } from "react-bootstrap";

import "flag-icon-css/css/flag-icons.min.css";

interface Language {
  code: string;
  flagClass: string;
  label: string;
  title: string;
  selected: boolean;
}

const languages: Language[] = [
  {
    code: "en",
    flagClass: "us",
    label: "US",
    title: "English",
    selected: true,
  },
  {
    code: "fr",
    flagClass: "fr",
    label: "France",
    title: "French",
    selected: false,
  },
  {
    code: "es-uk",
    flagClass: "gb",
    label: "UK",
    title: "British English",
    selected: false,
  },
  {
    code: "it",
    flagClass: "it",
    label: "Italy",
    title: "Italian",
    selected: false,
  },
];

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState<Language>(
    languages.find((lang) => lang.selected) || languages[0]
  );

  const handleSelect = (eventKey: string | null) => {
    if (!eventKey) return;

    const newLanguage = languages.find((lang) => lang.code === eventKey);
    if (newLanguage) {
      setSelectedLanguage(newLanguage);
    }
  };

  return (
    <Dropdown
      className="dropdown-icon-none flex-shrink-0"
      id="lang_selector"
      onSelect={handleSelect}
    >
      <Dropdown.Toggle
        variant="link"
        id="dropdown-language"
        className="d-block head-icon p-0 text-decoration-none"
      >
        <div className="lang-flag">
          <span className="flag rounded-circle overflow-hidden">
            <i
              className={`flag-icon flag-icon-${selectedLanguage.flagClass} flag-icon-squared rounded-circle f-s-20`}
              title={selectedLanguage.title}
            ></i>
          </span>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu as="ul" className="language-dropdown header-card border-0">
        {languages.map(({ code, flagClass, label, title }) => (
          <Dropdown.Item
            key={code}
            eventKey={code}
            className={`lang lang-${code} p-2 ${code === selectedLanguage.code ? "selected" : ""}`}
            title={title}
            as="li"
          >
            <span className="d-flex align-items-center">
              <i
                className={`flag-icon flag-icon-${flagClass} flag-icon-squared rounded-circle f-s-20`}
              ></i>
              <span className="ps-2">{label}</span>
            </span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;
