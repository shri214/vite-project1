import React, { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const data = [
    {
      department: "customer_service",
      sub_departments: ["support", "customer_success"],
    },
    {
      department: "design",
      sub_departments: ["graphic_design", "product_design", "web_design"],
    },
  ];

export default function IndeterminateCheckbox() {
  const [checked, setChecked] = useState(data.map(() => [false, false, false, false]));

  const handleParentChange = (parentIndex:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = [...checked];
    newChecked[parentIndex] = newChecked[parentIndex].map(() => event.target.checked);
    setChecked(newChecked);
  };

  const handleChildChange = (parentIndex:number, childIndex:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = [...checked];
    newChecked[parentIndex][childIndex + 1] = event.target.checked;
    newChecked[parentIndex][0] = newChecked[parentIndex].slice(1).every(Boolean);
    setChecked(newChecked);
  };

  

  const parentAndChildren = data.map((parent, parentIndex) => (
    <div key={parent.department}>
      <FormControlLabel
        label={parent.department}
        control={
          <Checkbox
            checked={checked[parentIndex][0]}
            indeterminate={checked[parentIndex].slice(1).some(Boolean) && !checked[parentIndex].slice(1).every(Boolean)}
            onChange={(event) => handleParentChange(parentIndex, event)}
          />
        }
      />
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        {parent.sub_departments.map((child, childIndex) => (
          <FormControlLabel
            key={child}
            label={child}
            control={
              <Checkbox
                checked={checked[parentIndex][0] || checked[parentIndex][childIndex + 1]}
                onChange={(event) =>
                  handleChildChange(parentIndex, childIndex, event)
                }
              />
            }
          />
        ))}
      </Box>
    </div>
  ));

  return <div style={{backgroundColor:'black', color:'white'}}>{parentAndChildren}</div>;
}
