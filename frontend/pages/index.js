export default function Home() {
  return (
    <div className="p-4">
      <h1>Page 1</h1>
      <button data-track="home-button" className="p-2 bg-blue-500 text-white">Click Me</button>
      <form id="home-form">
        <input type="text" placeholder="Enter text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}