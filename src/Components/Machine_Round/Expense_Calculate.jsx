import React, { useState } from "react";

const Expense_Calculate = () => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!expenseName.trim() || !expenseAmount || parseInt(expenseAmount) <= 0) {
      alert("enter the valid values");
      return;
    }

    const expObj = {
      id: Date.now(),
      name: expenseName,
      amount: parseInt(expenseAmount),
    };

    setExpenses([...expenses, expObj]);
    setExpenseName("");
    setExpenseAmount("");
  };

  const totalExpenseAmount = expenses.reduce((acc, curr) => {
    console.log(curr, acc);
    return (acc += curr.amount);
  }, 0);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Expense name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Expense amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
          <button type="submit"> Add </button>
        </form>
      </div>

      {/* table section */}

      <table>
        <thead>
          <tr>
            <th>Expense Name</th>
            <th>Expense Value</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 &&
            expenses.map((obj) => (
              <tr key={obj.id}>
                <td>{obj.name} </td>
                <td>{obj.amount} </td>
              </tr>
            ))}
        </tbody>

        <tfoot>
          <tr>
            <td>Total Amount</td>
            <td>{totalExpenseAmount}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Expense_Calculate;

// import React, { useState } from "react";

// const Expense_Calculate = () => {
//   const [expenses, setExpenses] = useState([]);

//   const [expenseName, setExpenseName] = useState("");
//   const [expenseValue, setExpenseValue] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!expenseName.trim() || !expenseValue || parseFloat(expenseValue) <= 0) {
//       alert("Please enter a valid name and positive amount.");
//       return;
//     }

//     const newExpense = {
//       id: Date.now(),
//       name: expenseName,
//       value: parseFloat(expenseValue),
//     };

//     setExpenses([...expenses, newExpense]);

//     setExpenseName("");
//     setExpenseValue("");
//   };

//   const totalAmount = expenses.reduce((acc, current) => acc + current.value, 0);

//   return (
//     <div
//       style={{
//         maxWidth: "600px",
//         margin: "30px auto",
//         fontFamily: "Arial, sans-serif",
//         padding: "20px",
//       }}
//     >
//       <h2>Expense Tracker</h2>

//       {/* --- FORM SECTION --- */}
//       <form
//         onSubmit={handleSubmit}
//         style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
//       >
//         <input
//           type="text"
//           placeholder="Expense Name (e.g., Coffee)"
//           value={expenseName}
//           onChange={(e) => setExpenseName(e.target.value)}
//           style={{
//             flex: 2,
//             padding: "8px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <input
//           type="number"
//           placeholder="Value"
//           value={expenseValue}
//           onChange={(e) => setExpenseValue(e.target.value)}
//           style={{
//             flex: 1,
//             padding: "8px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <button
//           type="submit"
//           style={{
//             padding: "8px 15px",
//             background: "#28a745",
//             color: "#fff",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Add
//         </button>
//       </form>

//       {/* --- TABLE SECTION --- */}
//       <table
//         style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}
//       >
//         <thead>
//           <tr
//             style={{
//               backgroundColor: "#f2f2f2",
//               borderBottom: "2px solid #ddd",
//             }}
//           >
//             <th style={{ padding: "10px" }}>Expense Name</th>
//             <th style={{ padding: "10px" }}>Value</th>
//           </tr>
//         </thead>
//         <tbody>
//           {expenses.length === 0 ? (
//             <tr>
//               <td
//                 colSpan="2"
//                 style={{ padding: "15px", textAlign: "center", color: "#777" }}
//               >
//                 No expenses added yet!
//               </td>
//             </tr>
//           ) : (
//             expenses.map((expense) => (
//               <tr key={expense.id} style={{ borderBottom: "1px solid #ddd" }}>
//                 <td style={{ padding: "10px" }}>{expense.name}</td>
//                 <td style={{ padding: "10px" }}>${expense.value.toFixed(2)}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//         {/* --- TOTAL FOOTER SECTION --- */}
//         {expenses.length > 0 && (
//           <tfoot>
//             <tr style={{ fontWeight: "bold", borderTop: "2px solid #000" }}>
//               <td style={{ padding: "10px" }}>Total Amount:</td>
//               <td style={{ padding: "10px", color: "#dc3545" }}>
//                 ${totalAmount.toFixed(2)}
//               </td>
//             </tr>
//           </tfoot>
//         )}
//       </table>
//     </div>
//   );
// };
// export default Expense_Calculate;
