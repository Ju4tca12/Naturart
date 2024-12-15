<?php
include_once "includes/header.php";
include "../conexion.php";

// Número de registros por página
$records_per_page = isset($_GET['records_per_page']) ? (int)$_GET['records_per_page'] : 10;

// Número de la página actual
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$offset = ($page - 1) * $records_per_page;

// Obtener y sanitizar parámetros de búsqueda
$search = isset($_GET['search']) ? mysqli_real_escape_string($conexion, $_GET['search']) : '';

// Construir la consulta base
$query = "SELECT a.id_apre, a.nomb_apre, a.apell_apre, a.correo, a.fecha_not, a.notificado, p.programa_nom, f.num_fich
          FROM aprendiz a
          JOIN ficha f ON a.num_fich = f.ficha_id
          JOIN programa p ON a.programa_nom = p.id_programa
          WHERE a.notificado = 1";


// Añadir condiciones de búsqueda
if (!empty($search)) {
    $query .= " AND (nomb_apre LIKE '%$search%' OR apell_apre LIKE '%$search%' OR correo LIKE '%$search%'
                 OR programa_nom LIKE '%$search%' OR num_fich LIKE '%$search%' OR fecha_not LIKE '%$search%')";
}

// Agregar limitación a la consulta
$query .= " LIMIT $offset, $records_per_page";

// Ejecutar consulta
$result = mysqli_query($conexion, $query);

if (!$result) {
    die('Error en la consulta: ' . mysqli_error($conexion));
}

// Consulta para contar el total de registros
$total_query = "SELECT COUNT(*) as total FROM aprendiz WHERE notificado = 1";
$total_result = mysqli_query($conexion, $total_query);
$total_row = mysqli_fetch_assoc($total_result);
$total_records = $total_row['total'];
$total_pages = ceil($total_records / $records_per_page);

?>

<div class="container-fluid">
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Aprendices Notificados</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre y Apellido</th>
                            <th>Correo</th>
                            <th>Programa</th>
                            <th>Ficha</th>
                            <th>Fecha de Notificación</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        if (mysqli_num_rows($result) > 0) {
                            while ($data = mysqli_fetch_assoc($result)) { ?>
                                <tr>
                                    <td><?php echo $data['id_apre']; ?></td>
                                    <td><?php echo $data['nomb_apre'] . ' ' . $data['apell_apre']; ?></td>
                                    <td><?php echo $data['correo']; ?></td>
                                    <td><?php echo $data['programa_nom']; ?></td>
                                    <td><?php echo $data['num_fich']; ?></td>
                                    <td><?php echo $data['fecha_not']; ?></td>
                                </tr>
                            <?php }
                        } else {
                            echo "<tr><td colspan='6'>No hay registros</td></tr>";
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<?php include_once "includes/footer.php"; ?>
