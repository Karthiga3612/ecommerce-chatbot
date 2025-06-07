
const mongoose = require('mongoose');
const Product = require('../models/Product');

const products = [
  {
    "name": "Wireless Mouse",
    "category": "home_appliance",
    "price": 10042,
    "image": "https://img.freepik.com/free-photo/purple-computer-mouse_1260-11.jpg"
  },
  {
    "name": "Bluetooth Speaker",
    "category": "electronics",
    "price": 28279,
    "image": "https://via.placeholder.com/100?text=Bluetooth+Speaker"
  },
  {
    "name": "LED Monitor",
    "category": "home_appliance",
    "price": 9062,
    "image": "https://via.placeholder.com/100?text=LED+Monitor"
  },
  {
    "name": "Gaming Keyboard",
    "category": "electronics",
    "price": 24241,
    "image": "https://via.placeholder.com/100?text=Gaming+Keyboard"
  },
  {
    "name": "Laptop Stand",
    "category": "home_appliance",
    "price": 24084,
    "image": "https://via.placeholder.com/100?text=Laptop+Stand"
  },
  {
    "name": "HDMI Cable",
    "category": "electronics",
    "price": 10756,
    "image": "https://via.placeholder.com/100?text=HDMI+Cable"
  },
  {
    "name": "Smart Watch",
    "category": "home_appliance",
    "price": 4256,
    "image": "https://via.placeholder.com/100?text=Smart+Watch"
  },
  {
    "name": "USB Hub",
    "category": "electronics",
    "price": 14889,
    "image": "https://via.placeholder.com/100?text=USB+Hub"
  },
  {
    "name": "External Hard Drive",
    "category": "home_appliance",
    "price": 5219,
    "image": "https://via.placeholder.com/100?text=External+Hard+Drive"
  },
  {
    "name": "Ring Light",
    "category": "electronics",
    "price": 21179,
    "image": "https://via.placeholder.com/100?text=Ring+Light"
  },
  {
    "name": "Webcam",
    "category": "home_appliance",
    "price": 8591,
    "image": "https://via.placeholder.com/100?text=Webcam"
  },
  {
    "name": "Phone Tripod",
    "category": "electronics",
    "price": 25264,
    "image": "https://via.placeholder.com/100?text=Phone+Tripod"
  },
  {
    "name": "Portable Charger",
    "category": "home_appliance",
    "price": 24196,
    "image": "https://via.placeholder.com/100?text=Portable+Charger"
  },
  {
    "name": "Power Bank",
    "category": "electronics",
    "price": 9184,
    "image": "https://via.placeholder.com/100?text=Power+Bank"
  },
  {
    "name": "Noise Cancelling Headphones",
    "category": "home_appliance",
    "price": 23388,
    "image": "https://via.placeholder.com/100?text=Noise+Cancelling+Headphones"
  },
  {
    "name": "Fitness Tracker",
    "category": "electronics",
    "price": 3948,
    "image": "https://via.placeholder.com/100?text=Fitness+Tracker"
  },
  {
    "name": "Mini Projector",
    "category": "home_appliance",
    "price": 2670,
    "image": "https://via.placeholder.com/100?text=Mini+Projector"
  },
  {
    "name": "Tablet Case",
    "category": "electronics",
    "price": 1709,
    "image": "https://via.placeholder.com/100?text=Tablet+Case"
  },
  {
    "name": "Smartphone Gimbal",
    "category": "home_appliance",
    "price": 11302,
    "image": "https://via.placeholder.com/100?text=Smartphone+Gimbal"
  },
  {
    "name": "VR Headset",
    "category": "electronics",
    "price": 5200,
    "image": "https://via.placeholder.com/100?text=VR+Headset"
  },
  {
    "name": "Electric Kettle",
    "category": "home_appliance",
    "price": 2532,
    "image": "https://via.placeholder.com/100?text=Electric+Kettle"
  },
  {
    "name": "Air Fryer",
    "category": "electronics",
    "price": 2149,
    "image": "https://via.placeholder.com/100?text=Air+Fryer"
  },
  {
    "name": "Microwave Oven",
    "category": "home_appliance",
    "price": 7435,
    "image": "https://via.placeholder.com/100?text=Microwave+Oven"
  },
  {
    "name": "Induction Cooktop",
    "category": "electronics",
    "price": 14787,
    "image": "https://via.placeholder.com/100?text=Induction+Cooktop"
  },
  {
    "name": "Blender",
    "category": "home_appliance",
    "price": 912,
    "image": "https://via.placeholder.com/100?text=Blender"
  },
  {
    "name": "Coffee Maker",
    "category": "electronics",
    "price": 15346,
    "image": "https://via.placeholder.com/100?text=Coffee+Maker"
  },
  {
    "name": "Toaster",
    "category": "home_appliance",
    "price": 24073,
    "image": "https://via.placeholder.com/100?text=Toaster"
  },
  {
    "name": "Water Purifier",
    "category": "electronics",
    "price": 9910,
    "image": "https://via.placeholder.com/100?text=Water+Purifier"
  },
  {
    "name": "Vacuum Cleaner",
    "category": "home_appliance",
    "price": 7272,
    "image": "https://via.placeholder.com/100?text=Vacuum+Cleaner"
  },
  {
    "name": "Washing Machine",
    "category": "electronics",
    "price": 18366,
    "image": "https://via.placeholder.com/100?text=Washing+Machine"
  },
  {
    "name": "Refrigerator",
    "category": "home_appliance",
    "price": 29070,
    "image": "https://via.placeholder.com/100?text=Refrigerator"
  },
  {
    "name": "Dishwasher",
    "category": "electronics",
    "price": 21902,
    "image": "https://via.placeholder.com/100?text=Dishwasher"
  },
  {
    "name": "Gas Stove",
    "category": "home_appliance",
    "price": 16550,
    "image": "https://via.placeholder.com/100?text=Gas+Stove"
  },
  {
    "name": "Electric Grill",
    "category": "electronics",
    "price": 1752,
    "image": "https://via.placeholder.com/100?text=Electric+Grill"
  },
  {
    "name": "Steam Iron",
    "category": "home_appliance",
    "price": 23002,
    "image": "https://via.placeholder.com/100?text=Steam+Iron"
  },
  {
    "name": "Ceiling Fan",
    "category": "electronics",
    "price": 12467,
    "image": "https://via.placeholder.com/100?text=Ceiling+Fan"
  },
  {
    "name": "Pedestal Fan",
    "category": "home_appliance",
    "price": 6748,
    "image": "https://via.placeholder.com/100?text=Pedestal+Fan"
  },
  {
    "name": "Smart Bulb",
    "category": "electronics",
    "price": 5668,
    "image": "https://via.placeholder.com/100?text=Smart+Bulb"
  },
  {
    "name": "Smart Plug",
    "category": "home_appliance",
    "price": 25065,
    "image": "https://via.placeholder.com/100?text=Smart+Plug"
  },
  {
    "name": "Extension Cord",
    "category": "electronics",
    "price": 18155,
    "image": "https://via.placeholder.com/100?text=Extension+Cord"
  },
  {
    "name": "Wi-Fi Router",
    "category": "home_appliance",
    "price": 22711,
    "image": "https://via.placeholder.com/100?text=Wi-Fi+Router"
  },
  {
    "name": "Security Camera",
    "category": "electronics",
    "price": 25794,
    "image": "https://via.placeholder.com/100?text=Security+Camera"
  },
  {
    "name": "Doorbell Camera",
    "category": "home_appliance",
    "price": 26072,
    "image": "https://via.placeholder.com/100?text=Doorbell+Camera"
  },
  {
    "name": "Electric Screwdriver",
    "category": "electronics",
    "price": 3627,
    "image": "https://via.placeholder.com/100?text=Electric+Screwdriver"
  },
  {
    "name": "Drill Machine",
    "category": "home_appliance",
    "price": 6739,
    "image": "https://via.placeholder.com/100?text=Drill+Machine"
  },
  {
    "name": "Tool Kit",
    "category": "electronics",
    "price": 3331,
    "image": "https://via.placeholder.com/100?text=Tool+Kit"
  },
  {
    "name": "Multimeter",
    "category": "home_appliance",
    "price": 29587,
    "image": "https://via.placeholder.com/100?text=Multimeter"
  },
  {
    "name": "Soldering Iron",
    "category": "electronics",
    "price": 1780,
    "image": "https://via.placeholder.com/100?text=Soldering+Iron"
  },
  {
    "name": "Laser Distance Meter",
    "category": "home_appliance",
    "price": 10229,
    "image": "https://via.placeholder.com/100?text=Laser+Distance+Meter"
  },
  {
    "name": "Measuring Tape",
    "category": "electronics",
    "price": 2721,
    "image": "https://via.placeholder.com/100?text=Measuring+Tape"
  },
  {
    "name": "3D Printer",
    "category": "home_appliance",
    "price": 13267,
    "image": "https://via.placeholder.com/100?text=3D+Printer"
  },
  {
    "name": "Office Chair",
    "category": "electronics",
    "price": 10285,
    "image": "https://via.placeholder.com/100?text=Office+Chair"
  },
  {
    "name": "Standing Desk",
    "category": "home_appliance",
    "price": 7129,
    "image": "https://via.placeholder.com/100?text=Standing+Desk"
  },
  {
    "name": "Bookshelf",
    "category": "electronics",
    "price": 26697,
    "image": "https://via.placeholder.com/100?text=Bookshelf"
  },
  {
    "name": "Wardrobe",
    "category": "home_appliance",
    "price": 20531,
    "image": "https://via.placeholder.com/100?text=Wardrobe"
  },
  {
    "name": "Shoe Rack",
    "category": "electronics",
    "price": 11283,
    "image": "https://via.placeholder.com/100?text=Shoe+Rack"
  },
  {
    "name": "Dining Table",
    "category": "home_appliance",
    "price": 2713,
    "image": "https://via.placeholder.com/100?text=Dining+Table"
  },
  {
    "name": "Bed Frame",
    "category": "electronics",
    "price": 13423,
    "image": "https://via.placeholder.com/100?text=Bed+Frame"
  },
  {
    "name": "Mattress",
    "category": "home_appliance",
    "price": 28894,
    "image": "https://via.placeholder.com/100?text=Mattress"
  },
  {
    "name": "Pillow Set",
    "category": "electronics",
    "price": 2353,
    "image": "https://via.placeholder.com/100?text=Pillow+Set"
  },
  {
    "name": "Blanket",
    "category": "home_appliance",
    "price": 26715,
    "image": "https://via.placeholder.com/100?text=Blanket"
  },
  {
    "name": "Curtains",
    "category": "electronics",
    "price": 11851,
    "image": "https://via.placeholder.com/100?text=Curtains"
  },
  {
    "name": "Wall Clock",
    "category": "home_appliance",
    "price": 18362,
    "image": "https://via.placeholder.com/100?text=Wall+Clock"
  },
  {
    "name": "Mirror",
    "category": "electronics",
    "price": 23776,
    "image": "https://via.placeholder.com/100?text=Mirror"
  },
  {
    "name": "Table Lamp",
    "category": "home_appliance",
    "price": 12923,
    "image": "https://via.placeholder.com/100?text=Table+Lamp"
  },
  {
    "name": "Desk Organizer",
    "category": "electronics",
    "price": 10606,
    "image": "https://via.placeholder.com/100?text=Desk+Organizer"
  },
  {
    "name": "Whiteboard",
    "category": "home_appliance",
    "price": 11661,
    "image": "https://via.placeholder.com/100?text=Whiteboard"
  },
  {
    "name": "Drawing Tablet",
    "category": "electronics",
    "price": 28375,
    "image": "https://via.placeholder.com/100?text=Drawing+Tablet"
  },
  {
    "name": "Pen Tablet",
    "category": "home_appliance",
    "price": 3250,
    "image": "https://via.placeholder.com/100?text=Pen+Tablet"
  },
  {
    "name": "Graphic Monitor",
    "category": "electronics",
    "price": 28364,
    "image": "https://via.placeholder.com/100?text=Graphic+Monitor"
  },
  {
    "name": "Laptop Bag",
    "category": "home_appliance",
    "price": 16092,
    "image": "https://via.placeholder.com/100?text=Laptop+Bag"
  },
  {
    "name": "Smartphone Stand",
    "category": "electronics",
    "price": 10410,
    "image": "https://via.placeholder.com/100?text=Smartphone+Stand"
  },
  {
    "name": "Bluetooth Earphones",
    "category": "home_appliance",
    "price": 21467,
    "image": "https://via.placeholder.com/100?text=Bluetooth+Earphones"
  },
  {
    "name": "Wireless Charger",
    "category": "electronics",
    "price": 4093,
    "image": "https://via.placeholder.com/100?text=Wireless+Charger"
  },
  {
    "name": "USB-C Cable",
    "category": "home_appliance",
    "price": 7240,
    "image": "https://via.placeholder.com/100?text=USB-C+Cable"
  },
  {
    "name": "OTG Adapter",
    "category": "electronics",
    "price": 2987,
    "image": "https://via.placeholder.com/100?text=OTG+Adapter"
  },
  {
    "name": "Card Reader",
    "category": "home_appliance",
    "price": 9336,
    "image": "https://via.placeholder.com/100?text=Card+Reader"
  },
  {
    "name": "Tripod Mount",
    "category": "electronics",
    "price": 16738,
    "image": "https://via.placeholder.com/100?text=Tripod+Mount"
  },
  {
    "name": "Phone Lens",
    "category": "home_appliance",
    "price": 13024,
    "image": "https://via.placeholder.com/100?text=Phone+Lens"
  },
  {
    "name": "E-Book Reader",
    "category": "electronics",
    "price": 11582,
    "image": "https://via.placeholder.com/100?text=E-Book+Reader"
  },
  {
    "name": "Smart Scale",
    "category": "home_appliance",
    "price": 27996,
    "image": "https://via.placeholder.com/100?text=Smart+Scale"
  },
  {
    "name": "Thermometer",
    "category": "electronics",
    "price": 20347,
    "image": "https://via.placeholder.com/100?text=Thermometer"
  },
  {
    "name": "Oximeter",
    "category": "home_appliance",
    "price": 8608,
    "image": "https://via.placeholder.com/100?text=Oximeter"
  },
  {
    "name": "Blood Pressure Monitor",
    "category": "electronics",
    "price": 25954,
    "image": "https://via.placeholder.com/100?text=Blood+Pressure+Monitor"
  },
  {
    "name": "Glucose Meter",
    "category": "home_appliance",
    "price": 2288,
    "image": "https://via.placeholder.com/100?text=Glucose+Meter"
  },
  {
    "name": "First Aid Kit",
    "category": "electronics",
    "price": 12031,
    "image": "https://via.placeholder.com/100?text=First+Aid+Kit"
  },
  {
    "name": "Massage Gun",
    "category": "home_appliance",
    "price": 24098,
    "image": "https://via.placeholder.com/100?text=Massage+Gun"
  },
  {
    "name": "Yoga Mat",
    "category": "electronics",
    "price": 10300,
    "image": "https://via.placeholder.com/100?text=Yoga+Mat"
  },
  {
    "name": "Resistance Band",
    "category": "home_appliance",
    "price": 9312,
    "image": "https://via.placeholder.com/100?text=Resistance+Band"
  },
  {
    "name": "Dumbbells",
    "category": "electronics",
    "price": 15494,
    "image": "https://via.placeholder.com/100?text=Dumbbells"
  }
];

mongoose.connect('mongodb://localhost:27017/uplyftdb')
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('✅ 100 Products seeded');
    mongoose.disconnect();
  })
  .catch(err => console.error(err));
