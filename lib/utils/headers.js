const headers = [
  'Row ID',
  'Order ID',
  'Order Date',
  'Ship Date',
  'Ship Mode',
  'Customer ID',
  'Customer Name',
  'Segment',
  'Country',
  'City',
  'State',
  'Postal Code',
  'Region',
  'Product ID',
  'Category',
  'Sub-Category',
  'Product Name',
  'Sales',
  'Quantity',
  'Discount',
  'Profit',
];

export function isHeaderValid(constHeader, headers) {
  if (headers.every((r) => constHeader.includes(r))) {
    return true;
  } else {
    return false;
  }
}

export default headers;
