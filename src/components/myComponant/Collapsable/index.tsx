import { IColors } from "@/components/myComponent/interface/common.interface";
import clsx from "clsx";
import { ReactNode } from "react";
import Icon from "../Icon";
declare const generateId: () => number;

interface ICollapsable {
	id?: string;
  title: string;
  children: ReactNode | ReactNode[] | string;
  className?: string;
  titleClass?: string;
  hoverText?: string;
  detailsClass?: string;
  startIcon?: string;
  endIcon?: string;
  iconColor?: IColors;
  noShadow?: boolean;
  defaultOpen?: boolean;
}


const Collapsable = ({
	title,
	children,
	className = 'my-2 p-3',
	titleClass,
	hoverText,
	detailsClass = 'mt-4 mx-2 ms-15 fs-5 ',
	startIcon,
	endIcon,
	iconColor,
	noShadow = false,
	defaultOpen,
}: ICollapsable) => {
	const id = generateId().toString();

	return (
		<div
			className={clsx(`card rounded border`, {
				[className]: !!className,
				'shadow shadow-sm': !noShadow,
			})}
      style={{cursor:'default'}}
			role='button'
		>
			<a
				data-bs-toggle='collapse'
				href={`#${id}`}
				aria-expanded='false'
				aria-controls={id}
				title={hoverText}
				className={clsx(`d-flex align-items-center gap-3 text-dark m-0 fs-3`, {
					[titleClass as string]: !!titleClass,
				})}
			>
				{startIcon ? <Icon icon={startIcon} variants='outlined' size={25} color={iconColor} /> : null}

				{title}

				{endIcon ? <Icon icon={endIcon} variants='outlined' size={25} /> : null}
				<Icon icon='expand_more' variants='outlined' size={25} className='ms-auto' />
			</a>
			<div id={id} className={clsx(`collapse`, { show: defaultOpen, [detailsClass]: !detailsClass })}>
				{children}
			</div>
		</div>
	);
};


export default Collapsable;
