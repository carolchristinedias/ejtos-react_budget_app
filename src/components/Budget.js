import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, Location } = useContext(AppContext);
    const [Newbudget, setBudget] = useState('');
    const addExpenses = expenses.reduce((total, item) => {
     return (total += item.cost);
    }, 0);

    if(Newbudget > 20000) {
        alert("The Budget value cannot exceed 20000");
        setBudget("");
        return;
    }

    if(Newbudget < addExpenses) {
       alert("The Budget value cannot be less than the Spending");
       setBudget("19999");
     return;
    }

    return (
        <div className='alert alert-secondary'>
             <span>Budget:{Location} </span>
             <input
                        required='required'
                        type='number'
                        id='budget'
                        defaultValue={budget}
                        value={Newbudget}
                        style={{ marginLeft: '1rem' , size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>
            
        </div>

    );
};
export default Budget;
