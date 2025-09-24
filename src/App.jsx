import { useState } from "react";
import { CheckBox } from "./components/form/CheckBox";
import { Input } from "./components/form/Input";
import { ProductCategoryRow } from "./components/products/ProductCategoryRow";
import { ProductRow } from "./components/products/productRow";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [search, setSearch] = useState('')
  const visibleProducts = PRODUCTS.filter(product => {
    if (showStockedOnly && !product.stocked) {
      return false
    }

    if (search && !product.name.includes(search)){
      return false
    }

    return true
  })

  return (
    <div className="container my-3">
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        showStockedOnly={showStockedOnly}
        onShowStockedOnlyChange={setShowStockedOnly}
      />
      <ProductTable products={visibleProducts} />
    </div>
  );
}

function SearchBar({ showStockedOnly, onShowStockedOnlyChange, search, onSearchChange }) {
  return (
    <div>
      <div className="mb-3">
        <Input value={search} onChange={onSearchChange} placeholder="Rechercher..." />
        <CheckBox
          id="stocked"
          checked={showStockedOnly}
          onChange={onShowStockedOnlyChange}
          label="N'afficher que les produits en stock"
        />
      </div>
    </div>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} name={product.category} />
      );
    }

    lastCategory = product.category;
    rows.push(<ProductRow key={product.name} product={product} />);
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default App;
