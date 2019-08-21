/**
 * @param{org.salecar.Venda} venda
 * @transaction 
 */

async function venda(contrato){
    const carro = contrato.carro;
    const preco = carro.preco;
    const terms = contrato.vendaId;
    const vendedor = contrato.vendedor;
    const comprador = contrato.comprador;

    comprador.quantia -= preco;
    vendedor.quantia += preco;

    const compradorRegist = await getParticipantRegistry('org.salecar.Comprador');
    await compradorRegist.update(comprador);

    const vendedorRegist = await getParticipantRegistry('org.salecar.Vendedor');
    await compradorRegist.update(vendedor);
}