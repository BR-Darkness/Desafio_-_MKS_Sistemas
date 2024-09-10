import * as S from "./styled";

export function WarningModal() {
    
    function handleClick() {
        document.querySelector("#WarningModal")?.remove();
    }

    return (
        <S.WarningModal id="WarningModal">
            <S.Modal>
                <div>
                    <h1>Aviso:</h1>
                    <button onClick={() => handleClick()}>X</button>
                </div>

                <p>Esta aplicação foi desenvolvida como um desafio de código para vaga de desenvolvedor front-end tendo tido como prazo limite 3 dias para sua execução.</p>

                <p>Vaga está que muito provavelmente se tratou de uma <b>vaga falsa</b> dado a relatos de outros participantes que realizaram o mesmo teste e dado a empresa ter apagado todas as suas contas e repositórios após um período, devido a estes motivos a aplicação encontra-se atualmente em estado inoperante pois junto a exclusão das páginas da empresa a API pública ao qual eram requisitados os produtos foi tirada do ar.</p>

                <p>Por estas razoes este projeto estará utilizando uma API estática para estar exibindo suas informações como forma de contornar os problemas gerados pela exclusão da API original do desafio.</p>

                <p><b>Este projeto continuará no ar apenas como aviso/legado.</b></p>
            </S.Modal>
        </S.WarningModal>
    )
}