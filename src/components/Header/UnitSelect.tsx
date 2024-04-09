import { SelectChangeEvent } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { unitToggle } from '../../redux/slices/userSettings'
import { RootState } from '../../redux/store'
import { UnitSystemType } from '../../utils/types'
import Select, { IOptions } from '../Select'
import { UnitIcon } from './styles'

const unitOptions: IOptions[] = [
    { value: 'metric', label: '°C' },
    { value: 'imperial', label: '°F' },
]

const UnitSelect = () => {
    // const { unit, toggleUnit } = useContext(UnitSystemContext)
    const unit = useSelector((state: RootState) => state.settings.unit)
    const dispatch = useDispatch()

    const handleUnitChange = (selectedUnit: SelectChangeEvent) => {
        dispatch(unitToggle(selectedUnit.target.value as UnitSystemType))
        // toggleUnit(selectedUnit.target.value as UnitSystemType)
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
