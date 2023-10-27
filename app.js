// // console.log('Express Tutorial')
// const http = require("http");
// const { readFileSync } = require("fs");

// const homePage = readFileSync("./navbar-app/index.html");
// const homeStyles = readFileSync("./navbar-app/styles.css");
// const homeImage = readFileSync("./navbar-app/logo.svg");
// const homeLogic = readFileSync("./navbar-app/browser-app.js");

// const server = http.createServer((req, res) => {
//     console.log("user hit the server");
//     let url = req.url;

//     if (url === "/") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(homePage);
//         // res.write("Welcome to Home Page");
//         res.end();
//     }
//     else if (url == "/about") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write("Welcome to About Page");
//         res.end();
//     }
//     else if (url == "/styles.css") {
//         res.writeHead(200, { "Content-Type": "text/css" });
//         res.write(homeStyles);
//         res.end();
//     } else if (url == "/logo.svg") {
//         res.writeHead(200, { "Content-Type": "image/svg+xml" });
//         res.write(homeImage);
//         res.end();
//     } else if (url == "/browser-app.js") {
//         res.writeHead(200, { "Content-Type": "text/javascript" });
//         res.write(homeLogic);
//         res.end();
//     }
// })

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// })

console.log("----------------------------------");

// const express = require("express");
// const path = require("path");
// const app = express();
// const port = 3000;

// app.use(express.static("./public"));

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

// app.all("*", (req, res) => {
//     res.status(404).send(`<h1>Resource Not Found</h1>`);
// })

// app.listen(port, () => {
//     console.log("Server running on port 3000");
// });

console.log("----------------------------------");

// const express = require("express");
// const { products } = require("./data");

// const app = express();
// const port = 3000;

// app.use(express.static("./public"));

// app.get("/", (req, res) => {
//     // res.json([{ name: "Sumayyah" }, { name: "Sam" }]);
//     // res.json(products);

//     res.send(`<h1>Home Page</h1><a href = "/api/products">Products</a>`)
// });

// app.get("/api/products", (req, res) => {
//     const newProducts = products.map(product => {
//         const { id, name, image, price } = product;
//         return { id, name, image, price };
//     })

//     res.json(newProducts);
// });

// // What code would look like without Route Params
// // app.get("/api/products/1", (req, res) => {
// //     const singleProduct = products.find(product => product.id === 1)

// //     res.json(singleProduct);
// // });

// // Route Params
// app.get("/api/products/:productID", (req, res) => {
//     const { productID } = req.params;
//     const singleProduct = products.find(product => product.id === Number(productID))

//     if (!singleProduct) {
//         res.status(404).send("Product Not Found");
//     }
//     res.json(singleProduct);
// });
// app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
//     console.log(req.params);
// });

// // Search 
// app.get('/api/v1/query', (req, res) => {
//     // console.log(req.query)
//     const { search, limit } = req.query
//     let sortedProducts = [...products]

//     if (search) {
//         sortedProducts = sortedProducts.filter((product) => {
//             return product.name.startsWith(search)
//         })
//     }
//     if (limit) {
//         sortedProducts = sortedProducts.slice(0, Number(limit))
//     }
//     if (sortedProducts.length < 1) {
//         // res.status(200).send('no products matched your search');
//         return res.status(200).json({ sucess: true, data: [] })
//     }
//     res.status(200).json(sortedProducts)
// })

// app.all("*", (req, res) => {
//     res.status(404).send(`<h1>Resource Not Found</h1>`);
// })

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

console.log("----------------------------------");
// Middleware
// req => middleware => res

// const express = require("express");
// const logger = require("./logger");
// const authorize = require("./authorize");

// const app = express();
// const port = 3000;

// // adding manually the middleware to each route.
// // app.get("/", logger, (req, res) => {
// //     res.send("Home");
// // })
// // app.get("/about", logger, (req, res) => {
// //     res.send("About");
// // })

// // add middlware to each route efficiently. this needs to be about all routes, like app.get()
// app.use([logger, authorize]);

// app.get("/", (req, res) => {
//     res.send("Home");
// })
// app.get("/about", (req, res) => {
//     res.send("About");
// })
// app.get("/api/items", (req, res) => {
//     console.log(req.user);
//     res.send("Items");
// })
// app.all("*", (req, res) => {
//     res.status(404).send(`<h1>Resource Not Found</h1>`);
// })
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

console.log("----------------------------------");
// HTTP Methods

const express = require("express");

const app = express();
const port = 3000;
const people = require("./routes/people");
const auth = require("./routes/auth");

app.use(express.static("./methods-public"))
//parse form data
app.use(express.urlencoded({ extended: false })) // Study more about this
// parse json
app.use(express.json());
app.use("/api/people", people);
app.use("/login", auth);

app.all("*", (req, res) => {
    res.status(404).send(`<h1>Resource Not Found</h1>`);
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
