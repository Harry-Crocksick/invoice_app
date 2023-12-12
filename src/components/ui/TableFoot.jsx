const TableFoot = ({ data }) => {
  return (
    <tfoot className="bg-slate-100">
      <tr>
        <td
          className="px-6 py-4 text-center whitespace-nowrap text-lg font-semibold text-gray-800 dark:text-gray-200"
          colSpan={4}
        >
          Total
        </td>
        <td
          // colSpan={2}
          className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"
        >
          {data.reduce(
            (prev, current) => prev + current.price * current.quantity,
            0
          )}
        </td>
        <td></td>
      </tr>
    </tfoot>
  );
};

export default TableFoot;
