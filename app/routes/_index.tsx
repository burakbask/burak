import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <html lang="en">
    <head>
      <title>Zeduva</title>

    </head>
    <body>
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Logo Section */}
      <div className="flex justify-center items-center space-x-12">
      <Link to="/fizikfinito">
      <div className="text-center">
          <img src="/public/images/fizikfinito.webp" alt="Logo 1" className="h-32" />
          <p className="text-xl font-semibold mt-2">Fizikfinito</p>  {/* Logo 1 için açıklama */}
        </div>
         </Link>
        <div className="text-center ">
          <img src="/public/images/biyikli.png" alt="Logo 2" className="h-32 mx-auto" />
          <p className="text-xl font-semibold mt-2">Bıyıklı Matematik</p>  {/* Logo 2 için açıklama */}
        </div>
      </div>

    </div>
    </body>
    </html>
  );
}
