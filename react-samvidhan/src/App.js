

function App() {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossOrigin="anonymous" />
  <style dangerouslySetInnerHTML={{__html: "\n        /* Keyframe for floating animation */\n        @keyframes float {\n            0% {\n                transform: translateY(0);\n            }\n            50% {\n                transform: translateY(-10px);\n            }\n            100% {\n                transform: translateY(0);\n            }\n        }\n\n        .hero-section {\n            height: 100vh; /* Full viewport height */\n            background: center no-repeat;\n            background-size: cover; /* Ensure the image covers the entire section */\n            background-color: #5c636e; /* Fallback color */\n            background-blend-mode: multiply;\n            display: flex;\n            align-items: center; /* Vertically center the content */\n            justify-content: center; /* Horizontally center the content */\n        }\n\n        .content-container {\n            padding: 1rem;\n            margin: 0 auto;\n            max-width: 1280px;\n            text-align: center;\n            color: #ffffff;\n        }\n\n        h1 {\n            margin-bottom: 1rem;\n            font-size: 2.25rem;\n            font-weight: 800;\n            line-height: 1.2;\n            color: #ffffff;\n            animation: float 3s ease-in-out infinite;\n            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;\n        }\n\n        @media (min-width: 768px) {\n            h1 {\n                font-size: 3rem; /* Larger text on medium screens and above */\n            }\n        }\n\n        @media (min-width: 1024px) {\n            h1 {\n                font-size: 4rem; /* Even larger text on large screens */\n            }\n        }\n\n        p {\n            margin-bottom: 2rem;\n            font-size: 1.125rem;\n            font-weight: 400;\n            color: #D1D5DB;\n            padding: 0 4rem;\n            animation: float 3s ease-in-out infinite;\n            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;\n        }\n\n        @media (min-width: 768px) {\n            p {\n                font-size: 1.25rem; /* Larger text on medium screens and above */\n            }\n        }\n\n        .button-group {\n            display: flex;\n            flex-direction: column;\n            gap: 1rem;\n            justify-content: center;\n            align-items: center;\n            animation: float 3s ease-in-out infinite;\n            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;\n        }\n\n        @media (min-width: 640px) {\n            .button-group {\n                flex-direction: row;\n            }\n        }\n\n        .btn-primary {\n            display: inline-flex;\n            justify-content: center;\n            align-items: center;\n            padding: 0.75rem 1.25rem;\n            font-size: 1rem;\n            font-weight: 500;\n            color: #ffffff;\n            background-color: #1D4ED8;\n            border-radius: 0.5rem;\n            text-align: center;\n            transition: background-color 0.3s;\n        }\n\n        .btn-primary:hover {\n            background-color: #1E40AF;\n        }\n\n        .arrow-icon {\n            width: 0.875rem;\n            height: 0.875rem;\n            margin-left: 0.5rem;\n            transform: rotate(0deg);\n        }\n\n        .btn-secondary {\n            display: inline-flex;\n            justify-content: center;\n            align-items: center;\n            padding: 0.75rem 1.25rem;\n            font-size: 1rem;\n            font-weight: 500;\n            color: #ffffff;\n            border: 1px solid #ffffff;\n            border-radius: 0.5rem;\n            text-align: center;\n            transition: background-color 0.3s, color 0.3s;\n        }\n\n        .btn-secondary:hover {\n            background-color: #f3f4f6;\n            color: #111827;\n        }\n\n        .content-container.hidden h1,\n        .content-container.hidden p,\n        .content-container.hidden .button-group {\n            opacity: 0;\n            transform: translateY(20px); /* Moves the text slightly downward when hidden */\n        }\n    " }} />
  <style dangerouslySetInnerHTML={{__html: "\n        /* Initial state of the cards (off-screen) */\n        .card {\n            opacity: 0;\n            transform: translateY(20px);\n            transition: opacity 0.6s ease, transform 0.6s ease;\n        }\n    \n        /* State of the cards when they are visible on scroll */\n        .card.visible {\n            opacity: 1;\n            transform: translateY(0);\n        }\n    \n        /* Wipe down animation */\n        .card.wipe-down {\n            animation: wipeDown 0.6s ease forwards;\n        }\n    \n        @keyframes wipeDown {\n            from {\n                opacity: 0;\n                transform: translateY(-50px);\n            }\n            to {\n                opacity: 1;\n                transform: translateY(0);\n            }\n        }\n    \n        \n    " }} />
  <style dangerouslySetInnerHTML={{__html: "\n        /* Loading screen styles */\n        #loading-screen {\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            background-color: #ffffff; /* Background color of the loading screen */\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            z-index: 9999; /* Ensures the loading screen is above everything else */\n        }\n\n        #loading-icon {\n            border: 4px solid #f3f3f3; /* Light grey background */\n            border-radius: 50%;\n            border-top: 4px solid #3498db; /* Blue top border */\n            width: 40px;\n            height: 40px;\n            -webkit-animation: spin 2s linear infinite; /* Safari */\n            animation: spin 2s linear infinite;\n        }\n\n        /* Spin animation */\n        @-webkit-keyframes spin {\n            0% { -webkit-transform: rotate(0deg); }\n            100% { -webkit-transform: rotate(360deg); }\n        }\n\n        @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n        }\n\n        /* Hide the main content initially */\n        #main-content {\n            display: none;\n        }\n    " }} />
  <style dangerouslySetInnerHTML={{__html: "\n        .step {\n            opacity: 0;\n            transform: translateY(-20px);\n            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;\n        }\n    \n        .step.visible {\n            opacity: 1;\n            transform: translateY(0);\n        }\n    " }} />
  
  <div>
    {/* NAVIGATION BAR */}
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="index.html" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="uploads/imgs/wp-logo.png" className="h-16" alt="nagrik-aur-samvidhan" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nagrik Aur Samvidhan</span>
        </a>
        <button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
          <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
          <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" /></svg>
        </button>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg className="w-5 h-5 rounded-full me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z" /><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth={300} /><path fill="#3c3b6e" d="M0 0h2964v2100H0z" /><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" /><use xlinkHref="#a" y={420} /><use xlinkHref="#a" y={840} /><use xlinkHref="#a" y={1260} /></g><use xlinkHref="#a" y={1680} /></g><use xlinkHref="#b" x={247} y={210} /></g><use xlinkHref="#c" x={494} /></g><use xlinkHref="#d" x={988} /><use xlinkHref="#c" x={1976} /><use xlinkHref="#e" x={2470} /></g></svg>
            English (US)
          </button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login/Register</button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
            </li>
            <li>
              <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Games <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                </svg>
              </button>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
        <ul className="py-2 font-medium" role="none">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div className="inline-flex items-center">
                <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fillRule="evenodd"><g strokeWidth="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" /><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)" /></g></svg>              
                English (US)
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div className="inline-flex items-center">
                <svg className="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z" /><path d="M0 0h512v170.7H0z" /><path fill="#d00" d="M0 170.7h512v170.6H0z" /></svg>
                Hindi
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div className="inline-flex items-center">
                <svg className="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512"><g fillRule="evenodd" strokeWidth="1pt"><path fill="#fff" d="M0 0h512v512H0z" /><path fill="#009246" d="M0 0h170.7v512H0z" /><path fill="#ce2b37" d="M341.3 0H512v512H341.3z" /></g></svg>              
                Tamil
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div className="inline-flex items-center">
                <svg className="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512"><defs><path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" /></defs><path fill="#de2910" d="M0 0h512v512H0z" /><use width={30} height={20} transform="matrix(76.8 0 0 76.8 128 128)" xlinkHref="#a" /><use width={30} height={20} transform="rotate(-121 142.6 -47) scale(25.5827)" xlinkHref="#a" /><use width={30} height={20} transform="rotate(-98.1 198 -82) scale(25.6)" xlinkHref="#a" /><use width={30} height={20} transform="rotate(-74 272.4 -114) scale(25.6137)" xlinkHref="#a" /><use width={30} height={20} transform="matrix(16 -19.968 19.968 16 256 230.4)" xlinkHref="#a" /></svg>
                Kannada
              </div>
            </a>
          </li>
        </ul>
      </div>
      {/* Mega Menu Dropdown - COMPANY */}
      <div id="mega-menu-full-dropdown" className=" hidden group-hover:block mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
          <ul>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Sign In/Sign Up Modal */}
      <div id="authModal" className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 hidden opacity-0 transition-opacity duration-300">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md transform scale-95 transition-transform duration-300">
          <div className="px-6 py-4 border-b flex justify-between items-center">
            <h2 id="modalTitle" className="text-xl font-semibold text-gray-800">Sign In</h2>
            <button id="closeModal" className="text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-6 py-4">
            {/* Sign In Form */}
            <form id="signInForm" action="#">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" className="mt-2 p-2 w-full border rounded-lg" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input type="password" id="password" className="mt-2 p-2 w-full border rounded-lg" placeholder="Enter your password" />
              </div>
              <div className="flex justify-between items-center">
                <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800">Sign In</button>
                <a id="showSignUpForm" href="#" className="text-blue-700 hover:underline">Sign Up</a>
              </div>
            </form>
            {/* Sign Up Form */}
            <form id="signUpForm" className="hidden" action="#">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input type="text" id="name" className="mt-2 p-2 w-full border rounded-lg" placeholder="Enter your name" />
              </div>
              <div className="mb-4">
                <label htmlFor="emailSignUp" className="block text-gray-700">Email</label>
                <input type="email" id="emailSignUp" className="mt-2 p-2 w-full border rounded-lg" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label htmlFor="passwordSignUp" className="block text-gray-700">Password</label>
                <input type="password" id="passwordSignUp" className="mt-2 p-2 w-full border rounded-lg" placeholder="Enter your password" />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                <input type="password" id="confirmPassword" className="mt-2 p-2 w-full border rounded-lg" placeholder="Confirm your password" />
              </div>
              <div className="flex justify-between items-center">
                <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800">Sign Up</button>
                <a id="showSignInForm" href="#" className="text-blue-700 hover:underline">Sign In</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav></div>
  <div className="bg-white dark:bg-gray-900">
    <div className="bg-white dark:bg-gray-900">
      <section className="hero-section" style={{"background-image":"url('uploads/imgs/banner-wp.jpg')"}}>
        <div className="content-container">
          <h1>Explore the Constitution of India in a Fun and Engaging Way!</h1>
          <p>Interactive games and resources to help you understand your rights, duties, and the foundations of our nation.</p>
          <div className="button-group">
            <a href="#" className="btn-primary">
              Start Learning
              <svg className="arrow-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a href="#" className="btn-secondary">Explore</a>  
          </div>
        </div>
      </section>
    </div>
    <div className="bg-white dark:bg-gray-900 flex flex-col items-center justify-center mt-12">
      {/* Title and Description */}
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Featured Game</span> of the Month.
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center mb-8">
        Discover and play our top pick, designed to make learning the Constitution fun and interactive!
      </p>
      {/* Cards Container */}
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl w-full">
        {/* Card 1 */}
        <div className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
          <a href="#">
            <img className="rounded-t-lg" src="https://media.istockphoto.com/id/1075478326/photo/vintage-antique-snakes-and-ladders-board-game.webp?b=1&s=170667a&w=0&k=20&c=KQjJuyhQrfEM99Xwpb8UGojb-aUkBb1zvEqGtBz4kOI=" alt />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
          <a href="#">
            <img className="rounded-t-lg" src="https://media.istockphoto.com/id/1075478326/photo/vintage-antique-snakes-and-ladders-board-game.webp?b=1&s=170667a&w=0&k=20&c=KQjJuyhQrfEM99Xwpb8UGojb-aUkBb1zvEqGtBz4kOI=" alt />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
          <a href="#">
            <img className="rounded-t-lg" src="https://media.istockphoto.com/id/1075478326/photo/vintage-antique-snakes-and-ladders-board-game.webp?b=1&s=170667a&w=0&k=20&c=KQjJuyhQrfEM99Xwpb8UGojb-aUkBb1zvEqGtBz4kOI=" alt />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
          <a href="#">
            <img className="rounded-t-lg" src="https://media.istockphoto.com/id/1075478326/photo/vintage-antique-snakes-and-ladders-board-game.webp?b=1&s=170667a&w=0&k=20&c=KQjJuyhQrfEM99Xwpb8UGojb-aUkBb1zvEqGtBz4kOI=" alt />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <br />
    <section className="bg-blue-600 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">How Spendesk Works</h2>
        <h3 className="text-4xl mb-8">Three steps to smarter spending</h3>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="step text-center">
            <div className="text-6xl mb-4">1</div>
            <h4 className="text-xl font-semibold">Sign up &amp; load funds</h4>
            <p className="mt-2">Verify your company and load funds to your Spendesk wallet from your existing bank account.</p>
          </div>
          <div className="step text-center">
            <div className="text-6xl mb-4">2</div>
            <h4 className="text-xl font-semibold">Set your spending rules</h4>
            <p className="mt-2">Define teams, approval workflows, spending policies, and card limits that work for you.</p>
          </div>
          <div className="step text-center">
            <div className="text-6xl mb-4">3</div>
            <h4 className="text-xl font-semibold">Invite your team</h4>
            <p className="mt-2">Employees can request funds, pay securely, and submit receipts in a snap with the Spendesk app.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
              </li>
              <li>
                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center sm:mt-0">
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
              <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
            </svg>
            <span className="sr-only">Discord community</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
              <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">GitHub account</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">Dribbble account</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>
  );
}

export default App;
