import css from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={css.listItem}>
            <td className={css.item}>{item.type}</td>
            <td className={css.item}>{item.amount}</td>
            <td className={css.item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
