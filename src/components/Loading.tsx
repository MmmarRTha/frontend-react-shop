export default function Loading() {
    return (
        <div className="flex items-center justify-center h-ful">
            <svg className="w-20 h-20 mr-3 -ml-1 text-gray-600 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20c3.042 0 5.824-1.135 7.938-3l-2.647-3A7.962 7.962 0 0112 16v4zm5.291-9H20c0-3.042-1.135-5.824-3-7.938l-3 2.647A7.962 7.962 0 0116 12h4zM12 4c-3.042 0-5.824 1.135-7.938 3l2.647 3A7.962 7.962 0 0112 8V4zm-2.709 9H4c0 3.042 1.135 5.824 3 7.938l3-2.647A7.962 7.962 0 018 12h1.291l-.647-.647A6.963 6.963 0 006 12H4a8 8 0 014.291-7.155L8.938 4.291A7.962 7.962 0 0012 4v2c-2.22 0-4 1.78-4 4h2a6.963 6.963 0 00-1.647 1.647L9.709 12zm2.709 2h2c0-3.042-1.135-5.824-3-7.938l-3 2.647A7.962 7.962 0 018 12h2a6.963 6.963 0 001.647-1.647L11.291 10zM12 14a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
            <p className="text-gray-600">Loading...</p>
        </div>
    )
}
