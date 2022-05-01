import { ChangeEvent } from 'react'
import create from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { devtools } from 'zustand/middleware'

type itemType = {
    id?: string
    isChecked?: boolean
}

interface CheckBoxState {
    items: itemType[]
    addItem: (item: itemType) => void
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useCheckBox = create<CheckBoxState>()(
    devtools((set) => ({
        items: [],
        addItem: (item: itemType) => {
            set((state) => ({
                items: [...state.items, { ...item, isChecked: false }],
            }))
        },
        handleChange: (e: ChangeEvent<HTMLInputElement>) => {
            const { name, checked } = e.target

            if (name === 'selectAll') {
                set((state) => ({
                    items: state.items.map((item) => ({
                        ...item,
                        isChecked: checked,
                    })),
                }))
            } else {
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === name
                            ? { ...item, isChecked: checked }
                            : item
                    ),
                }))
            }
        },
    }))
)
