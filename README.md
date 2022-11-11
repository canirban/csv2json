This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To test the import api access [http://localhost:3000/api/import](http://localhost:3000/api/import)

Import can be tested in 2 ways:

If its a GET call then the file data.csv will be imported and JSON be displayed on the screen. The file data.csv is already there in the app

If its a POST request you can put your own payload to test the api make sure to add key as csv to the body and for values put the text you want to import.

Note please add NEXT_PUBLIC_RESULT_URL=your-site-url/results/ to .env.local if your server is not running on [http://localhost:3000](http://localhost:3000)

# csv2json
