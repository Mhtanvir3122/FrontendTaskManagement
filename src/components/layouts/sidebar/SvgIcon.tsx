type SvgIconProps = {
  iconId: string;
  className?: string;
  size?: number;
};

const SvgIcon: React.FC<SvgIconProps> = ({ iconId, className, size = 20 }) => (
  <svg
    stroke="currentColor"
    strokeWidth="1.5"
    width={size}
    height={size}
    className={className}
  >
    <use href={`/svg/_sprite.svg#${iconId}`||`/src/assets/svg/${iconId}.svg`} />
    {/* <use href={`/src/assets/svg/${iconId}.svg`} /> */}
  </svg>
);

export default SvgIcon;
