import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img
        className="w-[100%] h-[85vh]"
        src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.png"
        alt="error"
      />
      <button className="flex justify-center px-6 py-2 bg-cyan-900 text-white font-medium">
        <a href="/">Go To Home Page</a>
      </button>
    </div>
  );
}
