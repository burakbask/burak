import { useState } from "react";
import { Link } from "@remix-run/react";

export default function Kamplar() {
  const kamplar = [
    {
      isim: "Fizikfinito",
      aciklama: "Fizik Bilimine Giriş",
      katilimciSayisi: 1000160,
      ucret: "Ücretsiz",
      resimUrl: "/app/images/1.jpeg",
    },
    {
      isim: "Fizikfinito",
      aciklama: "Madde ve Özellikleri",
      katilimciSayisi: 1000160,
      ucret: "Ücretsiz",
      resimUrl: "/app/images/2.jpeg",
    },
    {
      isim: "Fizikfinito",
      aciklama: "9. Sınıf",
      katilimciSayisi: 1000160,
      ucret: "Ücretsiz",
      resimUrl: "/app/images/3.jpeg",
    },
    {
      isim: "Fizikfinito",
      aciklama: "10. Sınıf",
      katilimciSayisi: 1000160,
      ucret: "Ücretsiz",
      resimUrl: "/app/images/4.jpeg",
    },
    {
      isim: "Fizikfinito",
      aciklama: "11. Sınıf",
      katilimciSayisi: 1000160,
      ucret: "Ücretsiz",
      resimUrl: "/app/images/5.jpeg",
    },
    // Diğer kamplar buraya eklenebilir
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredKamplar = kamplar.filter((kamp) =>
    kamp.isim.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kamp.aciklama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <html lang="tr">
      <head>
        <title>Fizikfinito Kampları</title>
      </head>
      <body>
        <div className="min-h-screen flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="Ara..."
            className="mb-8 p-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="container mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {filteredKamplar.map((kamp, index) => (
              <div className="card" key={index}>
                <img
                  src={kamp.resimUrl}
                  alt={kamp.isim}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{kamp.isim}</h3>
                  <p className="text-gray-600">{kamp.aciklama}</p>
                  <p>Katılımcı Sayısı: {kamp.katilimciSayisi}</p>
                  <p className="font-bold">{kamp.ucret}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </body>
    </html>
  );
}
