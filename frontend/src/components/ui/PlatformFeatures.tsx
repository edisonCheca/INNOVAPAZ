import React from 'react';
import DisplayCard from '../common/DisplayCard';
import './PlatformFeatures.css';
import iconventas from '../../assets/images/iconventas.png';
import iconcompras from '../../assets/images/iconcompras.png';
import iconinventario from '../../assets/images/iconinventarios.png';
import iconreportes from '../../assets/images/iconreportes.png';

const PlatformFeatures: React.FC = () => (
  <section>
    <div className="features-grid">
      <DisplayCard
        icon={<img src={iconventas} />}
        title="Gestión de Ventas"
        iconBg="radial-gradient(circle, #DBD56E 0%, #FC7753 100%)"
      >
        El sistema permite registrar ventas rápidas, gestionar clientes internos, seguir
        transacciones por producto y generar cotizaciones con seguimiento, además de reportes por
        período, vendedor, producto y cliente.
      </DisplayCard>
      <DisplayCard
        icon={<img src={iconcompras} />}
        title="Gestión de Compras"
        iconBg="linear-gradient(to right, #66D7D1 21%, #403D58 100%)"
      >
        El sistema permite registrar ventas rápidas, gestionar clientes internos, seguir
        transacciones por producto y generar cotizaciones con seguimiento, además de reportes por
        período, vendedor, producto y cliente.
      </DisplayCard>
      <DisplayCard
        icon={<img src={iconinventario} />}
        title="Gestión de Inventarios"
        iconBg="radial-gradient(circle, #DBD56E 0%, #FC7753 100%)"
      >
        El sistema permite registrar ventas rápidas, gestionar clientes internos, seguir
        transacciones por producto y generar cotizaciones con seguimiento, además de reportes por
        período, vendedor, producto y cliente.
      </DisplayCard>
      <DisplayCard
        icon={<img src={iconreportes} />}
        title="Gestión de Reportes"
        iconBg="linear-gradient(to right, #66D7D1 21%, #403D58 100%)"
      >
        El sistema permite registrar ventas rápidas, gestionar clientes internos, seguir
        transacciones por producto y generar cotizaciones con seguimiento, además de reportes por
        período, vendedor, producto y cliente.
      </DisplayCard>
    </div>
  </section>
);

export default PlatformFeatures;
