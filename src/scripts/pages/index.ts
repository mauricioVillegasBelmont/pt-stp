import { initParallax } from "@utils/parallaxManager";

/**
 * Initialize parallax effects on page load
 */

const config = {

  "heroImage":{
    parent: "heroImage",
    trigger:{
      duration:0,
      offset:0,
      triggerHook: 0
    },
    options:{
      y: -500,
      opacity:0,
      duration: 1
    }
  },
  "hero-title":{
    parent: "hero-title",
    trigger:{
      duration:0,
      offset:0,
      triggerHook: 0
    },
    options:{
      x: -250,
      opacity:0,
      delay:0,
      duration: 1
    }
  },
  "card1":{
    parent: "cardWrapper",
    trigger:{
      duration:0,
      offset:0,
      triggerHook: 0.75
    },
    options:{
      y:0,
      opacity:1,
      delay:0,
      duration: 1
    }
  },
  "card2":{
    parent: "cardWrapper",
    trigger:{
      duration:0,
      offset:0,
      triggerHook: 0.75
    },
    options:{
      y:0,
      opacity:1,
      delay:0.5,
      duration: 1
    }
  },
  "card3":{
    parent: "cardWrapper",
    trigger:{
      duration:0,
      offset:0,
      triggerHook: 0.75
    },
    options:{
      y:0,
      opacity:1,
      delay:1,
      duration: 1
    }
  },
  "infra":{
    parent: "infra",
    trigger:{
      duration:0,
      offset:0,
      triggerHook: 0.5
    },
    options:{
      y:0,
      opacity:1,
      delay:0,
      duration: 1
    }
  },
  "infra-title":{
    parent: "infra",
    trigger:{
      duration:0,
      offset:0,
      triggerHook: 0.5
    },
    options:{
      x:0,
      opacity:1,
      delay:0,
      duration: 1
    }
  },
  "form":{
    parent: "form",
    trigger:{
      duration:0,
      offset:0,
      triggerHook: 0.5
    },
    options:{
      y:0,
      opacity:1,
      delay:0,
      duration: 1
    }
  },
  "form-title":{
    parent: "form",
    trigger:{
      duration:0,
      offset:0,
      triggerHook: 0.5
    },
    options:{
      x:0,
      opacity:1,
      delay:0,
      duration: 1
    }
  },
  "badge0":{
    parent: "badges",
    trigger:{
      duration:0,
      offset:25,
      triggerHook: 0.75
    },
    options:{
      x:0,
      opacity:1,
      delay:0,
      duration: 1
    }
  },
  "badge1":{
    parent: "badges",
    trigger:{
      duration:0,
      offset:50,
      triggerHook: 0.75
    },
    options:{
      x:0,
      opacity:1,
      delay:0,
      duration: 1
    }
  },
  "badge2":{
    parent: "badges",
    trigger:{
      duration:0,
      offset:75,
      triggerHook: 0.75
    },
    options:{
      x:0,
      opacity:1,
      delay:0,
      duration: 1
    }
  },
  "badge3":{
    parent: "badges",
    trigger:{
      duration:0,
      offset:100,
      triggerHook: 0.75
    },
    options:{
      x:0,
      opacity:1,
      delay:0,
      duration: 1
    }
  },
  "badge4":{
    parent: "badges",
    trigger:{
      duration:0,
      offset:125,
      triggerHook: 0.75
    },
    options:{
      x:0,
      opacity:1,
      delay:0,
      duration: 1
    }
  },

}
function init(): void {
	// Wait for DOM to be ready
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", () => {
			initParallax(config);
		});
	} else {
		initParallax(config);
	}
}

init();
