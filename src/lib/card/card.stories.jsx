
import { Card } from "./card"


export default {
    title: "Компоненты/Card",
    component: Card,
    parameters: {
		layout: "centered",
		status: {
			type: "beta", // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
		},
	},
    tags: ['autodocs']
}

export const TextSizeLarge = {
    args: {
        textSize: "large"
    }
}

export const TextSizeBase = {
    args: {
        textSize: "base"
    }
}

