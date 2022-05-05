import { createContext, useReducer } from "react";

interface IAppContext {
  state: IState;
  dispatch: React.Dispatch<{ type: themeActiontype.TOGGLE_THEME }>;
}

interface IState {
  theme: "dark" | "light" | "";
}

export enum themeActiontype {
  TOGGLE_THEME = "TOGGLE_THEME",
}

const initalState: IState = {
  theme: "",
};

const reducer = (
  state = initalState,
  action: { type: "TOGGLE_THEME" }
): IState => {
  switch (action.type) {
    case themeActiontype.TOGGLE_THEME:
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
    default:
      return state;
  }
};

export const AppContext = createContext<IAppContext>(null!);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const value = {
    state,
    dispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppProvider;
