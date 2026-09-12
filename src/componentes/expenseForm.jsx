import { useState } from 'react';
import { categories } from './categoryData';
// import { Coffee, Home, Car, ShoppingBag, Film, HeartPulse, MoreHorizontal } from 'lucide-react';


const ExpenseForm = ({ onAddTransaction }) => {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(categories[0].id);

  const handleSubmit = (event) => {
    event.preventDefault();

    const transaction = {
      id: crypto.randomUUID(),
      description,
      amount: Number(amount),
      category,
    }

    onAddTransaction(transaction);
    setDescription('');
    setAmount('');
    setCategory(categories[0].id);
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className='description-form'>
        <label>Description</label>
        <input
          type="text"
          placeholder="Almuerzo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className='description-form'>
        <label>Monto</label>
        <input
          type="number"
          placeholder="/S"
          min="0"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className='description-form-select'>
        <label>Categoría</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.label}</option>
          ))}
        </select>
      </div>

      <div className='btn-select'>
        <button type="submit">+ Agregar</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
