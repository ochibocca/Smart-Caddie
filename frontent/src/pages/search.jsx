


import React from 'react';
import { useState } from 'react';

function Search() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');
  const caddie = [
    {
      id: 1,
      firstName: "Reagan",
      lastName: "ochieng",
      email: "regan.oo-is.nairobi@stillirisengo.org",
      phone: "07104157343"
    },
    {
      id: 2, 
      firstName: "Mickey",
      lastName: "Omondi",
      email: "mickey@gmail.com",
      phone: "098765436543"
    },
    {
      id: 3, 
      firstName: "Sebastian",
      lastName: "Yongo",
      email: "seabstian@gmail.com",
      phone: "1234567890"
    },
  ];

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCaddie = caddie.filter((caddieRecord) => {
    const searchTerm = search.toLowerCase();
    if (searchTerm === '') {
      return true;
    }else
    return (
      caddieRecord.firstName.toLowerCase().includes(searchTerm) ||
      caddieRecord.lastName.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div>
      <input 
        type='text'
        placeholder='search'
        value={search} 
        onChange={handleSearch}
      />
        {filteredCaddie.map((caddieRecord) => (
        <div key={caddieRecord.id} > 
          <div>
              <strong>Name </strong>
            {caddieRecord.firstName} 
          </div>
            <div>
                              <strong>Email </strong>
          {caddieRecord.email} 
          </div> 
          <div>
                            <strong>Phone </strong>
          {caddieRecord.phone}
          </div>
          </div>
        ))}
    </div>
  );
}

export default Search;


