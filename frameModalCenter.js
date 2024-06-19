(function () {
  // Inject CSS
  var css = `
    .mattressai-button-style {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: #2196F3;
      backdrop-filter: blur(60px);
      padding: 12px 24px;
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      bottom: 20px;
      border-radius: 20px;
      z-index: 50;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      cursor: pointer;
      color: white;
      font-family: Montserrat, sans-serif;
      font-size: 16px;
      font-weight: bold;
    }
    .mattressai-button-style:hover {
      background-color: #52525bA6;
    }
    .mattressai-button-image {
      margin-right: 10px;
      border-radius: 9999px;
    }
    .mattressai-modal-background {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 50;
      backdrop-filter: blur(10px);
    }
    .mattressai-modal-container {
      border: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #18181b;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      max-width: 90%;
      width: 80%;
      height: 85%;
      max-height: 900px;
    }
    iframe {
      border: none;
      border-radius: 20px;
      width: 100%;
      height: 100%;
    }
    @media (max-width: 768px) {
      .mattressai-modal-container {
        position: fixed !important;
        bottom: 0 !important; /* Anchor to the bottom */
        left: 0 !important; /* Stretch to the left edge */
        right: 0 !important; /* Stretch to the right edge */
        top: auto !important; /* Override any top positioning */
        height: 90vh; /* 90% of the viewport height */
        width: 100vw; /* Full viewport width */
        min-width: 100vw;
        margin: 0 !important;
        padding: 0 !important;
        border-radius: 0 !important;
        box-shadow: none !important; /* Optional: remove shadow if not needed */
        transform: none !important; /* Remove transform */
      }
    }

  `;
  var style = document.createElement("style");
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.head.appendChild(style);

  var userConfig = window.myChatbotConfig || {};
  var iframeSrc =
    userConfig.src ||
    "https://dashboard.themattressai.com/QRchat/OkHkFvjcqccNfikX2m8EfnPEfjJ3";

  var html = `
    <button onclick="openModal()" class="mattressai-button-style">
      <img
        class="mattressai-button-image"
        src="https://res.cloudinary.com/djr22sgp3/image/upload/v1689685357/mattress_ai_logo_circle_2_aw3f3q.png"
        width="40"
        alt="Open Modal"
      />
      <span>Find Your Mattress</span>
    </button>

    <div id="modal" class="mattressai-modal-background" style="display: none; width: 100%; height: 100%;" onclick="closeModal(event)">
      <div class="mattressai-modal-container" onclick="event.stopPropagation()">
        <iframe src="${iframeSrc}" style="border-radius: 20px; width: 100%; height: 100%;"></iframe>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", html);

  // JavaScript functions
  window.openModal = function () {
    document.getElementById("modal").style.display = "block";
  };

  window.closeModal = function (event) {
    event.stopPropagation();
    document.getElementById("modal").style.display = "none";
  };
})();