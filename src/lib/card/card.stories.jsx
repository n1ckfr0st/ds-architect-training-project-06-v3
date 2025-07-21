
import { Card } from "./card"


export default {
    title: "Компоненты/Card",
    component: Card,
    layout: "centered",
    parametrs: {
        status: {
            type: "stable" // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
        },
        tags: ['autodocs']
    }
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

