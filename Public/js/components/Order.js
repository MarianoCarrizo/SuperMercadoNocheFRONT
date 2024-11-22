export const Order = (clienteId, clienteDni, clienteNombre, fecha, total) => `
    <tr>
        <td class="text-center">${clienteId}</td>      <!-- Cliente ID -->
        <td class="text-center">${clienteDni}</td>     <!-- Cliente DNI -->
        <td class="text-center">${clienteNombre}</td>  <!-- Cliente Nombre -->
        <td class="text-center">${fecha}</td>          <!-- Fecha -->
        <td class="text-center">$${total}</td>         <!-- Total -->
    </tr>
`;
