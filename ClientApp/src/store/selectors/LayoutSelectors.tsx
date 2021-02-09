import { createSelector } from 'reselect';

const selectRaw = (state) => state.layout;

const selectMenuVisible = createSelector(
    [selectRaw],
    (layout) => Boolean(layout.menuVisible),
);

const selectLoading = createSelector(
    [selectRaw],
    (layout) => Boolean(layout.loading),
);

const LayoutSelectors = {
    selectRaw,
    selectMenuVisible,
    selectLoading,

};
export default LayoutSelectors;

