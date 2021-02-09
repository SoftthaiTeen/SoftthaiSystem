import { Action, Reducer } from 'redux';
import { createSelector } from 'reselect';


export interface LayoutInitalState {
    menuVisible: boolean;
    loading: boolean,
}
export const LayoutInitalState = {
    menuVisible: true, loading: false
}
const prefix = 'LAYOUT';
export const layoutActions = {
    MENU_TOGGLE: `${prefix}_MENU_TOGGLE`,
    MENU_HIDE: `${prefix}_MENU_HIDE`,
    MENU_SHOW: `${prefix}_MENU_SHOW`,
}


export const LayoutActionCreators = {
    doToggleMenu: () => ({ type: layoutActions.MENU_TOGGLE }),
    doShowMenu: () => ({ type: layoutActions.MENU_SHOW }),
    doHideMenu: () => ({ type: layoutActions.MENU_HIDE }),
}

export const layoutReducer: Reducer<LayoutInitalState> = (state: LayoutInitalState | undefined, incomingAction: Action): LayoutInitalState => {
    if (state === undefined) {
        return {
            menuVisible: true, loading: false
        };
    }

    const action = incomingAction;


    switch (action.type) {
        case layoutActions.MENU_TOGGLE:
            return {
                ...state,
                menuVisible: !state.menuVisible,
            };
        case layoutActions.MENU_SHOW:
            return {
                ...state,
                menuVisible: true,
            };
        case layoutActions.MENU_HIDE:
            return {
                ...state,
                menuVisible: false,
            };
        default:
            return state;
    }
};

