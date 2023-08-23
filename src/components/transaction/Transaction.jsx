export const Transaction = ({transactionInfo}) => {
  return (
      <tr>
          <td>{transactionInfo.type}</td>
          <td>{transactionInfo.amount}</td>
          <td>{transactionInfo.currency}</td>
      </tr>
  )
}
