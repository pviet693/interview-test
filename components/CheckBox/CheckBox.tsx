import React from "react";
import { Checkbox } from 'primereact/checkbox';

type Props = {
    checked: boolean,
    onChange: (e: any) => void
}

const CheckBox: React.FC<Props> = ({checked, onChange}) => {
    return (
        <div className="custom-checkbox-primereact">
            <Checkbox
                checked={checked}
                onChange={(e) => onChange(e)}
            />
        </div>
    );
};

export default CheckBox;