
import { Modal } from "./modal"


export default {
    title: "Компоненты/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
        status: {
            type: "beta", // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
        },
    },
    tags: ['autodocs']
}

export const Standart = {
    args: {
        title: ""
    }
}
