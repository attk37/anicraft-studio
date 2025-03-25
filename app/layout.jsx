export const metadata = {
  title: "Anicraft Studio",
  description: "AI-powered animation and digital content studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
