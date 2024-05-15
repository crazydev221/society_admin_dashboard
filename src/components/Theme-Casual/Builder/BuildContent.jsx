import React from 'react'

const BuildContent = ({className, children, dataAction, active, style, ...rest}) => {
    return (
        <a className={`btn-toggle-content content-select ${active ? 'active' : ''} ${className}`} style={style} 
            data-action={dataAction} href="#" {...rest}>
            {children}
        </a>
    )
}

export default BuildContent
