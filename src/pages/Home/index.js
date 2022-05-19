import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Conta de Luz',
        value: '210,00',
        date: '17/05/2022',
        type: 0    //despesa == 0 receita ==1
    },
    {
        id: 2,
        label: 'Pagamento',
        value: '5000,00',
        date: '19/05/2022',
        type: 1
    },
    {
        id: 3,
        label: 'Pix cliente',
        value: '3000,00',
        date: '20/05/2022',
        type: 1
    },
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Michel Marques" />
            <Balance saldo="11.000,00" despesas="5.000,00" />
            <Actions />
            <Text style={styles.title}>Últimas movimentações!!!</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14
    }
});
