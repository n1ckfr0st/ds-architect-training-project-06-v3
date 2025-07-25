
import { Button } from "./button"


export default {
    title: "Компоненты/Button",
    component: Button,
    parameters: {
		layout: "centered",
		status: {
			type: "beta", // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
		},
	},
    tags: ['autodocs']
}

export const PrimaryBase = {
    args: {
        appearance: "primaryBase",
        size: "xl",
        text: "Hello button"
    }
}

export const PrimaryDerivate = {
    args: {
        appearance: "primaryDerivate",
        size: "xl",
        text: "Hello button"
    }
}

export const Secondary = {
    args: {
        appearance: "secondary",
        size: "xl",
        text: "Hello button"
    }
}

export const Ghost = {
    args: {
        appearance: "ghost",
        size: "xl",
        text: "Hello button"
    }
}

export const Disabled = {
    args: {
        appearance: "primaryBase",
        size: "xl",
        text: "Hello button",
        disabled: true
    }
}