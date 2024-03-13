import { SelectChangeEvent } from '@mui/material'
import { useContext } from 'react'
import { UnitSystemContext } from '../../context/UnitSystemContext'
import { UnitSystemType } from '../../utils/types'
import Select, { IOptions } from '../Select'
import { UnitIcon } from './styles'

const unitOptions: IOptions[] = [
    { value: 'metric', label: '°C' },
    { value: 'imperial', label: '°F' },
]

const UnitSelect = () => {
    const { unit, toggleUnit } = useContext(UnitSystemContext)

    const handleUnitChange = (selectedUnit: SelectChangeEvent) => {
        toggleUnit(selectedUnit.target.value as UnitSystemType)
    }
    return (
        <>
            <UnitIcon />
            <Select
                value={unit}
                defaultValue={unit}
                handleChange={handleUnitChange}
                options={unitOptions}
            ></Select>
        </>
    )
}

export default UnitSelect
