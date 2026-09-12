import { useState } from 'react'
import './App.css'
import { Categories } from './componentes/categories'
import ExpenseForm from './componentes/expenseForm'
import Transactions from './componentes/transactions'

const Bills = ({time}) => {
  return (
    <div className='bills-container' >
      <p>
        Total gastado en el {time}
      </p>
      <span>
        1212
      </span>
    </div>
  )
}

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (transactions) => {
    setTransactions((prevTransactions) => [...prevTransactions, transactions]);
  };

  return (
    <main className='app'>
      <h3 className='title'>
        LIBRO DE GASTOS
      </h3>

      <Bills />

      <Categories />

      <ExpenseForm onAddTransaction={handleAddTransaction} />

      <Transactions transactions={transactions} />
    </main>
   )
}

 export default App
