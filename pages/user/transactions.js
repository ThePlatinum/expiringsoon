import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Header from '../../components/header';
import { Container, InputField, PuiSafeAreaView, Section, Seperator } from '../../style/global';
import DataTable, { COL_TYPES } from 'react-native-datatable-component';

export default function Transactions({ navigation }) {

  const [transactions, setTransactions] = useState([
    { id: 'TP00271', date: '02/12/2022', amount: 12000, status: 'completed' },
    { id: 'TP00268', date: '01/12/2022', amount: 1000, status: 'failed' },
    { id: 'TP00271', date: '02/12/2022', amount: 12000, status: 'completed' },
  ])

  return (
    <PuiSafeAreaView>
      <Container>
        <Header name='My Deals' navigation={navigation} />
        <Section pt={10} pb={15} >
          <InputField border='0005' placeholder='search' />
        </Section>
        <DataTable
          data={transactions}
          colNames={['id', 'amount', 'date', 'status']}
          // colSettings={[
          //   { name: 'payment_id', type: COL_TYPES.STRING, width: '40%' },
          //   { name: 'amount', type: COL_TYPES.INT, width: '30%' },
          //   { name: 'date', type: COL_TYPES.STRING, width: '30%' },
          //   { name: 'status', type: COL_TYPES.STRING, width: '30%' }
          // ]}
          noOfPages={transactions.length > 15 ? Math.floor(transactions.length/15) : 1}
          backgroundColor={'white'}
          headerLabelStyle={{ color: 'grey', fontSize: 14 }}
        />
        <Seperator v={10} />
      </Container>
    </PuiSafeAreaView>
  );
}
