"use client";
import React, { useState, useRef, useEffect } from "react";

interface TooltipProps {
	children: React.ReactNode;
	content: React.ReactNode;
	position?: "top" | "right" | "bottom" | "left";
	delay?: number;
	customStyle?: React.CSSProperties;
	disabled?: boolean;
}

interface TooltipStyles {
	tooltip: React.CSSProperties;
	top: React.CSSProperties;
	right: React.CSSProperties;
	bottom: React.CSSProperties;
	left: React.CSSProperties;
	arrow: React.CSSProperties;
	arrowTop: React.CSSProperties;
	arrowRight: React.CSSProperties;
	arrowBottom: React.CSSProperties;
	arrowLeft: React.CSSProperties;
}

const tooltipStyles: TooltipStyles = {
	tooltip: {
		position: "absolute",
		borderRadius: "4px",
		left: "50%",
		transform: "translateX(-50%)",
		padding: "6px 10px",
		color: "white",
		backgroundColor: "rgba(0, 0, 0, 0.8)",
		fontSize: "14px",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 1.2,
		zIndex: 100,
		pointerEvents: "none",
		whiteSpace: "nowrap",
	},
	top: {
		bottom: "100%",
		marginBottom: "6px",
	},
	right: {
		left: "100%",
		top: "50%",
		transform: "translateX(6px) translateY(-50%)",
	},
	bottom: {
		top: "100%",
		marginTop: "6px",
	},
	left: {
		right: "100%",
		top: "50%",
		left: "auto",
		transform: "translateX(-6px) translateY(-50%)",
	},
	arrow: {
		position: "absolute",
		width: 0,
		height: 0,
		borderStyle: "solid",
		borderWidth: "5px",
	},
	arrowTop: {
		bottom: "-5px",
		left: "50%",
		marginLeft: "-5px",
		borderWidth: "5px 5px 0 5px",
		borderColor: "rgba(0, 0, 0, 0.8) transparent transparent transparent",
	},
	arrowRight: {
		left: "-5px",
		top: "50%",
		marginTop: "-5px",
		borderWidth: "5px 5px 5px 0",
		borderColor: "transparent rgba(0, 0, 0, 0.8) transparent transparent",
	},
	arrowBottom: {
		top: "-5px",
		left: "50%",
		marginLeft: "-5px",
		borderWidth: "0 5px 5px 5px",
		borderColor: "transparent transparent transparent rgba(0, 0, 0, 0.8)",
	},
	arrowLeft: {
		right: "-5px",
		top: "50%",
		marginTop: "-5px",
		borderWidth: "5px 0 5px 5px",
		borderColor: "transparent transparent transparent rgba(0, 0, 0, 0.8)",
	},
};

interface Coordinates {
	x: number;
	y: number;
}

const Tooltip = ({
	children,
	content,
	position = "top",
	delay = 100,
	customStyle = {},
	disabled = false,
}: TooltipProps): JSX.Element => {
	const [active, setActive] = useState<boolean>(false);
	const [coords, setCoords] = useState<Coordinates>({ x: 0, y: 0 });
	const targetRef = useRef<HTMLDivElement | null>(null);
	const tooltipRef = useRef<HTMLDivElement | null>(null);
	let timeout: ReturnType<typeof setTimeout>;

	const showTip = (): void => {
		if (disabled) return;

		timeout = setTimeout(() => {
			if (targetRef.current) {
				const rect = targetRef.current.getBoundingClientRect();
				setCoords({
					x: rect.left + window.scrollX,
					y: rect.top + window.scrollY,
				});
				setActive(true);
			}
		}, delay);
	};

	const hideTip = (): void => {
		clearTimeout(timeout);
		setActive(false);
	};

	useEffect(() => {
		if (active && targetRef.current) {
			const handleResize = (): void => {
				const rect = targetRef.current?.getBoundingClientRect();
				if (rect) {
					setCoords({
						x: rect.left + window.scrollX,
						y: rect.top + window.scrollY,
					});
				}
			};

			window.addEventListener("resize", handleResize);
			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	}, [active]);

	useEffect(() => {
		return () => {
			clearTimeout(timeout);
		};
	}, []);

	const getTooltipStyles = (): React.CSSProperties => {
		const rect = targetRef.current?.getBoundingClientRect() || {
			width: 0,
			height: 0,
			left: 0,
			top: 0,
		};

		const style = {
			...tooltipStyles.tooltip,
			...customStyle,
		};

		if (position === "top") {
			return {
				...style,
				...tooltipStyles.top,
				left: coords.x + rect.width / 2,
			};
		} else if (position === "right") {
			return {
				...style,
				...tooltipStyles.right,
				left: coords.x + rect.width,
				top: coords.y + rect.height / 2,
			};
		} else if (position === "bottom") {
			return {
				...style,
				...tooltipStyles.bottom,
				left: coords.x + rect.width / 2,
			};
		} else if (position === "left") {
			return {
				...style,
				...tooltipStyles.left,
				left: coords.x,
				top: coords.y + rect.height / 2,
			};
		}

		return style;
	};

	const getArrowStyles = (): React.CSSProperties => {
		if (position === "top") return tooltipStyles.arrowTop;
		if (position === "right") return tooltipStyles.arrowRight;
		if (position === "bottom") return tooltipStyles.arrowBottom;
		if (position === "left") return tooltipStyles.arrowLeft;
		return {};
	};

	return (
		<div
			className="tooltip-wrapper"
			style={{ display: "inline-block", position: "relative" }}
			onMouseEnter={showTip}
			onMouseLeave={hideTip}
			onFocus={showTip}
			onBlur={hideTip}
			ref={targetRef}
		>
			{children}

			{active && !disabled && (
				<div
					className={`tooltip-tip ${position}`}
					style={getTooltipStyles()}
					ref={tooltipRef}
					role="tooltip"
					aria-live="polite"
				>
					{content}
					<div
						className="tooltip-arrow"
						style={{ ...tooltipStyles.arrow, ...getArrowStyles() }}
					/>
				</div>
			)}
		</div>
	);
};

export default Tooltip;
