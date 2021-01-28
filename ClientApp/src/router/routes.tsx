const _blankRoute = [
  {
    path: "/react",
    loader: () => import("src/view/ReactApp/ReactAppLink"),
  },
].filter(Boolean);

const _CommonRoute = [
  {
    path: "/",
    loader: () => import("src/view/Home/Home"),
    exact: true,
  },
  {
    path: "/form1",
    loader: () => import("src/view/Form1/Form1Content"),
    exact: true,
  },
].filter(Boolean);

export default { _blankRoute, _CommonRoute };
