"use client"

export default function ContactFloatingButtons() {
  const zaloLink = "https://zalo.me/0377436238" // thay số ĐT
  const messengerLink = "https://m.me/tenfacebook" // thay username FB
  const tiktokLink = "https://www.tiktok.com/@tentiktok" // thay username TikTok

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center gap-3 z-50">
      {/* Dòng chữ nhấp nháy */}
      <span className="text-red-500 font-bold text-sm animate-pulse">
        Liên hệ để được hỗ trợ
      </span>

      {/* Zalo */}
      <a
        href={zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
          alt="Zalo"
          className="w-10 h-10"
        />
      </a>

      {/* Messenger */}
      <a
        href={messengerLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 16 16" 
  fill="currentColor" 
  className="w-10 h-10 text-blue-500 hover:text-blue-600"
>
  <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
</svg>

      </a>

      {/* TikTok */}
      <a
        href={tiktokLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 16 16" 
  fill="currentColor" 
  className="w-10 h-10 text-black"
>
  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
</svg>

      </a>
    </div>
  )
}
