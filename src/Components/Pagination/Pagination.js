import './Pagination.css';

const Pagination = ({totalProducts, productsPerPage,setCurrentPage,currentPage}) => {
    let pages = [];

    for(let i = 1; i<=Math.ceil(totalProducts/productsPerPage); i++){
        pages.push(i);
    }
    return ( 
        <div className='pagination-buttons'>
            {pages.map((page,index)=>
                <button 
                    className={page === currentPage ? "active" : ""}
                    key={index} 
                    onClick={()=>{setCurrentPage(page)}
                }>
                    {page}
                </button>)
            }
        </div>
     );
}
 
export default Pagination;
 