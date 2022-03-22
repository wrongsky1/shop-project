import { useContext, useEffect } from 'react'
import {ShopContext} from '../context/context'

function Alert() {
    const { alertName: name = '', closeAlert} = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId)
        };
       
    }, [name]);

    return (
        <div id="toast-container">
            <div className="toast panning">{name} добавлен в корзину</div>
        </div>
    )
}

export {Alert}