import TableLetter from "./TabelLetter"

const TableCell = ({ word }) => {

    return (
        <td>{Array.from(word).map((letter, index) => (
            <TableLetter key={index} letter={letter} index={index} />
        ))}</td>
    )
}

export default TableCell
