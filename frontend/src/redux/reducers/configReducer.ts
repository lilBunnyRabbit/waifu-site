import { GoogleLoginResponse } from 'react-google-login';

export const configConstants = {
    SET_THEME: "set_theme",
    SET_ORIENTATION: "set_orientation",
    SET_USER: "set_user",
    REMOVE_USER: "remove_user",
    SET_USER_CONFIG: "set_user_config"
}

export type ConfigState = {
    theme: "dark" | "light",
    orientation: "landscape" | "portrait",
    user?: GoogleLoginResponse['profileObj'],
    user_config?: {
        _id: any,
        email: string,
        time_created: number,
        household?: string,
        permissions: string[]
    }
}

const initialState: ConfigState = {
    theme: "dark",
    orientation: "landscape"
}

export function configReducer(state: ConfigState = initialState, action: any) {
    const { SET_THEME, SET_USER, REMOVE_USER, SET_USER_CONFIG, SET_ORIENTATION } = configConstants;

    switch (action.type) {
        case SET_THEME: return {
            ...state,
            theme: action.payload
        }
        case SET_ORIENTATION: return {
            ...state,
            orientation: action.payload
        }
        case SET_USER: return {
            ...state,
            user: action.payload
        }
        case SET_USER_CONFIG: return {
            ...state,
            user_config: action.payload
        }
        case REMOVE_USER: {
            delete state?.user;
            return state;
        }
        default: return state
    }
}
