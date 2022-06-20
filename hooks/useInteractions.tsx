import create from 'zustand'
import { devtools } from 'zustand/middleware'

type interactionType = {
    showSidebar: boolean
}

interface InteractionsState {
    interactions: interactionType
    setInteractions: (key: keyof interactionType, bool: boolean) => void
}

export const useInteractions = create<InteractionsState>()(
    devtools((set) => ({
        interactions: {
            showSidebar: false,
        },
        setInteractions: (key, bool) =>
            set((state) => {
                return { interactions: { ...state.interactions, [key]: bool } }
            }),
    }))
)
