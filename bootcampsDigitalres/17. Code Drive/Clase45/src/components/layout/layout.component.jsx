import AppMenu from '../app-menu/app-menu-layout/app-menu-layout.component';

export default function Layout(props)
{
    return (
        <div>
            <AppMenu />
            {props.children}
            <footer>
                Pie de página
            </footer>
        </div>
    );
}