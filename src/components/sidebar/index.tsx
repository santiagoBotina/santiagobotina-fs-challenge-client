import type { VIEW } from "@utils/app.constants.ts";
import { useLocation } from 'react-router-dom';

interface SideBarProps {
    viewsAvailable: VIEW[];
}

export const SideBar = ({viewsAvailable}: SideBarProps) => {
    const { pathname } = useLocation();

    return (
        <div className="w-64 bg-indigo-700 p-6 flex flex-col gap-4">
            <h1 className="text-white text-xl font-bold mb-6">Shortly - LTV</h1>
            {viewsAvailable.map(({path, label}) => (
                <a
                    style={
                        {
                            textDecoration: 'none',
                            color: 'white',
                        }
                    }
                    key={label}
                    className={
                        `text-left py-2 px-4 rounded hover:bg-indigo-600
                         ${path === pathname ? 'bg-indigo-600' : ''}`
                    }
                    href={path}
                >
                    {label.charAt(0).toUpperCase() + label.slice(1)}
                </a>
            ))}
        </div>
    )
}
