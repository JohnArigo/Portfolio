export default function Title() {
  return (
    <body className="w-screen h-screen flex flex-row bg-red-200 sticky top-0">
      <main className="w-1/2 flex flex-col justify-center">
        <h1>Hello, my name is John Arigo</h1>
        <h3>
          I am an aspiring Software Engineer with education from Southwestern
          University and the Microsoft Software Systems Academy.
        </h3>
      </main>
      {/* NULL bg photo if not bigger than certain screen */}
      <aside className="w-1/2 h-full flex flex-col justify-center bg-gray-100">
        This is where the photo is going
      </aside>
    </body>
  );
}
