export default function Page3() {
  return (
    <div className="p-4">
      <h1>Page 3</h1>
      <button data-track="page3-button" className="p-2 bg-blue-500 text-white">Click Me on Page 3</button>
      <form id="page3-form">
        <input type="text" placeholder="Enter text for Page 3" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}