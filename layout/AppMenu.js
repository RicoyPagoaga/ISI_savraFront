import getConfig from 'next/config';
import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const model = [
        {
            label: 'Inicio',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard/' }]
        },
        {
            label: 'Ambitos',
            items: [
                {
                    label: 'Tipo de Documentos',
                    icon: 'pi pi-fw pi-id-card',
                    to: '/TipoDocumento/'
                },
                {
                    label: 'Empleados',
                    icon: 'pi pi-fw pi-user',
                    to: '/Empleados/'
                },
                {
                    label: 'Clientes',
                    icon: 'pi pi-fw pi-users',
                    to: '/clientes/'
                },
                {
                    label: 'Países',
                    icon: 'pi pi-fw pi-globe',
                    to: '/paises/'
                },
                {
                    label: 'Proveedores',
                    icon: 'pi pi-fw pi-user',
                    to: '/proveedores/'
                },
                {
                    label: 'Cargos',
                    icon: 'pi pi-fw pi-tablet',
                    to: '/cargos/'
                },
                {
                    label: 'usuarios',
                    icon: 'pi pi-fw pi-user',
                    to: '/usuarios/'
                },

            ]
        },
        {
            label: 'Utilidades',
            icon: 'pi pi-fw pi-briefcase',
            to: '/pages',
            items: [
                {
                    label: 'Calendario',
                    icon: 'pi pi-fw pi-calendar',
                    to: ''
                }
            ] 
        }
        
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
