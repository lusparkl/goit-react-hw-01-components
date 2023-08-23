import { Transaction } from "components/transaction/Transaction"
import { Table } from "./TransactionsTable.styled"

export const TransactionsTable = ({ transactionsInfo }) => {
  return (
      <Table>
          <thead>
              <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Currency</th>
              </tr>
          </thead>

          <tbody>
              {transactionsInfo.map((transactionInfo => <Transaction key={transactionInfo.id} transactionInfo={transactionInfo}></Transaction>))}
          </tbody>
      </Table>
  )
}
