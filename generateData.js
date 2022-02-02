const fs = require("fs")
const casual = require("casual")
const newArrivalProduct = require("./products/productsNewArrivals")
const newArrivalsCategory = require("./categories/categoriesNewArrivals")

const generateProducts = (products) => {
  const mapProducts = products.map((product) => {
    return {
      id: casual.uuid,
      createdAt: Date.now(),
      updatedAt: Date.now(),
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

  // generate data categories
  const categoriesNewArrivals = generateCategories(newArrivalsCategory)

  // prepare db object
  const db = {
    categoriesNewArrivals,
    productsNewArrivals,
    profile: {
      name: "Althetis Truong",
    },
  }

  // write db object to db.json
  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("Generate data successfully...:))")
  })
})()
