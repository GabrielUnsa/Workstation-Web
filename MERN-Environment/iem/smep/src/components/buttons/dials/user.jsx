import { SpeedDial } from 'primereact/speeddial';
import './user.css';

export const UserDial = () => {
  
  const items = [
    {
      label: 'Editar Perfil',
      icon: 'pi pi-fw pi-user-edit',
      command: () => {
        window.location.href = '#'
      }
    },
    {
      label: 'Cambiar Contraseña',
      icon: 'pi pi-fw pi-pencil',
      command: () => {
        window.location.href = '#'
      }
    },
    {
      label: 'Salir',
      icon: 'pi pi-fw pi-sign-out',
      command: () => {
        window.location.href = '#'
      }
    }
  ];

  return(
    <div className="card speeddial-linear px-3">
      <SpeedDial model={items} direction="down" icon="pi pi-fw pi-user"/>
    </div>
  );
}
