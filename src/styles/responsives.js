const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  ipadPro: '1024px',
  reduction: '1180px',
  maxlaptop: '1270px',  //below this point
  minlaptop: '1271px',  //above this point
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  ipadPro: `(max-width: ${size.ipadPro})`,
  reduction: `(max-width: ${size.reduction})`,
  maxlaptop: `(max-width: ${size.maxlaptop})`,
  minlaptop: `(min-width: ${size.minlaptop})`
};
