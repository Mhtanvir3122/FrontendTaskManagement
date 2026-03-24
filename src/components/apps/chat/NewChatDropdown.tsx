import { IconBrandHipchat, IconPhoneCall, IconPlus } from "@tabler/icons-react";

const NewChatDropdown = () => {
  return (
    <>
      <div className="float-end">
        <div className="btn-group dropdown-icon-none">
          <button
            className="btn btn-primary icon-btn b-r-22 dropdown-toggle active"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="true"
            aria-expanded="false"
          >
            <IconPlus size="18" />
          </button>
          <ul className="dropdown-menu" data-popper-placement="bottom-start">
            <li>
              <a className="dropdown-item" href="#">
                <IconBrandHipchat size={18} />{" "}
                <span className="f-s-13">New Chat</span>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <IconPhoneCall size={18} />{" "}
                <span className="f-s-13">New Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NewChatDropdown;
