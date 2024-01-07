import React from "react";
import AppLayout from "../../../layout/AppLayout";
import ProductTopNav from "../../../containers/transactions/productTopNav";
import ProductTable from "../../../containers/transactions/productTable";

const ProductView = () => (
  <div className='servicesview-container'>
    <ProductTopNav />
    <ProductTable />
  </div>
);

function Product() {
  return (
    <AppLayout
      url={"/transactions/product"}
      pageName='Transactions'
      children={<ProductView />}
    />
  );
}

export default Product;
