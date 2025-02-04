"use client"

import React from "react"
import dynamic from "next/dynamic"

import { Button } from "@imfunniee/ui/components/button"
import { TitleBar } from "@/src/components/title-bar"

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<TitleBar />
			<Button onClick={() => alert("You touched me, without consent!!")}>Button</Button>
		</div>
	)
}
