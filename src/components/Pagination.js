import React from "react";

const Pagination = ({ant, sig, onPrevious, onNext}) => {

    const handlePrevious = () => {
        onPrevious()
    }

    const HandleNext = () => {
        onNext()
    }

    return(
        <nav>
            <ul className="pagination justify-content-center">
                {ant ? (
                    <li className="page-item">
                        <button className="page-link" onClick={handlePrevious}>Anterior</button>
                    </li>
                ):null}
                {sig ? (
                    <li className="page-item">
                        <button className="page-link" onClick={HandleNext}>Siguiente</button>
                    </li>
                ):null}
                
            </ul>
        </nav>
    )
}

export default Pagination