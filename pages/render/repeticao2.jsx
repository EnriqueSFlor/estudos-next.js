import listaProduto from '../../../data/listaProduto'


export default function repeticao2() {

    function renderizarLinhas() {
        return listaProduto.map(function(produto) {
            return (
                <tr key={produto.id}>
                    <td style={borda} >{produto.id}</td>
                    <td style={borda}>{produto.nome}</td>
                    <td style={borda}>{produto.preco}</td>
                </tr>
            )
    })
    }

    const borda = {
        border: "1px solid #000",
       }

    return (
        <div>
            <table style={borda}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                {renderizarLinhas()}
            </tbody>
            </table>
           
        </div>
    )
    }