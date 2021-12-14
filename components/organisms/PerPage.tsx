import { useState } from "react";
import Flex from "../atoms/Flex.styled";
import PerPageForm from "../molecules/PerPageForm";
import SelectPerPage from "../molecules/SelectPerPage";



const PerPage: React.FC = () => {

    const [ showInput, setShowInput ] = useState<boolean>(false);

    const PerPageInput = () => (
        showInput 
        ?
            <PerPageForm 
                setCustomInput={setShowInput}
            />
        :
            <SelectPerPage 
                setShowInput={setShowInput}
            />
    );

    return (
        <Flex alignItems="center">
            <PerPageInput />
        </Flex>
    )
}

export default PerPage;