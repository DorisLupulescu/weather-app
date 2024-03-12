import { MenuItem, SelectChangeEvent } from '@mui/material'
import { UnitSystemType } from '../../utils/types'
import { SelectWrapper } from './styles'

interface ISelectProps {
    defaultValue: UnitSystemType
    value: UnitSystemType
    handleChange: (selectedItem: SelectChangeEvent) => void
    options: IOptions[]
}

export interface IOptions {
    value: UnitSystemType
    label: string
}

const Select = ({
    defaultValue,
    value,
    options,
    handleChange,
}: ISelectProps) => {
    return (
        <SelectWrapper
            placeholder=""
            defaultValue={defaultValue}
            value={value}
            id="unit-system"
            onChange={(selectedItem: any) => handleChange(selectedItem)}
        >
            {options.map((option) => (
                <MenuItem value={option.value}>{option.label}</MenuItem>
            ))}
        </SelectWrapper>
    )
}

export default Select
