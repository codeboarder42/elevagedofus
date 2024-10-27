const columns = [
  "Nom",
  "Couleur",
  "Sexe",
  "Génération",
  "Famille",
  "Reproduction",
  "Statut",
];

const rows = [
  {
    nom: "Michel",
    couleur: "Bleu",
    sexe: "F",
    generation: "2e",
    famille: "Chatso",
    reproduction: "3/4",
    statut: "N/A",
  },
  {
    nom: "August",
    couleur: "Bleu",
    sexe: "M",
    generation: "2e",
    famille: "Chatso",
    reproduction: "3/4",
    statut: "N/A",
  },
  {
    nom: "Merlan",
    couleur: "Bleu",
    sexe: "F",
    generation: "2e",
    famille: "Chatso",
    reproduction: "3/4",
    statut: "N/A",
  },
  {
    nom: "Plou",
    couleur: "Bleu",
    sexe: "F",
    generation: "2e",
    famille: "Chatso",
    reproduction: "3/4",
    statut: "N/A",
  },
];

type CellProps = {
  key: string;
  className: string;
  scope?: string;
};

export default function MountTable() {
  return (
    <table className="table-auto border-separate border-spacing-0">
      <thead className="rounded-lg">
        <tr>
          {columns.map((column, columnIndex, colArray) => (
            <th
              key={`col-${columnIndex}`}
              className={`
                ${columnIndex === 0 ? "rounded-tl-lg " : ""}
                ${columnIndex === colArray.length - 1 ? "rounded-tr-lg " : ""}
              border-sky-950 p-4 bg-amber-400 text-amber-50`}
              scope="col"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex, rowArray) => (
          <tr key={`row-${rowIndex}`}>
            {Object.entries(row).map(
              ([key, value], propIndex, entriesArray) => {
                const CellTag = propIndex === 0 ? "th" : "td";
                const cellStyles = [
                  "p-4",
                  propIndex === 0 && rowIndex === rowArray.length - 1
                    ? "rounded-bl-lg"
                    : "",
                  propIndex === entriesArray.length - 1 &&
                  rowIndex === rowArray.length - 1
                    ? "rounded-br-lg"
                    : "",
                  rowIndex % 2 === 0 ? "bg-neutral-100" : "bg-white",
                ]
                  .filter(Boolean)
                  .join(" ");

                // Créer les props conditionnellement
                const cellProps: CellProps = {
                  key: `cell-${rowIndex}-${key}`,
                  className: `${cellStyles}`,
                };

                // Ajouter scope uniquement si c'est un th
                if (propIndex === 0) {
                  cellProps.scope = "row";
                }

                return <CellTag {...cellProps}>{value}</CellTag>;
              }
            )}
          </tr>
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}
