const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>45</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>25/07/2021</td>
                        <td>Bruce Wayne</td>
                        <td>39</td>
                        <td>55</td>
                        <td>20817.00</td>
                    </tr>
                    <tr>
                        <td>09/09/2021</td>
                        <td>Clark Kent</td>
                        <td>19</td>
                        <td>35</td>
                        <td>17000.00</td>
                    </tr>
                </tbody>
            </table>
        </div>


    );
}

export default DataTable;