import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UnitSystemType } from '../../utils/types'

export interface UserSettingsState {
    unit: UnitSystemType
}

const initialState: UserSettingsState = {
    unit: 'metric',
}

export const UserSettingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        unitToggle: (state, { payload }: PayloadAction<UnitSystemType>) => {
            state.unit = payload
        },
    },
})

export const { unitToggle } = UserSettingsSlice.actions

export default UserSettingsSlice.reducer
