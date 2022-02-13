import { ThemeProvider } from "@mui/material/styles";
import { FAB, Appbar, TodoContainer,AddDialog } from "./Components";
import theme from "./Theme";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { EditDialog } from "./Components/Dialogs/EditDialog";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div id={"app"}>
          <Appbar />
          <TodoContainer />
          <FAB />
          <AddDialog/>
          <EditDialog/>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
