export default function Page2() {
  return (
    <div className="p-4">
      <h1>Page 2</h1>
      <button data-track="page2-button" className="p-2 bg-blue-500 text-white">Click Me on Page 2</button>
      <form id="page2-form">
        <input type="text" placeholder="Enter text for Page 2" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}