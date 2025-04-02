import { SplitButton } from 'primereact/splitbutton';
import './user.css';

export const UserSplit = () => {
  
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

  return (
    <div className="card">
      <SplitButton model={items} className="p-button-text mr-2 mb-2 dropdownHide"></SplitButton>
    </div>
  );
}
