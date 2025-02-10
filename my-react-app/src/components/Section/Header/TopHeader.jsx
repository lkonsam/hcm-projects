export default function TopHeader() {
  return (
    <div className="flex flex-wrap justify-between px-6 py-2 bg-gray-100">
      <span>
        <button className="m-2 hover:text-[var(--color-brown-0)]">
          Sitemap
        </button>
        |
        <button className="m-2 hover:text-[var(--color-brown-0)]">
          Contact Us
        </button>
        |
        <button className="m-2 hover:text-[var(--color-brown-0)]">
          Feedback
        </button>
        |<button className="m-2 hover:text-[var(--color-brown-0)]">FAQs</button>
      </span>
      <span>
        <button className="m-2 hover:text-[var(--color-brown-0)]">
          Skip to Main Content
        </button>
        |
        <button className="m-2 hover:text-[var(--color-brown-0)]">
          Screen Reader Access
        </button>
      </span>
      <span>
        <button className="m-2 hover:text-[var(--color-brown-0)]">-A</button>|
        <button className="m-2 hover:text-[var(--color-brown-0)]">A</button>|
        <button className="m-2 hover:text-[var(--color-brown-0)]">+A</button>
      </span>
      <span>
        <button className="m-2 hover:text-[var(--color-brown-0)]">
          English
        </button>
        |
        <button className="m-2 hover:text-[var(--color-brown-0)]">Hindi</button>
      </span>
    </div>
  );
}
