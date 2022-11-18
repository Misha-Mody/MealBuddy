// AUTHOR: HARSHIT GAJJAR
import "./css/pizza_table_row.css";

function PizzaTableRow({ data, value, setValue }) {
  return (
    <tbody className="pizza_tb_data">
      {data.map((e, index) => {
        console.log("e is", e);
        return (
          <tr key={e.bid} onClick={() => setValue(e)}>
            <td className={index === value.bid ? "crust_selected" : ""}>
              <div>
                <div className="crust_price">
                  <p>{e.name}</p>
                  <p>${e.price}</p>
                </div>
                <p className="crust_calories">{e.calories} Cal</p>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default PizzaTableRow;
