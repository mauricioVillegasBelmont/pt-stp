import { useEffect, useRef } from "react";

interface CountUpProps {
	start: number;
	end: number;
	duration: number;
	className?: string;
	delay?: number;
}

export default function CountUp({
	start,
	end,
	duration,
	className = "",
	delay = 0,
}: CountUpProps) {
	const elementRef = useRef<HTMLSpanElement>(null);
	const hasAnimated = useRef(false);

	useEffect(() => {
		if (hasAnimated.current) return;

		const element = elementRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasAnimated.current) {
						hasAnimated.current = true;
						setTimeout(() => {
							initiateCounter();
						}, delay);
						observer.disconnect();
					}
				});
			},
			{
				root: null, // defaults to the document viewport
				rootMargin: "77px", // no margin
				threshold: 1,
			},
		);

		observer.observe(element);

		return () => observer.disconnect();

		function initiateCounter() {
			const startValue = start;
			const endValue = end;
			const startTime = performance.now();

			const animate = (currentTime: number) => {
				if (!element) return;
				const elapsed = currentTime - startTime;
				const progress = Math.min(elapsed / duration, 1);

				// Easing function (ease-out)
				const easedProgress = 1 - Math.pow(1 - progress, 3);

				const currentValue =
					startValue + (endValue - startValue) * easedProgress;
				element.textContent = Math.min(
					Math.round(currentValue),
					endValue,
				).toString();

				if (progress < 1) {
					requestAnimationFrame(animate);
				} else {
					element.textContent = endValue.toString();
				}
			};
			if (!element) return;
			requestAnimationFrame(animate);
		}
	}, [start, end, duration, delay]);

	return (
		<span ref={elementRef} className={className}>
			{start}
		</span>
	);
}
