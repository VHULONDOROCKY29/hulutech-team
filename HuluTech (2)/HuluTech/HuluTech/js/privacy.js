document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject the Detailed HTML Modal
    const modalHTML = `
    <div id="privacyModal" class="modal">
      <div class="modal-content" id="modalContent" style="max-width: 700px; width: 95%;">
        <div id="policy-view">
          <h2 style="color: #E1AD01; margin-bottom: 5px;">PRIVACY POLICY</h2>
          <p style="color: #ccc; font-size: 0.8rem; margin-bottom: 15px;">Hulutech (Pty) Ltd | Last Updated: 2 April 2026</p>
          
          <div style="text-align: left; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; font-size: 0.85rem; line-height: 1.6; max-height: 350px; overflow-y: auto; margin-bottom: 20px; border: 1px solid rgba(225, 173, 1, 0.2); color: #fff;">
            
            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 0;">1. Introduction</h3>
            <p>Hulutech (Pty) Ltd (“Hulutech”, “we”, “our”, or “us”) is committed to protecting your personal information and respecting your privacy. This policy is designed in accordance with the <strong>Protection of Personal Information Act (POPIA)</strong>.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">2. Information We Collect</h3>
            <p>We collect Personal Identification (Name, Email, Phone, Company), Technical Data (IP address, usage logs), and Business Information required for service delivery.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">3. How We Collect Information</h3>
            <p>Data is collected via website forms, newsletter sign-ups, business contracts, and cookies/analytics tools.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">4. How We Use Your Information</h3>
            <p>To respond to enquiries, manage IT services, communicate updates, and comply with legal or regulatory obligations.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">5. Sharing Your Information</h3>
            <p><strong>We do not sell personal information.</strong> We only share data with trusted partners necessary for site functionality or legal authorities.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">6. Data Security</h3>
            <p>We implement technical and organisational measures, including secure cloud platforms and access controls, to prevent unauthorised access.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">7. Data Retention</h3>
            <p>Information is kept only as long as necessary for business or legal requirements, then securely deleted or anonymised.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">8. Your Privacy Rights</h3>
            <p>Under POPIA, you have the right to access, correct, or request deletion of your information at any time.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">9. Cookies and Tracking</h3>
            <p>We use cookies to enhance user experience. You can manage these via your browser settings.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">10. Third-Party Links</h3>
            <p>We are not responsible for the privacy practices of external sites linked on our platform.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">11. Policy Updates</h3>
            <p>This policy may be updated periodically. Changes will be posted here with a revised date.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">12. Contact Information</h3>
            <p>Hulutech (Pty) Ltd<br>Email: info@hulutech.co.za<br>Website: www.hulutech.co.za</p>
          </div>

          <div style="display: flex; justify-content: center; gap: 10px;">
            <button id="acceptBtn" class="btn btn-accept">Accept & Continue</button>
            <button id="rejectBtn" class="btn btn-reject">Decline</button>
          </div>
        </div>

        <div id="success-view" style="display: none;">
          <h2 style="color: #E1AD01;">✔ PREFERENCES SAVED</h2>
          <p>Thank you for trusting HULUTECH. You may now proceed.</p>
          <button id="closeSuccess" class="btn btn-accept" style="width: 100%; margin-top: 15px;">Enter Site</button>
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