import { SidebarElement, type SidebarPosition } from "sidebarjs";
import "sidebarjs/lib/sidebarjs.css";

new SidebarElement({
	position: "right" as SidebarPosition,
	backdropOpacity: 0.3,
});
// sidebarjs.open();
