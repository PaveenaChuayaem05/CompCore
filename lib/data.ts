import bcrypt from 'bcryptjs'
const data = {
  users: [
    {
      name: 'paveena',
      email: 'andee@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'andee',
      email: 'paveena@gmail.com',
      password: bcrypt.hashSync('1234567'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Corsair 4000D Airflow',
      price: 104.99,
      brand: 'Corsair', // Changed brand from "NVIDIA" to "Corsair" (correct brand)
      slug: 'corsair-4000d-airflow', // Slug should be in lowercase and unique
      category: 'cases', // This field is required
      image:
        'https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg',
      countInStock: 1000000, // This field is required
      description: 'A high-performance case designed for airflow.', // This field is required
      rating: 4.8, // Optional: Can include ratings
      numReviews: 100, // Optional: Can include number of reviews
      isFeatured: false, // Optional field
      banner: null, // Optional field, can be null
      colors: ['Black'], // Optional: You can add color options here
      sizes: ['ATX'], // Optional: If there are size options
      type: 'ATX Mid Tower', // Non-schema field but fine for extra data
      color: 'Black',
      psu: null,
      side_panel: 'Tinted Tempered Glass',
      internal_35_bays: 2,
    },
    {
      name: 'NZXT H5 Flow',
      price: 94.99,
      brand: 'NZXT', // Correct brand for NZXT
      slug: 'nzxt-h5-flow', // Slug in lowercase
      category: 'cases', // Required field
      image:
        'https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg',
      countInStock: 100000000, // Required field
      description: 'A compact case with efficient airflow.', // Required field
      rating: 4.5, // Optional
      numReviews: 50, // Optional
      isFeatured: false, // Optional
      banner: null, // Optional
      colors: ['Black'], // Optional
      sizes: ['ATX'], // Optional
      type: 'ATX Mid Tower',
      color: 'Black',
      psu: null,
      side_panel: 'Tempered Glass',
      internal_35_bays: 1,
    },
    {
      name: 'NZXT H9 Flow',
      price: 159.99,
      brand: 'NZXT', // Correct brand for NZXT
      slug: 'nzxt-h9-flow', // Slug in lowercase
      category: 'cases', // Required field
      image:
        'https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg',
      countInStock: 10000000, // Required field
      description: 'A premium case with large airflow support.', // Required field
      rating: 4.7, // Optional
      numReviews: 80, // Optional
      isFeatured: false, // Optional
      banner: null, // Optional
      colors: ['White'], // Optional
      sizes: ['ATX'], // Optional
      type: 'ATX Mid Tower',
      color: 'White',
      psu: null,
      side_panel: 'Tempered Glass',
      external_volume: 66.9,
    },
  ],
}

export default data
