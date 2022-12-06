import { createSlice } from "@reduxjs/toolkit"

const mode1 = {
    darkMode: true,
    color1: '#293132',
    color2: '#474044',
    color3: '#4F5165',
    color4: '#547AA5',
    color5: '#50D8D7',
    photo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c757012-ccb3-4523-9440-452c4950ebbb/dffipmk-040e654c-5745-4bc7-b4c3-3fb4a8055ff5.jpg/v1/fit/w_300,h_900,q_70,strp/denji_chainsawman_pfp_by_iamyamada_dffipmk-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzRjNzU3MDEyLWNjYjMtNDUyMy05NDQwLTQ1MmM0OTUwZWJiYlwvZGZmaXBtay0wNDBlNjU0Yy01NzQ1LTRiYzctYjRjMy0zZmI0YTgwNTVmZjUuanBnIiwid2lkdGgiOiI8PTEwODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vlbZNfekDsm77iY2KxCFl2NAQiyr5LGqzvjAPFRtUxY'
}

const mode2 = {
    darkMode: false,
    color1: '#6E44FF',
    color2: '#B892FF',
    color3: '#FFC2E2',
    color4: '#FF90B3',
    color5: '#EF7A85',
    photo: 'https://64.media.tumblr.com/b9b9776521216586e9c01a44a73307dc/412882aa3c3d397b-83/s400x600/838249abee1ddb6628334a4ee2e2c9f9901349c3.jpg'
}

const initialState = mode2

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        toggleDark: (state) => {
            return mode1
        },
        toggleLight: (state) => {
            return mode2
        }
    }
})

export const { toggleDark, toggleLight } = modeSlice.actions

export default modeSlice.reducer