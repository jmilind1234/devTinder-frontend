import type { ReactNode } from "react";
import "./_box-container.scss";

function BoxContainer({children}:{children: ReactNode}){
    return(
        <div className="box-container">
            {children}
        </div>
    )
}

export default BoxContainer;