# GlobalMarket - Premium Products, Worldwide Delivery

GlobalMarket is a modern e-commerce platform that connects quality manufacturers in China with customers in India and the USA. Built with Next.js, TailwindCSS, and shadcn/ui, it offers a seamless shopping experience for both domestic and international customers.

## Features

- 🌐 Multi-market support (India & USA)
- 💰 Multi-currency support (INR & USD)
- 🛍️ Product categories and filtering
- 🛒 Shopping cart with persistent storage
- 💳 Region-specific payment methods
- 📦 International shipping options
- 📱 Fully responsive design
- 🎨 Modern, clean UI with dark mode support

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Context
- **Deployment**: Netlify

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd globalmarket
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                  # Next.js app router pages
├── components/          
│   ├── cart/            # Cart-related components
│   ├── checkout/        # Checkout flow components
│   ├── home/            # Homepage components
│   ├── layout/          # Layout components (header, footer)
│   ├── products/        # Product-related components
│   └── ui/              # Reusable UI components
├── lib/                
│   ├── cart-context.ts  # Shopping cart state management
│   ├── currency-context.ts # Currency handling
│   ├── mock-data.ts     # Sample product data
│   ├── types.ts         # TypeScript types
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## Key Features Explained

### Multi-Currency Support
- Currency switching between INR and USD
- Automatic price conversion
- Persistent currency preference

### Shopping Cart
- Add/remove products
- Update quantities
- Persistent cart storage
- Real-time total calculation

### Checkout Process
- Multi-step checkout flow
- Region-specific shipping options
- Multiple payment methods
  - India: Razorpay, Cashfree, COD
  - USA: Stripe, PayPal

### Product Management
- Categorized product listings
- Advanced filtering options
- Product variants (colors, sizes)
- Image galleries with hover effects

## Deployment

The application is deployed on Netlify. You can view it at: [Live Demo](#)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
