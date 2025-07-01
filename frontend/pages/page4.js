export default function Page4() {
  return (
    <div className="p-4">
      <h1>Page 4</h1>
      <button data-track="page4-button" className="p-2 bg-blue-500 text-white">Click Me on Page 4</button>
      <form id="page4-form">
        <input type="text" placeholder="Enter text for Page 4" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}