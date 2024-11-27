import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
//import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
    </div>
  );
}
// onde esta ListarTarefa pode ser colocado a de Login
export default App;
