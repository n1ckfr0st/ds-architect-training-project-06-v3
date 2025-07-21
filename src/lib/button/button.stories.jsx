
import { Button } from "./button"


export default {
    title: "Компоненты/Button",
    component: Button,
    layout: "centered",
    parametrs: {
        status: {
            type: "stable" // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
        },
    },
    tags: ['autodocs']
}

export const PrimaryBase = {
    args: {
        appearance: "primaryBase",
        size: "xl",
        text: "Hello primary button"
    }
}

export const Secondary = {
    args: {
        appearance: "secondary",
        size: "xl",
        text: "Hello primary button"
    }
}

export const Disabled = {
    args: {
        appearance: "primaryBase",
        size: "xl",
        text: "Hello primary button",
        disabled: true
    }
}