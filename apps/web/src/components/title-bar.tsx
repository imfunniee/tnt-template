import { useState, useEffect } from "react"
import { Minus, Minimize, Maximize, X } from "lucide-react"

import { useTauri } from "@/src/hooks/use-tauri"
import { Button } from "@imfunniee/ui/components/button"

const TitleBar = () => {
	const { isTauri, activeWindow } = useTauri()

	const [title, setTitle] = useState<string>("App")
	const [isMaximized, setIsMaximized] = useState<boolean>(false)

	useEffect(() => {
		if (activeWindow) {
			activeWindow.title().then(title => setTitle(title))

			activeWindow.onResized(() => {
				activeWindow.isMaximized().then(setIsMaximized)
			})
		}
	}, [activeWindow])

	if (!isTauri || !activeWindow) return null

	return (
		<div
			data-tauri-drag-region
			className="fixed left-0 right-0 top-0 flex items-center justify-between border-b p-1 px-2"
		>
			<div>{title}</div>
			<div className="flex items-center space-x-2 [&>button]:rounded-[8px]">
				<Button size="icon" variant="outline" className="size-[28px]" onClick={() => activeWindow.minimize()}>
					<Minus size={20} />
				</Button>
				<Button size="icon" variant="outline" className="size-[28px]" onClick={() => activeWindow.toggleMaximize()}>
					{isMaximized ? <Minimize size={20} /> : <Maximize size={24} />}
				</Button>
				<Button size="icon" variant="outline" className="size-[28px]" onClick={() => activeWindow.close()}>
					<X size={20} />
				</Button>
			</div>
		</div>
	)
}

export { TitleBar }
