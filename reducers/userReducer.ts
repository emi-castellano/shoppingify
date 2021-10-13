import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const initialState = {
  id: '',
  fullName: '',
  profileThumbnail: '',
  email: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAfterLogin: (state, action: PayloadAction<object>) => {
      // @ts-ignore  
      const { id, email, user_metadata: { avatar_url, full_name } } = action.payload
      state.id = id
      state.fullName = full_name
      state.profileThumbnail = avatar_url
      state.email = email
    },
    removeUserAfterLogout: state => {
      state = initialState
    }
  },
})

export const { setUserAfterLogin, removeUserAfterLogout } = userSlice.actions

export default userSlice.reducer