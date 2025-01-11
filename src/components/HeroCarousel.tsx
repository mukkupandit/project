import React from 'react';
import bg from "../assets/bg.png";
import bg2 from "../assets/bg2.png";

export default function HeroCarousel() {
  return (
    <div className="flex flex-col items-center">
      {/* First Image */}
      <img
        src={bg}
        alt="First Image"
        style={{
          objectFit: "cover",
          height: "27rem",
          width: "100%",
        }}
      />



      {/* Second Image */}
      <img
        src={bg2}
        alt="Second Image"
        style={{
          objectFit: "contain",
          height: "27rem",
          width: "100%",
          marginTop:"-8rem",
          marginBottom:"-8rem"
        }}
      />
       <div style={{ height: "27rem", width: "100%" }}>
       <iframe
      src="https://media-hosting.imagekit.io//8164342df7c94e27/VID-20250111-WA0008.mp4?Expires=1831194290&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rGlLffKxMxh0iw4PISa0NnTJCyd3j8w~lh0URdWqhDzZd-S8VTxM31I~AIbsvDZt82MR7hIkGsu2JLgL8PnQ9zAGaL2qkzXMmKnjKk6jCt5~ufWucEP1G0~CsKInjqD43zxx3rPypvIgoCupQXIvuglxp4HvpCq9IYPTVo5BlwnLe6BCO7~gWnUSEaJd5D3evZPDMmMKmSD2LczZXJJkdQ4OhP76JVU0Gm~TdQsYaAINn9TsTuTVNi1TNKVoE9wuyDrvRJ48E9eqYalNVtEPaEm2YjSE1mYGW94w~09FUrbR7dgQ-7YKKHI2ACekDFoKlMBp8H5V~6wHiutlcyk57g__"
      style={{
        height: "100%",
        width: "100%",
        border: "none",
      }}
      allow="autoplay"
      allowFullScreen
    ></iframe>

      </div>
    </div>
  );
}

