import React from 'react';
import { useState } from 'react';

interface IDimensions {
    width: number;
    height: number;
}

const useWindowDimensions = (): IDimensions => {
    const [match, setMatch] = useState<IDimensions>({width: 0, height: 0});

    React.useEffect(() => {
        function changeDimensions() {
            const dimensions: IDimensions = {} as IDimensions

            dimensions.width = window.innerWidth;
            dimensions.height = window.innerHeight;

            setMatch(dimensions);
        }

        changeDimensions();

        window.addEventListener('resize', changeDimensions);
        return ()=> {
            window.removeEventListener('resize', changeDimensions);
        };
    }, []);

    return match;
};

export default useWindowDimensions;
