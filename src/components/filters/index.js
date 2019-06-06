import React, { useContext } from 'react';

import { FilterContext } from '../../context/filter';

const Filters = () => {
  const { dispatch } = useContext(FilterContext);

  return (
    <>
      <div className="filters">
        <div>
          <label>
            FF Funded
          <input type="checkbox" onChange={(e) => {
              dispatch({ type: "SET_FF_FUNDED_FILTER", payload: e.target.checked })
            }} />
          </label>
        </div>
        <div>
          <label>
            POSTCODE
          <input type="text" onChange={(e) => {
              dispatch({ type: "SET_POSTCODE_FILTER", payload: e.target.value })
            }} />
          </label>
        </div>
      </div>
    </>
  )
}

export default Filters;
