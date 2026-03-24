import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import * as BrandIcons from "@fortawesome/free-brands-svg-icons";
import * as RegularIcons from "@fortawesome/free-regular-svg-icons";
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IIcon {
iconName:string
size?:SizeProp
color?:string
  onClick?: () => void;
}

const IconFontAwesome = ({iconName,size,color,onClick}: IIcon) => {
//   const iconName = "faArrowRotateLeft";
  const IconComponent =
    SolidIcons[iconName as keyof typeof SolidIcons] ||
    RegularIcons[iconName as keyof typeof RegularIcons] ||
    BrandIcons[iconName as keyof typeof BrandIcons];
  const iconDef = IconComponent as IconDefinition;

  return (
    <FontAwesomeIcon size={size} className="fontawesome-icons cursor-pointer mt-1" icon={iconDef} onClick={onClick}  color={color}/>
  );
};
export default IconFontAwesome;
