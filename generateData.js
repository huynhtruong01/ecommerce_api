const fs = require('fs')
const casual = require('casual')
const newArrivalProduct = require('./products/productsNewArrivals')
const newArrivalsCategory = require('./categories/categoryNewArrivals')
const bagsProduct = require('./products/productsBag')
const bagsCategory = require('./categories/categoryBags')
const accessoriesProduct = require('./products/productsAccessories')
const accessoriesCategory = require('./categories/categoryAccessories')
const clothingProduct = require('./products/productsClothing')
const clothingCategory = require('./categories/categoryClothing')
const sneakerProduct = require('./products/productsSneaker.js')

const generateProducts = (products) => {
  const mapProducts = products.map((product) => {
    return {
      id: casual.uuid,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      isLike: false,
      ...product,
    }
  })

  return mapProducts
}

const generateCategories = (categories) => {
  const mapCategories = categories.map((category) => {
    return {
      id: casual.uuid,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      ...category,
    }
  })

  return mapCategories
}

;(() => {
  // generate data products
  const productsNewArrivals = generateProducts(newArrivalProduct)
  const productsBags = generateProducts(bagsProduct)
  const productsAccessories = generateProducts(accessoriesProduct)
  const productsClothing = generateProducts(clothingProduct)
  const productsSneaker = generateProducts(sneakerProduct)

  // generate data categories
  const categoriesNewArrivals = generateCategories(newArrivalsCategory)
  const categoriesBags = generateCategories(bagsCategory)
  const categoriesAccessories = generateCategories(accessoriesCategory)
  const categoriesClothing = generateCategories(clothingCategory)

  // prepare db object
  const db = {
    categoriesNewArrivals,
    categoriesBags,
    categoriesAccessories,
    categoriesClothing,
    productsNewArrivals,
    productsBags,
    productsAccessories,
    productsClothing,
    productsSneaker,
    profile: {
      name: 'Althetis Ngo',
      age: 25,
    },
  }

  // write db object to db.json
  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate data successfully...:))')
  })
})()
