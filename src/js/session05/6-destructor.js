const abhi = {
  fname: 'abhi',
  lname: 'das',
  address: {
    home: {
      flatNo: 1903
    },
    parking: {
      slotNo: '32HD'
    }
  }
}

const {
  home: {flatNo:f },
  parking: {slotNo:s },
} = abhi.address

console.log(f);
console.log(s);