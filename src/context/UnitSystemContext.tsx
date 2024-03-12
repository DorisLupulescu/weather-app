import { ReactNode, createContext, useState } from 'react'
import { UnitSystemType } from '../utils/types'

interface IUnitSystem {
    unit: UnitSystemType
    toggleUnit: (selectedUnit: UnitSystemType) => void
}

const UnitSystemContext = createContext<IUnitSystem>({
    unit: 'metric',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    toggleUnit: () => {},
})

const UnitSystemProvider = ({ children }: { children: ReactNode }) => {
    const [unit, setUnit] = useState<UnitSystemType>('metric')

    const toggleUnit = (selected: UnitSystemType) => {
        setUnit(selected)
    }

    return (
        <UnitSystemContext.Provider value={{ unit, toggleUnit }}>
            {children}
        </UnitSystemContext.Provider>
    )
}

export { UnitSystemContext, UnitSystemProvider }
