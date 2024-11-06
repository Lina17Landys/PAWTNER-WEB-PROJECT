import BarDash from "../../components/BarDashboard/nav-dash";
import MapComponent from "../../components/MapComponent/MapComponent"; // Nueva ruta

function ReportSystem() {
  return (
    <>
      <BarDash />
      <div style={{ padding: '20px' }}>
        <h2>Sistema de Reporte</h2>
        <p>Haz clic en el mapa para agregar marcadores que representen ubicaciones de interés en Cali, Colombia.</p>
        <MapComponent /> {/* Mostrar el mapa */}
      </div>
    </>
  );
}

export default ReportSystem;
