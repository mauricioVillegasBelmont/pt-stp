import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initParallax = async (config) => {
	if (typeof window === "undefined") return;

	const ScrollMagic = (await import("scrollmagic")).default;
	const { ScrollMagicPluginGsap } = await import("scrollmagic-plugin-gsap");

	// Register the GSAP plugin with ScrollMagic
	ScrollMagicPluginGsap(ScrollMagic, gsap);

	if (import.meta.env.DEV) {
		await import("scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js");
	}

	const controller = new ScrollMagic.Controller();

	const setAnimation = (selector, parent, triggerConf, animation) => {
		const scene = new ScrollMagic.Scene({
			...triggerConf,
			triggerElement: `[data-parallax-parent="${parent}"]`,
		})
			.setTween(`[data-parallax-id="${selector}"]`, animation)
			.addTo(controller);
		if (import.meta.env.DEV && (scene as any).addIndicators) {
			(scene as any).addIndicators();
		}
	};

	Object.keys(config).forEach((key) => {
		const parent = config[key].parent || key;
		const triggerConf = config[key].trigger;
		const options = config[key].options;
		setAnimation(key, parent, triggerConf, options);
	});
};
