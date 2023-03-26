
export type MenuProduct = {
    /*
    * Product name
    */
    name: string;
    /*
    * Product price
    */
    price: number;
  }
  
  export type MenuSection = {
    /*
    * Course name
    */
    name: string;
    /*
    * Course products
    */
    products: MenuProduct[];
  }
  