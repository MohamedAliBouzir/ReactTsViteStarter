import { HTMLAttributeAnchorTarget, HTMLAttributes, ReactNode, forwardRef } from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { TColor } from '../type/color-type';
import { TIcons } from '../type/icons-type';
import Icon from './icon/Icon';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import TagWrapper from './TagWrapper';


export interface IButtonProps
	extends HTMLAttributes<
		HTMLButtonElement | HTMLAnchorElement | HTMLInputElement | HTMLLinkElement
	> {
	children?: ReactNode;
	tag?: 'button' | 'a' | 'input' | 'link';
	type?: 'button' | 'submit' | 'reset';
	to?: string | undefined;
	href?: string | undefined;
	isActive?: boolean;
	color?: TColor | 'link' | 'brand' | 'brand-two' | 'storybook';
	isOutline?: boolean;
	isLight?: boolean;
	isLink?: boolean;
	className?: string;
	icon?: TIcons;
	rounded?:
		| 'default'
		| 0
		| 1
		| 2
		| 3
		| 'bottom'
		| 'top'
		| 'circle'
		| 'end'
		| 'start'
		| 'pill'
		| null;
	size?: 'sm' | null | 'lg';
	isDisable?: boolean;
	shadow?: null | 'none' | 'sm' | 'default' | 'lg';
	hoverShadow?: null | 'none' | 'sm' | 'default' | 'lg';
	target?: HTMLAttributeAnchorTarget;
	isVisuallyHidden?: boolean;
	onClick?(...args: unknown[]): unknown;
	download?: true;
}
const Button = forwardRef<HTMLAnchorElement, IButtonProps>(
	(
		{
			children,
			tag,
			type,
			to,
			href,
			isActive,
			color,
			isOutline,
			isLight,
			isLink,
			className,
			icon,
			rounded,
			size,
			isDisable,
			shadow,
			hoverShadow,
			target,
			isVisuallyHidden,
			...props
		},
		ref,
	) => {
		const BTN_CLASS = classNames(
			'btn',
			{
				[`btn-${isOutline || isLink ? `outline-${color}` : color}`]:
					(color && !isLight) || (color && isLink),
				'border-transparent': isLink,
				[`btn-${size}`]: size,
				[`btn-hover-shadow${hoverShadow !== 'default' ? `-${hoverShadow}` : ''}`]:
					hoverShadow,
				[`btn-light-${color}`]: isLight,
				[`shadow${shadow !== 'default' ? `-${shadow}` : ''}`]: !!shadow,
				[`rounded${rounded !== 'default' ? `-${rounded}` : ''}`]: rounded,
				'rounded-0':
					rounded === 'bottom' ||
					rounded === 'top' ||
					rounded === 'end' ||
					rounded === 'start' ||
					rounded === 0,
				'btn-only-icon': !children || isVisuallyHidden,
				disabled: isDisable,
				active: isActive,
			},
			className,
		);

		const INNER = (
			<>
				{icon && <Icon icon={icon} className='btn-icon' />}
				{isVisuallyHidden ? (
					<span className='visually-hidden'>Toggle Dropdown</span>
				) : (
					children
				)}
			</>
		);

		const ANCHOR_LINK_PATTERN = /^#/i;

		const disableProps = isDisable && {
			tabIndex: -1,
			'aria-disabled': true,
			disabled: true,
		};

		if (tag === 'a') {
			if (typeof to === 'string' && ANCHOR_LINK_PATTERN.test(to)) {
				return (
					<HashLink
						ref={ref}
						className={BTN_CLASS}
						to={to}
						{...disableProps}
						{...props}>
						{INNER}
					</HashLink>
				);
			}
			if (to) {
				return (
					<Link
						ref={ref}
						className={BTN_CLASS}
						to={to}
						rel='noopener'
						target={target}
						{...disableProps}
						{...props}>
						{INNER}
					</Link>
				);
			}
			return (
				<a
					ref={ref}
					className={BTN_CLASS}
					href={href}
					role='button'
					rel='noopener'
					target={target}
					{...disableProps}
					{...props}>
					{INNER}
				</a>
			);
		}
		return (
			<TagWrapper
				ref={ref}
				tag={tag}
				type={type}
				className={BTN_CLASS}
				{...disableProps}
				{...props}>
				{INNER}
			</TagWrapper>
		);
	},
);
Button.displayName = 'Button';
Button.propTypes = {
	children: PropTypes.node,
	/**
	 * Button HTML tag
	 */
	tag: PropTypes.oneOf(['button', 'a', 'input', 'link']),
	/**
	 * Change button type attribute
	 */
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	/**
	 * If tag is "a", the page you want to go to using react router dom.
	 */
	to: PropTypes.string,
	/**
	 * If tag is "a" and to is null
	 */
	href: PropTypes.string,
	/**
	 * change active status
	 */
	isActive: PropTypes.bool,
	/**
	 * Theme colors
	 */
	color: PropTypes.oneOf([
		null,
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
		'link',
		'brand',
		'brand-two',
		'storybook',
	]),
	/**
	 * if isOutline is true isLight and isLink must be false
	 */
	isOutline: PropTypes.bool,
	/**
	 * if isLight is true isOutline and isLink must be false
	 */
	isLight: PropTypes.bool,
	/**
	 * if isLink is true isOutline and isLight must be false
	 */
	isLink: PropTypes.bool,
	className: PropTypes.string,
	icon: PropTypes.string,
	rounded: PropTypes.oneOf([
		'default',
		0,
		1,
		2,
		3,
		'bottom',
		'top',
		'circle',
		'end',
		'start',
		'pill',
	]),
	size: PropTypes.oneOf(['sm', null, 'lg']),
	/**
	 * Disabled buttons have ***pointer-events: none*** applied to, preventing hover and active states from triggering.
	 */
	isDisable: PropTypes.bool,
	shadow: PropTypes.oneOf([null, 'none', 'sm', 'default', 'lg']),
	hoverShadow: PropTypes.oneOf([null, 'none', 'sm', 'default', 'lg']),
	/**
	 * If tag is "a", the target attribute specifies where to open the linked document.
	 */
	target: PropTypes.oneOfType([
		PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
		PropTypes.string,
	]),
	isVisuallyHidden: PropTypes.bool,
};
Button.defaultProps = {
	children: null,
	tag: 'button',
	type: 'button',
	to: undefined,
	href: undefined,
	isActive: false,
	color: undefined,
	isOutline: false,
	isLight: false,
	isLink: false,
	className: undefined,
	icon: undefined,
	rounded: null,
	size: null,
	isDisable: false,
	shadow: null,
	hoverShadow: null,
	target: undefined,
	isVisuallyHidden: false,
};

export default Button;
