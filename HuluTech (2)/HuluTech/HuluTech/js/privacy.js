document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject the Detailed HTML Modal
    const modalHTML = `
    <div id="privacyModal" class="modal">
      <div class="modal-content" id="modalContent">
        <div id="policy-view">
          <h2 style="color: #E1AD01; margin-bottom: 10px;">PRIVACY & DATA</h2>
          
          <div style="text-align: left; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; font-size: 0.85rem; line-height: 1.5; max-height: 200px; overflow-y: auto; margin-bottom: 20px; border: 1px solid rgba(225, 173, 1, 0.2);">
            <p><strong>Welcome to HULUTECH.</strong> To provide a secure experience, we follow industry-standard practices:</p>
            <ul style="padding-left: 20px; margin: 10px 0;">
              <li><strong>Data Security:</strong> We use end-to-end encryption for all personal identifiers.</li>
              <li><strong>Cookies:</strong> We use essential cookies to maintain your session and site performance.</li>
              <li><strong>Third Parties:</strong> Your data is never sold. We only share info with partners necessary for site functionality.</li>
              <li><strong>Usage:</strong> By continuing, you agree to our collection of anonymous analytics to improve our services.</li>
            </ul>
            <p>You can request data deletion at any time by contacting our support team.</p>
          </div>

          <div style="display: flex; justify-content: center; gap: 10px;">
            <button id="acceptBtn" class="btn btn-accept">Accept & Continue</button>
            <button id="rejectBtn" class="btn btn-reject">Decline</button>
          </div>
        </div>

        <div id="success-view" style="display: none;">
          <h2 style="color: #E1AD01;">✔ PREFERENCES SAVED</h2>
          <p>Thank you for trusting HULUTECH. You may now proceed.</p>
          <button id="closeSuccess" class="btn btn-accept" style="width: 100%;">Enter Site</button>
        </div>
      </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // ... (Keep the rest of your variables and logic below as they were)
    const modal = document.getElementById("privacyModal");
    const privacyLink = document.getElementById("privacyLink");

    if (localStorage.getItem("privacyStatus") !== "accepted") {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    if (privacyLink) {
        privacyLink.onclick = (e) => {
            e.preventDefault();
            modal.style.display = "block";
            document.getElementById("policy-view").style.display = "block";
            document.getElementById("success-view").style.display = "none";
            document.body.style.overflow = "hidden";
        };
    }

    document.getElementById("acceptBtn").onclick = () => {
        localStorage.setItem("privacyStatus", "accepted");
        document.getElementById("policy-view").style.display = "none";
        document.getElementById("success-view").style.display = "block";
    };

    document.getElementById("rejectBtn").onclick = () => {
        alert("Action Required: You must accept the Privacy Policy to browse this site.");
    };

    document.getElementById("closeSuccess").onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };
});