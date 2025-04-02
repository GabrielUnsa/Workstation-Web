import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { UserSplit } from './../buttons/split/user';
import './navbar.css';

export const Navbar = () => {
  const items = [
    {
      label: 'Incio',
      icon: 'pi pi-fw pi-home'
    },
    {
      label: 'Registrar',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'Nuevo',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Ingreso',
              icon: 'pi pi-fw pi-sign-in'
            },
            {
              label: 'Movimiento',
              icon: 'pi pi-fw pi-send'
            }
          ]
        },
        {
          label: 'Modificación',
          icon: 'pi pi-fw pi-pencil'
        },
        {
          label: 'Eliminación',
          icon: 'pi pi-fw pi-eraser'
        }
      ]
    },
    {
      label: 'Informes',
      icon: 'pi pi-fw pi-book',
      items: [
        {
          label: 'Crear Informe',
          icon: 'pi pi-fw pi-clone',
          items: [
            {
              label: 'Ultimos Movimientos',
              icon: 'pi pi-fw pi-stopwatch'
            },
            {
              label: 'Personal',
              icon: 'pi pi-fw pi-user'
            },
            {
              label: 'Expediente',
              icon: 'pi pi-fw pi-folder'
            },
            {
              label: 'Notas',
              icon: 'pi pi-fw pi-copy'
            },
          ]
        },
        {
          label: 'Visualizar',
          icon: 'pi pi-fw pi-eye',
          items: [
            {
              label: 'Ultimos',
              icon: 'pi pi-fw pi-stopwatch'
            },
            {
              label: 'Historial',
              icon: 'pi pi-fw pi-history'
            },
          ]
        },
        {
          label: 'Buscar',
          icon: 'pi pi-fw pi-search'
        }
      ]
    },
    {
      label: 'Busqueda Avanzada',
      icon: 'pi pi-fw pi-filter'
    }
  ];
  
  const start = <h3> SMEP </h3>;
  const end = <div> {/* <InputText placeholder="Search" type="text"/> */} <UserSplit/> </div>
  return(
    <div>
      <div className="card">
        <Menubar className="navBar" model={items} start={start} end={end} />
      </div>
    </div>
  );
}
