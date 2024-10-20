import { useEffect } from 'react';
import StockBuildingMaterials from './projectComponents/StockBuildingMaterials';
import MultiShop from './projectComponents/Multishop';
import CommonShare from './projectComponents/CommonShare'

const Project = ({ isModalOpen, handleModalToggle ,ProjectName}) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    })

    if (isModalOpen) {
        if(ProjectName === 'Stock-Building-materials'){
             return <StockBuildingMaterials handleModalToggle={handleModalToggle} />
        }
        else if(ProjectName === 'Multishop'){
            return <MultiShop handleModalToggle={handleModalToggle} />
        }else if(ProjectName === 'CommonShare'){
            return <CommonShare handleModalToggle={handleModalToggle} />
        }
    }
}
export default Project