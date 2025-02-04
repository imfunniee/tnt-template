import React from "react"

import type { Window } from "@tauri-apps/api/window"

const useTauri = () => {
	const [isTauri, setIsTauri] = React.useState<boolean>(false)
	const [activeWindow, setActiveWindow] = React.useState<Window | undefined>(undefined)

	React.useEffect(() => {
		import("@tauri-apps/api/window")
			.then(({ getCurrentWindow }) => setActiveWindow(getCurrentWindow()))
			.catch(() => setActiveWindow(undefined))

		import("@tauri-apps/api/core").then(({ isTauri }) => setIsTauri(isTauri)).catch(() => setIsTauri(false))
	}, [])

	return {
		isTauri,
		activeWindow,
	}
}

export { useTauri }
