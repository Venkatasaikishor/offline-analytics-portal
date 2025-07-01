export default function Page5() {
  return (
    <div className="p-4">
      <h1>Page 5</h1>
      <button data-track="page5-button" className="p-2 bg-blue-500 text-white">Click Me on Page 5</button>
      <form id="page5-form">
        <input type="text" placeholder="Enter text for Page 5" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}