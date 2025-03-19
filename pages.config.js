import { resolve } from 'path';

const pages = [
  {
    name: 'index',
    path: resolve(__dirname, 'index.html'),
  },
  {
    name: 'factory',
    path: resolve(__dirname, 'factory.html'),
  },
  {
    name: 'builder',
    path: resolve(__dirname, 'builder.html'),
  },
  {
    name: 'abstract-factory',
    path: resolve(__dirname, 'abstract-factory.html'),
  },
];

export default pages;
