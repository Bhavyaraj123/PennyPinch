import "./App.css";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeEx from "./Components/IncomeEx";
import TransactionList from "./Components/TransactionList";
import Addtransaction from "./Components/Addtransaction";
import { GlobalProvider } from "./contex/GlobalState";
function App() {
  return (
    <>
      <GlobalProvider>
        <div className="min-h-screen flex flex-col justify-center items-center  bg-[#f2f1f1] ">
          <div className="border w-auto  p-8 h-auto  flex flex-col  justify-start items-start">
            <Header />

            <div className="container">
              <Balance />
              <IncomeEx />
              <TransactionList />
              <Addtransaction />
            </div>
          </div>
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
