function retornalista(final = 10) {
    const lista = []
    for (let index = 1; index <= final; index++) {
        lista.push(<span>{index},</span>)   
    }
    return lista
}


export default function retornalistafinal() {
    return (
            <div>
                 {retornalista(11)}
            </div>
    )
}